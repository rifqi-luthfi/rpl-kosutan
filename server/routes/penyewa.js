const { Router } = require("express");
const { 
    getAllUsers,
    registerUser,

} = require("../controllers/penyewa.controller");
const router = Router() 


router.post("/register", registerUser);

module.exports = router