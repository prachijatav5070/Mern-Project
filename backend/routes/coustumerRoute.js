const express = require("express");
const route = express.Router();
const coutController = require("../controllers/coustumerController");

route.post("/datasave", coutController.dataSave);
route.get("/datadisplay", coutController.dataDisplay);
route.post("/datasearch", coutController.dataSearch);
route.get("/deletedisplay", coutController.deleteDataDisplay);
route.post("/recorddelete", coutController.recordDelete);
route.get("/editdisplay", coutController.editDisplay);
route.post("/editsave", coutController.editDataSave);




module.exports = route;
