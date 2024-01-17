import { Request, Response } from "express"
import {Prisma} from "@prisma/client"
import LeilaoService from "../services/LeilaoService";


class LeilaoController {
    constructor() {}
    
    async listaLeileos(req: Request, res: Response) {
        try {
            const leiloes = await LeilaoService.listaLeilao();
            return res.json(leiloes);
        } catch (error) {
            console.log('Erro ao listar os leilões', error);
            return res.json(400);
        }
    }

    async criaLeilao(req: Request, res: Response) {
        try {
            const data: Prisma.LeilaoCreateInput = req.body;
            const novoLeilao = await LeilaoService.criaLeilao(data);
            return res.json(novoLeilao);
        } catch (error) {
            console.log("Erro ao criar um leilão", error);
            return res.json(400);
        }
    }

    async atualizarLeilao(req: Request, res: Response) {
        try {
            const leilaoId = req.params.leilaoId;
            const data: Prisma.LeilaoCreateInput = req.body;
            const leilao = await LeilaoService.atualizaLeilao(leilaoId, data);
            return res.json(leilao);
        } catch (error) {
            console.log("Erro ao atualizar o leilão", error);
            return res.json(400);
        }
    } 

    async deletaLeilao(req: Request, res:Response) {
        try {
            const dadoLeilao: string = req.params.leilaoId;
            const leilao = await LeilaoService.deletaLeilao(dadoLeilao);
            res.json(leilao)
        } catch(error) {
            console.log('Erro ao deletar o leilão', error);
            return null;
        }
    }
}

export default new LeilaoController();