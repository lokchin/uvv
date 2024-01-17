import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../service/UserService";

class UserController 
{
    constructor() { }
    async listUsers(req: Request, res: Response) 
    {
        const users = await UserService.listUser() as Prisma.UserCreateInput[];
        const filteredUsers = users.filter((user: Prisma.UserCreateInput) => user.nome != null)
        return res.status(200).json({
            status: 'ok',
            users: filteredUsers
        })
    }

    async createUser(req: Request, res: Response)
     {
        const dados: Prisma.UserCreateInput = req.body;
        if (dados) 
        {
            const newuser = UserService.createUser(dados);
            res.status(200).json({
                status: '20',
                newuser: newuser
            });
        } 
        else 
        {
            res.status(400).json({
                status: 'error',
                mensage: 'Erro ao inserir usuário.'
            });
        }


        res.end('Incluir Usuarios');
    }

    async deleteUser(req: Request, res: Response) 
    {
        res.send('Remover Usuario');
    }

    async updateUser(req: Request, res: Response) 
    {
        res.send('Atualizar Usuario');
    }
}

export default new UserController;