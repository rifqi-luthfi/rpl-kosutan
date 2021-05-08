const { Router } = require("express");
const { 
    getAllUsers,
    registerUser,
    loginUser,
    isTokenValid,
    getUserLoggedIn,
    endSession

} = require("../controllers/penyewa.controller");
const penyewaAuth = require("../middleware/penyewaAuth");
const router = Router() 


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/isTokenValid", isTokenValid)
router.get("/getUserLoggedIn", penyewaAuth, getUserLoggedIn)
router.get("/endSession", endSession)


module.exports = router