const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser')
require("dotenv").config();

// connect database PostgreSQL
const pool = require("./db")

// menggunakan express backend 
const app = express() 

// package yang digunakan
app.use(cookieParser());
app.use(cors())
app.use(express.json())

// gunakan port sesuai setting env, jika tidak ada gunakan port 5000 (default)
const PORT = process.env.PORT || 5000;

// listen ke port
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

// connect backend route
app.use("/penyewa", require("./routes/penyewa"))
app.use("/kost", require("./routes/kost"))



