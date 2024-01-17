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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class Professor {
    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(value) {
        this.matricula = value;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
    }
    avaliarGrupo(grupo, nota) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.avaliacao.create({
                    data: {
                        avaliador: this.nome,
                        grupo: {
                            connect: {
                                nome: grupo.getNome(),
                            }
                        },
                        nota: nota,
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    removerAvaliacao(grupo, avaliador) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.avaliacao.delete({
                    where: {
                        avaliador_nomeGrupo: {
                            avaliador: avaliador,
                            nomeGrupo: grupo.getNome(),
                        },
                    },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Professor;
