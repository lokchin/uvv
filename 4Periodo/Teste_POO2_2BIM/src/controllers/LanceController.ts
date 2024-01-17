import { Prisma } from "@prisma/client";
import  { Request, Response } from "express";
import LanceService from "../service/LanceService";

class LanceController
{
    constructor(){ }
    async listLances(req: Request, res: Response)
    {
        const lances = await LanceService.listLances() as Prisma.LanceCreateInput[];
        const filteredLances = lances.filter((lance: Prisma.LanceCreateInput) => lance.idLance != null)
        return res.status(200).json({
            status: 'ok',
            users: filteredLances
        })
    }  
    
    async createLance(req: Request, res: Response)
    {
        const dados: Prisma.LanceCreateInput = req.body;
        if(dados)
        {
            const newlance = LanceService.createLance(dados);
            res.status(200).json({
                status: '20',
                newlance: newlance
            });
        }
        else
        {
            res.status(400).json({
                status: 'error',
                mensage: 'Erro ao inserir lance'
            });
        }
        
    
        res.end('Incluir Lance');
    }

    async deleteLance(req: Request, res: Response)
    {
        res.send('Remover lance');
    }

    async updateLance(req: Request, res: Response)
    {
        res.send('Atualizar Lance');
    }
}

export default new LanceController;