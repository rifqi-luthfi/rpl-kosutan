const { Router } = require("express");
const pemilikAuth = require("../middleware/pemilikAuth");

const { 
    getPemilikRekening,
    registerUser,
    loginUser,
    isTokenValid,
    getUserLoggedIn,
    endSession
} = require("../controllers/pemilik.controller");
const router = Router() 

router.get("/getPemilikRekening", getPemilikRekening)
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/isTokenValid", isTokenValid)
router.get("/getUserLoggedIn", pemilikAuth, getUserLoggedIn)
router.get("/endSession", endSession)



module.exports = router