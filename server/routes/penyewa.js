const { Router } = require("express");
const { 
    getAllUsers,
    registerUser,
    loginUser,
    isTokenValid

} = require("../controllers/penyewa.controller");
const penyewaAuth = require("../middleware/penyewaAuth");
const router = Router() 


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/isTokenValid", isTokenValid)
router.get("/getUserLoggedIn", penyewaAuth, isTokenValid)


module.exports = router