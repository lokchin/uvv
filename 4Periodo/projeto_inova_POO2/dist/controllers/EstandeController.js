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
const EstandeService_1 = __importDefault(require("../services/EstandeService"));
class EstandeController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const estande = req.body;
                const newEstande = yield EstandeService_1.default.insert(estande);
                if (newEstande == null) {
                    return res.status(400).json({
                        status: "aviso",
                        message: "Estande já existe no banco de dados",
                        estande: newEstande
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
                const numero = req.params.numero;
                const estande = yield EstandeService_1.default.delete(numero);
                if (estande == null) {
                    return res.status(400).json({
                        status: 'aviso',
                        message: 'Estande não existe na base de dados'
                    });
                }
                else {
                    return res.status(200).json({
                        status: 'ok',
                        estande: estande
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
                const estandes = yield EstandeService_1.default.getAll();
                res.render("estande", { estandes: estandes });
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
exports.default = new EstandeController();
