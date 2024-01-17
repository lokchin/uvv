import { Prisma } from "@prisma/client";
import {Request, Response} from "express";
import LeilaoService from "../service/LeilaoService";

class LeilaoController
{
    constructor(){ }

    async listLeiloes(req: Request, res: Response)
    {
        const leiloes = await LeilaoService.listLeiloes() as Prisma.LeilaoCreateInput[];
        const filteredLeiloes = leiloes.filter((leilao: Prisma.LeilaoCreateInput) => leilao.idLeilao != null)
        return res.status(200).json({
            status: 'ok',
            users: filteredLeiloes
        })
    }  
    
    async createLeilao(req: Request, res: Response)
    {
        const dados: Prisma.LeilaoCreateInput = req.body;
        if(dados){
            const newleilao = LeilaoService.createLeilao(dados);
            res.status(200).json({
                status: '20',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                mensage: 'Erro ao inserir leilão'
            });
        }
        
    
        res.end('Incluir Leilao');
    }

    async deleteLeilao(req: Request, res: Response)
    {
        res.send('Remover Leilao');
    }

    async updateLeilao(req: Request, res: Response)
    {
        res.send('Atualizar Leilao');
    }
}

export default new LeilaoController;