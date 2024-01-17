import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GrupoService {

    async insert(grupo: Prisma.GrupoCreateInput) {
        try {
            const existed = await prisma.grupo.findUnique({ where: { nome: grupo.nome } })

            if (existed != null)
                return null;
            else {
                return await prisma.grupo.create({ data: grupo });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(nome: string, grupo: Prisma.GrupoCreateInput) {
        try {
            const existed = await prisma.grupo.findUnique({ where: { nome: nome } })

            if (existed == null)
                return null;
            else {
                return await prisma.grupo.update({
                    where: { nome: nome },
                    data: grupo
                });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(nome: string) {
        try {
            return await prisma.grupo.delete({
                where: { nome: nome },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.grupo.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new GrupoService();