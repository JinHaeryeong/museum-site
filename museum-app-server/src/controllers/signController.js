const pool = require("../config/dbPools");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (user, secret, expirein) => {
    return jwt.sign(user, secret, { expiresIn: expirein });
};

exports.signin = async (req, res) => {
    const { email, passwd } = req.body;
    try {
        const sql = `SELECT email, passwd FROM users WHERE email = ?`;
        const [result] = await pool.query(sql, [email]);
        if (result.length === 0) return res.status(401).json({ result: "fail", message: "가입된 회원이 아닙니다" });
        const tmpUser = result[0];
        const isMatch = await bcrypt.compare(passwd, tmpUser.passwd);
        if (!isMatch) {
            return res.status(401).json({ result: "fail", message: "아이디 또는 비밀번호가 잘못되었습니다." });
        }
        const { passwd: _, ...userPayload } = tmpUser;

        const accessToken = generateToken(userPayload, process.env.ACCESS_SECRET, "15m"); //15분
        const refreshToken = generateToken(userPayload, process.env.REFRESH_SECRET, "1h"); //1시간

        const sql2 = `update users set refreshtoken = ? where email = ?`;
        await pool.query(sql2, [refreshToken, email]);

        res.json({ result: "success", message: "로그인 성공!", data: { accessToken, refreshToken, ...userPayload } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: "fail", message: "회원 인증 실패: " + error.message });
    }
};

exports.signout = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ result: "fail", message: "유효하지 않은 요청입니다." });
    }

    const sql = `update users set refreshtoken = null where email = ?`;
    try {
        const [result] = await pool.query(sql, [email]);
        if (result.affectedRow === 0) {
            res.status(400).json({ result: "fail", message: "로그아웃 실패" });
        }
        res.json({ result: "success", message: "로그아웃 처리되었어요" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: "fail", message: "로그아웃 실패: " + error.message });
    }
};

exports.getAuthenticUser = (req, res) => {
    res.json(req.authUser);
};

exports.refreshVerify = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ result: "fail", message: "유효한 사용자가 아닙니다" });
    }
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, async (err, decoded) => {
        if (err) {
            // 유효하지 않은 토큰인 경우
            return res.status(403).json({ result: "fail", message: "유효하지 않은 refreshToeken입니다" });
        }
        // 유효한 토큰일 경우 => members에서 refreshToken으로 회원정보 가져오기
        const sql = `select id, name, email, role from users where refreshToken = ?`;
        try {
            const [result] = await pool.query(sql, [refreshToken]);
            if (result.length === 0) {
                res.status(403).json({ result: "fail", message: "유효하지 않은 회원입니다." });
            }
            const user = result[0];
            // 새 accessToken 발급
            const newAccessToken = generateToken(user, process.env.ACCESS_SECRET, "15m");
            res.json({ accessToken: newAccessToken });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ result: "error", message: "Server Error: " + error.message });
        }
    }); //verify
};
