const pool = require("../db")

const addPembayaran = async (req, res) => {
    try {
        const { id_rekening, id_penyewa, total_pembayaran, id_kost } = req.body
        const tanggal_trf = new Date
        const status = "pending"

        if (!id_rekening || !total_pembayaran) {
            return res.status(400).json({ msg: "Missing field" })
        }

        await pool.query(
            "INSERT INTO pembayaran(id_penyewa, id_kost, id_rekening, tanggal_trf, total_pembayaran, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [id_penyewa, id_kost, id_rekening, tanggal_trf, total_pembayaran, status]
        )
            .then(response => res.json(response.rows[0]))
            .catch(err => res.status(500).json({
                msg: "INSERT QUERY ERROR",
                err: err
            }))

        
    } catch (error) {
        return res.status(500).json({ msg: error })

    }
}

const getUserKostStatus = async (req, res) => {
    try {
        let { id_penyewa, id_kost } = req.query
        const response = await pool.query("SELECT * FROM pembayaran INNER JOIN penyewa ON pembayaran.id_penyewa = penyewa.id_penyewa WHERE penyewa.id_penyewa= $1 AND pembayaran.id_kost=$2 LIMIT 1;", [id_penyewa, id_kost])
        res.send(response.rows[0])
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = {
    addPembayaran,
    getUserKostStatus
}
