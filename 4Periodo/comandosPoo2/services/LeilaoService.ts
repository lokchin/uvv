import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LeilaoService {
    constructor() { }

    async criaLeilao(leilao: Prisma.LeilaoCreateInput) {
        try {
            const novoLeilao = await prisma.leilao.create({ data: leilao });
            return novoLeilao;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async listaLeilao(leilaoId?: string) {
        try {
            if (leilaoId) {
                const leilaoUnico = await prisma.leilao.findUnique({
                    where: { leilaoId },
                });
                return leilaoUnico;
            } else {
                const todosOsLeiloes = await prisma.leilao.findMany();
                return todosOsLeiloes;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async atualizaLeilao(leilaoId: string, novoDado: Prisma.LeilaoCreateInput) {
        try {
            const leilaoAtualizado = await prisma.leilao.update({
                where: { leilaoId },
                data: {
                    dataLimite: novoDado.dataLimite,
                    dono: novoDado.dono,
                    listaLances: novoDado.listaLances,
                    preco: novoDado.preco,
                    produto: novoDado.produto
                }
            });
            return leilaoAtualizado;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deletaLeilao(leilaoId: string) {
        try {
            if (leilaoId == null) {
                return console.log("Leilão sem ID");
            }
            await prisma.leilao.delete({ where: { leilaoId } });
            return "Leilão deletado";
        } catch (error) {
            console.log("error");
            return null;
        }
    }
}

export default new LeilaoService;