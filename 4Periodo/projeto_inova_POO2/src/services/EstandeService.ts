import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EstandeService {

    async insert(estande: Prisma.EstandeCreateInput) {
        try {
            const existed = await prisma.estande.findUnique({
                where: { numero: estande.numero }
            })

            if (existed != null)
                return null;
            else {
                return await prisma.estande.create({ data: estande });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(numero: string) {
        try {
            return await prisma.estande.delete({
                where: { numero: numero },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.estande.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new EstandeService();