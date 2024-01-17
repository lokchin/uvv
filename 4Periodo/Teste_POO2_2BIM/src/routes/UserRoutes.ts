import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();
UserRouter.get("/users", UserController.listUsers);
UserRouter.post("/user", UserController.createUser);
UserRouter.put("/user", UserController.updateUser);
UserRouter.delete("/usuario", UserController.deleteUser);

export default UserRouter;