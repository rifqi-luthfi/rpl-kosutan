const { Router } = require("express");
const { 
    postRekening,

} = require("../controllers/rekening.controller");
const pemilikAuth = require("../middleware/pemilikAuth");


const router = Router() 

router.post("/postRekening", pemilikAuth, postRekening);


module.exports = router