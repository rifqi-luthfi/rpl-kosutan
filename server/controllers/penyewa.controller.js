const pool = require("../db")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')


const getAllUsers = async (req, res) => {
    const response = await pool.query("SELECT * FROM penyewa")
    res.send("test")
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ msg: "Missing field" })
        }

        const user = await pool.query("SELECT * FROM PENYEWA WHERE email = $1::text LIMIT 1", [email])

        if (user.rows.length == 0 || user.rows === undefined) {
            return res.status(400).json({ msg: "Email does not exists" })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.rows[0].password)

        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid password" })
        }

        const token = jwt.sign({
            id: user.rows[0].id_penyewa
        }, process.env.JWT_SECRET_PENYEWA)

        res
            .cookie("token", token, {
                httpOnly: true,
                sameSite: "strict"
            })
            .send("cookie initialized")

    } catch (error) {
        return res.status(500).json(error)
    }
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

const isTokenValid = async (req, res) => {
    try {
        // Check is token exist?
        const token = req.cookies.token;
        if (!token) return res.json(false);

        // Verify token
        const tokenVerified = jwt.verify(token, process.env.JWT_SECRET_PENYEWA);
        if (!tokenVerified) {
            return res.json(false);
        }
        
        // Check if user with id token exist
        const user = await pool.query("SELECT * FROM PENYEWA WHERE id_penyewa = $1 LIMIT 1", [tokenVerified.id])
        if (user.rows.length == 0 || user.rows === undefined) {
          return res.json(false);
        }
        return res.send(true);
      } catch (err) {
        return res.json(false);
      }
}

const getUserLoggedIn = async (req, res) => {
    try {
        const id = req.userId;
        if (!id) {
            return res.status(400).json({ msg: "User ID is not exist" });
        }
    
        const user = await pool.query("SELECT * FROM PENYEWA WHERE id_penyewa = $1 LIMIT 1", [id])
        if (user.rows.length == 0 || user.rows === undefined) {
            return res.status(400).json({ msg: "User account not found" });
        }
    
        res.json({
            id: user.rows[0].id_penyewa,
            email: user.rows[0].email,
            nama_awal: user.rows[0].nama_awal,
            nama_akhir: user.rows[0].nama_akhir,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const endSession = async (req, res) => {
    try {
        res.cookie(
            "token", "", {
                expires: new Date(1)
            }
        ).send(true)
    } catch (error) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    isTokenValid,
    getUserLoggedIn,
    endSession
}