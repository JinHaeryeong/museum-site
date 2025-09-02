// controllers/reservationController.js
const pool = require("../config/dbPools");


exports.list = async (req, res) => {
    //페이지네이션 page=1, perPage=10
    const userId = Number(req.query.userId || req.query.user_id);
    const page = Math.max(1, Number(req.query.page || 1));
    const perPage = Math.max(1, Math.min(50, Number(req.query.perPage || 10)));
    const offset = (page - 1) * perPage;

    if (!userId) {
        return res.status(400).json({ result: "fail", message: "userId는 필수입니다." });
    }

    try {
        const sqlCount = `SELECT COUNT(*) AS total FROM reservations WHERE user_id = ?`;
        const [cntRows] = await pool.query(sqlCount, [userId]);
        const total = cntRows[0]?.total || 0;

        const sqlList = `
            SELECT
                reservations.id,
                exhibitions.name AS title,
                DATE_FORMAT(reservations.visit_datetime, '%Y-%m-%d %H:%i') AS visitAt,
                DATE_FORMAT(reservations.created_at, '%Y-%m-%d') AS appliedAt,
                reservations.status,
                reservations.person_count AS guests
            FROM reservations
            JOIN exhibitions ON reservations.exhibition_id = exhibitions.id
            WHERE reservations.user_id = ?
            ORDER BY reservations.created_at DESC
            LIMIT ? OFFSET ?
        `;
    
    const [rows] = await pool.query(sqlList, [userId, perPage, offset]);

    return res.json({
        result: "success",
        data: {
            total,
            page,
            perPage,
            items: rows.map(r => ({
            id: String(r.id),
            title: r.title,
            visitAt: r.visitAt,
            appliedAt: r.appliedAt,
            status: r.status,
            guests: String(r.guests),
        })),
      },
    });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ result: "fail", message: "예약 조회 실패: " + error.message });
    }
};

exports.create = async (req, res) => {
    const { user_id, exhibition_id, person_count, visit_datetime, status } = req.body;

    if (!user_id || !exhibition_id || !visit_datetime) {
        return res
        .status(400)
        .json({ result: "fail", message: "user_id, exhibition_id, visit_datetime은 필수입니다." });
    }

    try {
        const sql = `
            INSERT INTO reservations (user_id, exhibition_id, person_count, visit_datetime, status)
            VALUES (?, ?, ?, ?, ?)
        `;
        const params = [
            Number(user_id),
            Number(exhibition_id),
            Number(person_count || 1),
            visit_datetime,
            status || "예약완료",
        ];
        const [result] = await pool.query(sql, params);

        if (result.affectedRows > 0) {
            return res.json({
                result: "success",
                message: "예약이 생성되었습니다.",
                data: { id: result.insertId },
            });
        }
        return res.status(400).json({ result: "fail", message: "예약 생성 실패" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ result: "fail", message: "예약 생성 실패: " + error.message });
    }
};


exports.cancel = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) {
        return res.status(400).json({ result: "fail", message: "예약 id가 유효하지 않습니다." });
    }

    try {
        const sql = `UPDATE reservations SET status = '취소' WHERE id = ?`;
        const [result] = await pool.query(sql, [id]);

        if (result.affectedRows > 0) {
            return res.json({ result: "success", message: "예약이 취소되었습니다." });
        }
        return res.status(404).json({ result: "fail", message: "해당 예약을 찾을 수 없습니다." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ result: "fail", message: "예약 취소 실패: " + error.message });
    }
};
