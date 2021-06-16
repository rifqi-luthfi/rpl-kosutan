const { Router } = require("express");
const { 
    getAllKost,
    getKostByCity,
    getKostById,
    getUserKost,
    addKostPhoto,
    addKostData,
    deleteKost,
    getKostResident,
    updateKostData,
    getKostByKeyword

} = require("../controllers/kost.controller");
const pemilikAuth = require("../middleware/pemilikAuth");


const router = Router() 

router.get("/getAllKost", getAllKost);
router.get("/getKostByCity", getKostByCity)
router.get("/getKostById", getKostById)
router.get("/getUserKost", pemilikAuth, getUserKost)
router.get("/getKostResident", pemilikAuth, getKostResident)
router.get("/getKostByKeyword", getKostByKeyword)
router.post("/addKostPhoto", pemilikAuth, addKostPhoto)
router.post("/addKostData", pemilikAuth, addKostData)
router.delete("/deleteKost", pemilikAuth, deleteKost)
router.put("/updateKostData", pemilikAuth, updateKostData)



module.exports = router