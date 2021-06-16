const { Router } = require("express");
const { 
    addPembayaran,
    getUserKostStatus,
    getPemilikBookRequests,
    updatePembayaranStatus,
    getPenyewaBookRequests,
    clearPembayaranStatus

} = require("../controllers/pembayaran.controller");
const penyewaAuth = require("../middleware/penyewaAuth");
const pemilikAuth = require("../middleware/pemilikAuth");

const router = Router() 

router.post("/addPembayaran", penyewaAuth, addPembayaran);
router.get("/getUserKostStatus", penyewaAuth, getUserKostStatus);
router.get("/getPenyewaBookRequests", penyewaAuth, getPenyewaBookRequests);
router.get("/getPemilikBookRequests", pemilikAuth, getPemilikBookRequests);
router.put("/updatePembayaranStatus", pemilikAuth, updatePembayaranStatus);
router.put("/clearPembayaranStatus", pemilikAuth, clearPembayaranStatus);


getUserKostStatus
module.exports = router