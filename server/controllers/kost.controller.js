const pool = require("../db")
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const getAllKost = async (req, res) => {
    try {
        console.log("test")
        const response = await pool.query("SELECT * FROM kost")
        res.send(response.rows)
        
    } catch (error) {
        return res.status(500).json(error)
    }
    
}
module.exports = {
    getAllKost
