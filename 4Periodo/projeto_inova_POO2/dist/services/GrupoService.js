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
class GrupoService {
    insert(grupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existed = yield prisma.grupo.findUnique({ where: { nome: grupo.nome } });
                if (existed != null)
                    return null;
                else {
                    return yield prisma.grupo.create({ data: grupo });
                }
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    update(nome, grupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existed = yield prisma.grupo.findUnique({ where: { nome: nome } });
                if (existed == null)
                    return null;
                else {
                    return yield prisma.grupo.update({
                        where: { nome: nome },
                        data: grupo
                    });
                }
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    delete(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.grupo.delete({
                    where: { nome: nome },
                });
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.grupo.findMany();
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
}
exports.default = new GrupoService();
