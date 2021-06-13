const { Router } = require("express");
const { 
    addPembayaran,
    getUserKostStatus,
    getPemilikBookRequests

} = require("../controllers/pembayaran.controller");
const penyewaAuth = require("../middleware/penyewaAuth");
const pemilikAuth = require("../middleware/pemilikAuth");

const router = Router() 

router.post("/addPembayaran", penyewaAuth, addPembayaran);
router.get("/getUserKostStatus", penyewaAuth, getUserKostStatus);
router.get("/getPemilikBookRequests", pemilikAuth, getPemilikBookRequests);


getUserKostStatus
module.exports = router