import express from 'express';
import EstandeService from '../services/EstandeService';
import { Prisma } from '@prisma/client';

class EstandeController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const estande: Prisma.EstandeCreateInput = req.body;

            const newEstande = await EstandeService.insert(estande);

            if (newEstande == null) {
                return res.status(400).json({
                    status: "aviso",
                    message: "Estande já existe no banco de dados",
                    estande: newEstande
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const numero = req.params.numero;

            const estande = await EstandeService.delete(numero);

            if (estande == null) {
                return res.status(400).json({
                    status: 'aviso',
                    message: 'Estande não existe na base de dados'
                });
            } else {
                return res.status(200).json({
                    status: 'ok',
                    estande: estande
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const estandes = await EstandeService.getAll();

            res.render("estande", { estandes: estandes });
        }
        catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }
}

export default new EstandeController();