//exhibitions
const pool = require("../config/dbPools");

exports.loadCalendar = async (req, res) => {
    const sql =
        "select name as title, startdate as start, DATE_FORMAT(DATE_ADD(enddate, INTERVAL 1 DAY), '%Y-%m-%d') as 'end' from exhibitions order by startdate";

    try {
        const [result] = await pool.query(sql);
        if (result.length === 0) {
            res.status(204).json({ result: "fail", message: "저장된 일정이 없어요" });
        }
        res.json({ data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: "fail", message: "서버 오류: " + error.message });
    }
};
