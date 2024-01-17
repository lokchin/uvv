import { Router } from "express";
import LanceController from "../controller/LanceController";

const LanceRoute = Router();

LanceRoute.get("/list", LanceController.listaLances);

LanceRoute.post("/insert", LanceController.criaLance);

LanceRoute.patch("/update", LanceController.atualizaLance);

LanceRoute.delete("/delete", LanceController.deletaLance);

export default LanceRoute;