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
const GrupoService_1 = __importDefault(require("../services/GrupoService"));
class ProfessorController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupo = req.body;
                const newGrupo = yield GrupoService_1.default.insert(grupo);
                if (newGrupo == null) {
                    return res.status(400).json({
                        status: "aviso",
                        message: "Grupo já existe no banco de dados",
                        aluno: newGrupo
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
                const nome = req.params.nome;
                const grupo = req.body;
                const newGrupo = yield GrupoService_1.default.update(nome, grupo);
                if (newGrupo == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Grupo não existe no banco de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        grupo: newGrupo
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
                const nome = req.params.nome;
                const grupo = yield GrupoService_1.default.delete(nome);
                if (grupo == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Grupo não existe no banco de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        grupo: grupo
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
                const grupos = yield GrupoService_1.default.getAll();
                res.render("grupo", { grupos: grupos });
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
