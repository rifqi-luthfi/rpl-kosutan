const pool = require("../db")


const getAllBank = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM bank")
        res.send(response.rows)
        
    } catch (error) {
        return res.status(500).json({ msg: error })

    }
}

module.exports = {
    getAllBank
}
