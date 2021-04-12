const pool = require("../db")
const bcrypt = require("bcryptjs");


const getAllUsers = async (req, res) => {
    const response = await pool.query("SELECT * FROM penyewa")
    console.log(response.rows)
    res.send("test")
}

const registerUser = async (req, res) => {
    try {
        const { nama_awal, nama_akhir, email, password, password_confirmation, no_hp } = req.body

        if (!nama_awal || !nama_akhir || !email || !password || !no_hp) {
            return res.status(400).json({ msg: "Missing field" })
        }

        if (password.length < 5) {
            return res.status(400).json({ msg: "Passowrd must atleast 5 charaters long" });
        }

        if (password != password_confirmation) {
            return res.status(400).json({ msg: "Password confirmation different from password" });
        }

        // cek email exists
        let emailExist = false
        await pool.query("SELECT exists (SELECT 1 FROM penyewa WHERE email = $1::text LIMIT 1)", [email])
            .then(response => emailExist = response.rows[0].exists)
            .catch(err => res.status(500).json({
                msg: "EMAIL QUERY ERROR", 
                err: err
            }))

        if (emailExist) {
            return res.status(400).json({ msg: "Email is already exist" });
        }

        const salt = await bcrypt.genSalt();

        const passwordHashed = await bcrypt.hash(password, salt)

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