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
const AlunoService_1 = __importDefault(require("../services/AlunoService"));
class AlunoController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = req.body;
                const newAluno = yield AlunoService_1.default.insert(aluno);
                if (newAluno == null) {
                    return res.status(400).json({
                        status: "aviso",
                        message: "Aluno já existe no banco de dados",
                        aluno: newAluno
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
                const aluno = req.body;
                const newAluno = yield AlunoService_1.default.update(matricula, aluno);
                if (newAluno == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Aluno não existe na base de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        aluno: newAluno
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
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = req.params.matricula;
                const aluno = yield AlunoService_1.default.delete(matricula);
                if (aluno == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Aluno não existe na base de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        aluno: aluno
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
                const alunos = yield AlunoService_1.default.getAll();
                res.render("aluno", { alunos: alunos });
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
exports.default = new AlunoController();
