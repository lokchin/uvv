import { Request, Response } from "express"
import UserService from "../services/UserService"
import {Prisma} from "@prisma/client"

class UserController {
    constructor(){}

    async listaUsers(req: Request, res: Response) {
        try {
            const users = await UserService.listaUsers();
            return res.json(users);
        } catch (error) {
            console.log('Erro ao listar usuários', error);
            return res.json(400);
        }
    }

    async criaUser(req: Request, res: Response) {
        try {
            const data: Prisma.UserCreateInput = req.body;
            const novoUser = await UserService.criaUser(data)
            return res.json(novoUser);
        } catch(error) {
            console.log("Erro no cadastro de um novo user", error);
            return res.json(400);
        }
    }

    async atualizaUser(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const data: Prisma.UserCreateInput = req.body;
            const user = await UserService.atualizarUser(userId, data);
            return res.json(user);
        } catch (error) {
            console.log("Erro na atualização do user", error);
            return res.json(400);
        }
    }

    async deletaUser(req: Request, res: Response) {
        try {
            const userData: string = req.params.userId;
            const user = await UserService.deletaUser(userData)
            return res.json(user)
        } catch (error) {
            console.log("Erro na exclusão do usuario", error);
            return null;
        }
    }
}

export default new UserController();