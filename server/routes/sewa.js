const { Router } = require("express");
const { 
    addSewaDocument,
    deleteKostResidentById,
    getUserHistory

} = require("../controllers/sewa.controller");
const pemilikAuth = require("../middleware/pemilikAuth");
const penyewaAuth = require("../middleware/penyewaAuth");
const router = Router() 


router.get("/getUserHistory", penyewaAuth, getUserHistory)
router.post("/addSewaDocument", pemilikAuth, addSewaDocument);
router.delete("/deleteKostResidentById", pemilikAuth, deleteKostResidentById)


module.exports = router