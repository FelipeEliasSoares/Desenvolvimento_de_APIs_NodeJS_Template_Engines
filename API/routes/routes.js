const express = require("express");
const routerApp = express.Router();
const ctlControleEscolar = require("../controller/ctlControleEscolar");

routerApp.get("/salas", ctlControleEscolar.GetAllSalaDeAula);
routerApp.get("/salas/:id", ctlControleEscolar.GetSalaDeAulaById);
routerApp.post("/salas", ctlControleEscolar.InsertSalaDeAula);
routerApp.put("/salas/:id", ctlControleEscolar.UpdateSalaDeAula);
routerApp.delete("/salas/:id", ctlControleEscolar.DeleteSalaDeAula);

module.exports = routerApp;
