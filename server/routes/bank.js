const { Router } = require("express");
const { 
    getAllBank,

} = require("../controllers/bank.controller");

const router = Router() 

router.get("/getAllBank", getAllBank);


module.exports = router