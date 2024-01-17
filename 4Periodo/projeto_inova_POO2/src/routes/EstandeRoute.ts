import { Router } from "express";
import EstandeController from "../controllers/EstandeController";

const EstandeRoute = Router();

EstandeRoute.get("/", EstandeController.getAll);

EstandeRoute.post("/insert", EstandeController.insert);

EstandeRoute.delete("/delete/:numero", EstandeController.delete);

export default EstandeRoute;