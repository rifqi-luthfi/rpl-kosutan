const { Router } = require("express");
const { 
    getAllKost,
    getKostByCity,
    getKostById

} = require("../controllers/kost.controller");

const router = Router() 

router.get("/getAllKost", getAllKost);
router.get("/getKostByCity", getKostByCity)
router.get("/getKostById", getKostById)



module.exports = router