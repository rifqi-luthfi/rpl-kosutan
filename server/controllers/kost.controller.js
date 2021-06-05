const pool = require("../db")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { toProperCase } = require("./controller.util");


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
        const response = await pool.query("SELECT * FROM kost INNER JOIN kota ON kost.id_kota=kota.id_kota WHERE id_kost = $1 LIMIT 1", [id])
        res.send(response.rows[0])
    } catch (error) {
        return res.status(500).json({ msg: error })
        
    }
}
module.exports = {
    getAllKost,
    getKostByCity,
    getKostById
}