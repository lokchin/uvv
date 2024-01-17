import express from 'express';
import ProfessorService from '../services/ProfessorService';
import { Prisma } from '@prisma/client';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const professor: Prisma.ProfessorCreateInput = req.body;

            const newProfessor = await ProfessorService.insert(professor);

            if (newProfessor == null) {
                return res.status(400).json({
                    status: "aviso",
                    message: "Professor já existe no banco de dados",
                    aluno: newProfessor
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
            const matricula = req.params.matricula;
            const professor: Prisma.ProfessorCreateInput = req.body;

            const newProfessor = await ProfessorService.update(matricula, professor);

            if (newProfessor == null) {
                return res.status(400).json({
                    status: 'aviso',
                    message: 'Professor não existe no banco de dados'
                });
            } else {
                return res.status(200).json({
                    status: 'ok',
                    professor: newProfessor
                });
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Inserir os dados no corpo da requisição'
            })
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const matricula = req.params.matricula;

            const professor = await ProfessorService.delete(matricula);

            if (professor == null) {
                return res.status(400).json({
                    status: 'aviso',
                    message: 'Professor não existe no banco de dados'
                });
            } else {
                return res.status(200).json({
                    status: 'ok',
                    professor: professor
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
            const professores = await ProfessorService.getAll();

            res.render("professor", { professores: professores });
        }
        catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Erro interno do servidor'
            })
        }
    }
}

export default new ProfessorController();