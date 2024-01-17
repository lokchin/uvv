"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProfessorService_1 = __importDefault(require("../services/ProfessorService"));
class ProfessorController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professor = req.body;
                const newProfessor = yield ProfessorService_1.default.insert(professor);
                if (newProfessor == null) {
                    return res.status(400).json({
                        status: "aviso",
                        message: "Professor já existe no banco de dados",
                        aluno: newProfessor
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    error: error,
                    message: 'Erro interno do servidor'
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = req.params.matricula;
                const professor = req.body;
                const newProfessor = yield ProfessorService_1.default.update(matricula, professor);
                if (newProfessor == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Professor não existe no banco de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        professor: newProfessor
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    error: error,
                    message: 'Inserir os dados no corpo da requisição'
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = req.params.matricula;
                const professor = yield ProfessorService_1.default.delete(matricula);
                if (professor == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Professor não existe no banco de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        professor: professor
                    });
                }
            }
            catch (error) {
                return res.status(500).json({
                    error: error,
                    message: 'Erro interno do servidor'
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professores = yield ProfessorService_1.default.getAll();
                res.render("professor", { professores: professores });
            }
            catch (error) {
                return res.status(500).json({
                    error: error,
                    message: 'Erro interno do servidor'
                });
            }
        });
    }
}
exports.default = new ProfessorController();
