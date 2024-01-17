import { Router } from "express";
import UserController from "../controller/UserController";

const UserRoute = Router();

UserRoute.get("/list", UserController.listaUsers);

UserRoute.post("/insert", UserController.criaUser);

UserRoute.patch("/update", UserController.atualizaUser);

UserRoute.delete("/delete", UserController.deletaUser);

export default UserRoute;