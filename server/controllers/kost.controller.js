const pool = require("../db")
const bcrypt = require("bcryptjs");


const getAllKost = async (req, res) => {
    const response = await pool.query("SELECT * FROM kost")
    console.log(response.rows)
    res.send("test")
}

const postKost = async (req, res) => {
    try {
        const { nama, alamat, kota, jenis_kost, deskripsi, harga } = req.body

        if (!nama || !alamat || !kota || !jenis_kost || !deskripsi || !harga) {
            return res.status(400).json({ msg: "Missing field" })
        }

        if (nama.length < 5) {
            return res.status(400).json({ msg: "Nama must atleast 5 charaters long" });
        }

        const salt = await bcrypt.genSalt();

        await pool.query(
            "INSERT INTO penyewa(nama_awal, nama_akhir, email, password, no_hp) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [nama_awal, nama_akhir, email, passwordHashed, no_hp]
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

module.exports = {
    getAllUsers,
    registerUser
}