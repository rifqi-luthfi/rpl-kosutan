const pool = require("../db")
const multer = require('multer')


const getAllKost = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM kost")
        res.send(response.rows)
        
    } catch (error) {
        return res.status(500).json({ msg: error })

    }
}

const getKostByCity = async (req, res) => {
    try {
        let { city } = req.query
        city = city.toProperCase()
        const response = await pool.query("SELECT * FROM kost INNER JOIN kota ON kost.id_kota=kota.id_kota WHERE kota.id_kota = ( SELECT id_kota FROM kota WHERE nama_kota = $1);", [city])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getKostById = async (req, res) => {
    try {
        let { id } = req.query
        const response = await pool.query("SELECT * FROM kost INNER JOIN kota ON kost.id_kota=kota.id_kota INNER JOIN pemilik ON pemilik.id_pemilik = kost.id_pemilik WHERE id_kost = $1 LIMIT 1", [id])
        res.send(response.rows[0])
    } catch (error) {
        return res.status(500).json({ msg: error })
        
    }
}

const getUserKost = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM kost WHERE id_pemilik = $1", [req.userId])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

const addKostPhoto = async (req, res) => {
    try {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public/kosts')
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' +file.originalname )
            }
        }) 

        const upload = multer({ storage: storage }).single('file')

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {

                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send(req.file)
        })

    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

const addKostData = async (req, res) => {
    try {
        const { nama, alamat, kota, jenis_kost, deskripsi, harga, img } = req.body
        if (!nama || !alamat || !kota || !jenis_kost || !deskripsi || !harga || !img) {
            return res.status(400).json({ msg: "Missing field" })
        }
        const response = await pool.query("INSERT INTO kost (id_pemilik, id_kota, nama_kost, alamat_kost, harga, jenis_kost, deskripsi, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [
            req.userId, 
            kota, 
            nama, 
            alamat,
            harga, 
            jenis_kost, 
            deskripsi, 
            img
        ])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

const deleteKost = async (req, res) => {
    try {
        const { id } = req.query
        const response = await pool.query("DELETE FROM kost WHERE id_kost = $1;", [id])
        res.send(response.rows)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllKost,
    getKostByCity,
    getKostById,
    getUserKost,
    addKostPhoto,
    addKostData,
    deleteKost
}
