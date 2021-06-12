const { Router } = require("express");
const { 
    addPembayaran,
    getUserKostStatus

} = require("../controllers/pembayaran.controller");

const router = Router() 

router.post("/addPembayaran", addPembayaran);
router.get("/getUserKostStatus", getUserKostStatus);


getUserKostStatus
module.exports = router