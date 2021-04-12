const express = require("express")
const cors = require("cors")
require("dotenv").config();

const pool = require("./db")

const app = express() 
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.use("/penyewa", require("./routes/penyewa"))



