import express from 'express';
import GrupoService from '../services/GrupoService';
import { Prisma } from '@prisma/client';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const grupo : Prisma.GrupoCreateInput = req.body

            const newGrupo = await GrupoService.insert(grupo);

            if (newGrupo == null) {
                return res.status(400).json({
                    status: "aviso",
                    message: "Grupo já existe no banco de dados",
                    aluno: newGrupo
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const nome = req.params.nome;
            const grupo : Prisma.GrupoCreateInput = req.body

            const newGrupo = await GrupoService.update(nome, grupo);

            if (newGrupo == null) {
                return res.status(400).json({
                    status: 'aviso',
                    message: 'Grupo não existe no banco de dados'
                });
            } else {
                return res.status(200).json({
                    status: 'ok',
                    grupo: newGrupo
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
            const nome = req.params.nome;

            const grupo = await GrupoService.delete(nome);

            if (grupo == null) {
                return res.status(400).json({
                    status: 'aviso',
                    message: 'Grupo não existe no banco de dados'
                });
            } else {
                return res.status(200).json({
                    status: 'ok',
                    grupo: grupo
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
            const grupos = await GrupoService.getAll();

            res.render("grupo", { grupos: grupos });
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }
}

export default new ProfessorController();