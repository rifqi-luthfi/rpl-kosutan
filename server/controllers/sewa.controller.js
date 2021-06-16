const pool = require("../db")

const addSewaDocument = async (req, res) => {
    try {
        const { id_kost, id_penyewa, id_pembayaran } = req.body

        if (!id_kost || !id_penyewa || !id_pembayaran) {
            return res.status(400).json({ msg: "Missing field" })
        }

        const tanggal_sewa = new Date()
        const status = "ongoing"

        await pool.query(
            "INSERT INTO sewa(id_kost, id_penyewa, id_pembayaran, tanggal_sewa, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [id_kost, id_penyewa, id_pembayaran, tanggal_sewa, status]
        )
            .then(response => res.json(response.rows[0]))
            .catch(err => res.status(500).json({
                msg: "INSERT QUERY ERROR",
                err: err
            }))
            
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteKostResidentById = async (req, res) => {
    try {
        const { id } = req.query
        const response = await pool.query("DELETE FROM sewa WHERE id_sewa = $1;", [id])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

const getUserHistory = async (req, res) => {
    try {
        const id = req.userId 
        const response = await pool.query("SELECT sewa.id_sewa, kost.id_kost, nama_kost, pembayaran.id_pembayaran, tanggal_sewa, sewa.status FROM sewa INNER JOIN pembayaran ON sewa.id_pembayaran = pembayaran.id_pembayaran INNER JOIN kost ON sewa.id_kost = kost.id_kost WHERE sewa.id_penyewa = $1", [id])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

module.exports = {
    addSewaDocument,
    deleteKostResidentById,
    getUserHistory
}
