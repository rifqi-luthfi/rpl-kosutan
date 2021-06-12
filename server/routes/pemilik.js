const { Router } = require("express");
const { 
    getPemilikRekening,
} = require("../controllers/pemilik.controller");
const router = Router() 

router.get("/getPemilikRekening", getPemilikRekening)


module.exports = router