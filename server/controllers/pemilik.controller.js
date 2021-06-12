const pool = require("../db")

const getPemilikRekening = async (req, res) => {
    try {
        let { id } = req.query
        const response = await pool.query("SELECT * FROM rekening INNER JOIN bank ON bank.id_bank = rekening.id_bank INNER JOIN pemilik ON rekening.id_pemilik = pemilik.id_pemilik WHERE pemilik.id_pemilik=$1", [id])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
        
    }
}
module.exports = {
    getPemilikRekening
}
