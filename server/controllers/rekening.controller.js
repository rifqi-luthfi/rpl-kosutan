const pool = require("../db")

const postRekening = async (req, res) => {
    try {
        const { id_bank, no_rek } = req.body
        const response = await pool.query("INSERT INTO rekening (id_pemilik, id_bank, no_rek) VALUES ($1, $2, $3)", [req.userId, id_bank, no_rek])
        res.send(response.rows)
        
    } catch (error) {
        return res.status(500).json({ msg: error })

    }
}

module.exports = {
    postRekening
}
