import { Router } from "express";
import LeilaoController from "../controller/LeilaoController"

const LeilaoRoute = Router();

LeilaoRoute.get("/list", LeilaoController.listaLeileos);

LeilaoRoute.post("/insert", LeilaoController.criaLeilao);

LeilaoRoute.patch("/update", LeilaoController.atualizarLeilao);

LeilaoRoute.delete("/delete", LeilaoController.deletaLeilao);

export default LeilaoRoute;