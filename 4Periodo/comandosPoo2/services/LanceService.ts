import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceService {
    constructor() { }

    async criaLance(lance: Prisma.LanceCreateInput) {
        try {
            const novoLance = await prisma.lance.create({
                data: lance
            });
            return novoLance;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async listaLance(lanceId?: string) {
        try {
            if (lanceId) {
                const lance = await prisma.lance.findUnique({
                    where: { lanceId }
                });
                return lance;
            } else {
                const lances = await prisma.lance.findMany();
                return lances;
            }
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    async atualizaLance(lanceId: string, newData: Prisma.LanceCreateInput) {
        try {
            const lanceUpdated = await prisma.lance.update({
                where: {
                    lanceId
                },
                data: {
                    comprador: newData.comprador,
                    leilao: newData.leilao,
                    valor: newData.valor
                }
            });
            return lanceUpdated;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deleteLance(lanceId: string) {
        try {
            if (!lanceId) {
                return console.log("ID não consta");
            }
            await prisma.lance.delete({ where: { lanceId } });
            return "Ok";
        } catch (error) {
            console.log("error");
            return null;
        }
    }
}

export default new LanceService;