const { Router } = require("express");
const { 
    getAllKost,
    getKostByCity,
    getKostById,
    getUserKost,
    addKostPhoto,
    addKostData,
    deleteKost

} = require("../controllers/kost.controller");
const pemilikAuth = require("../middleware/pemilikAuth");


const router = Router() 

router.get("/getAllKost", getAllKost);
router.get("/getKostByCity", getKostByCity)
router.get("/getKostById", getKostById)
router.get("/getUserKost", pemilikAuth, getUserKost)
router.post("/addKostPhoto", pemilikAuth, addKostPhoto)
router.post("/addKostData", pemilikAuth, addKostData)
router.delete("/deleteKost", pemilikAuth, deleteKost)


module.exports = router