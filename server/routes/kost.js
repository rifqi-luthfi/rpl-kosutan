const { Router } = require("express");
const { 
    getAllKost,

} = require("../controllers/kost.controller");

const router = Router() 

router.get("/getAllKost", getAllKost);



module.exports = router