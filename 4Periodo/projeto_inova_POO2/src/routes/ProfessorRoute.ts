import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const ProfessorRoute = Router();

ProfessorRoute.get("/", ProfessorController.getAll);

ProfessorRoute.post("/insert", ProfessorController.insert);

ProfessorRoute.patch("/update/:matricula", ProfessorController.update);

ProfessorRoute.delete("/delete/:matricula", ProfessorController.delete);

export default ProfessorRoute;