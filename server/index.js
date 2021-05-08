const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser')
require("dotenv").config();


const pool = require("./db")

const app = express() 

app.use(cookieParser());
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.use("/penyewa", require("./routes/penyewa"))
app.use("/kost", require("./routes/kost"))



