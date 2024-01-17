import { Request, Response } from "express"
import LanceService from "../services/LanceService"
import { Prisma } from "@prisma/client"

class LanceController {
    constructor() { }

    async listaLances(req: Request, res: Response) {
        try {
            const lances = await LanceService.listaLance();
            return res.json(lances);
        } catch (error) {
            console.log('Erro ao listar os lances', error);
            return res.status(400)
        }
    }


    async criaLance(req: Request, res: Response) {
        try {
            const data: Prisma.LanceCreateInput = req.body;
            const novoLance = await LanceService.criaLance(data)
            return res.json(novoLance);
        } catch (error) {
            console.log("Erro ao criar o lance", error);
            return res.status(400);
        }
    }

    async atualizaLance(req: Request, res: Response) {
        try {
            const lanceId = req.params.lanceId;
            const data: Prisma.LanceCreateInput = req.body;
            const lance = await LanceService.atualizaLance(lanceId, data);
            return res.json(lance);
        } catch (error) {
            console.log("Erro ao atualizar o lance", error);
            return res.status(400);
        }
    }

    async deletaLance(req: Request, res: Response) {
        try {
            const dadoLance: string = req.params.lanceId;
            const lance = await LanceService.deleteLance(dadoLance);
            res.json(lance)
        } catch (error) {
            console.log("Erro ao deletar o lance", error);
            return res.json(400);
        }
    }
}

export default new LanceController;