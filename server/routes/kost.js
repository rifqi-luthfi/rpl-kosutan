const { Router } = require("express");
const { 
    getAllKost,
    postKost,

} = require("../controllers/kost.controller");
const router = Router() 


router.post("/postkost", postKost);

module.exports = router