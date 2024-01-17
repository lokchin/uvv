import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const GrupoRoute = Router();

GrupoRoute.get("/", GrupoController.getAll);

GrupoRoute.post("/insert", GrupoController.insert);

GrupoRoute.patch("/update/:nome", GrupoController.update);

GrupoRoute.delete("/delete/:nome", GrupoController.delete);

export default GrupoRoute;