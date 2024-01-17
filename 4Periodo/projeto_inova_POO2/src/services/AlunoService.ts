import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AlunoService {

    async insert(aluno: Prisma.AlunoCreateInput) {
        try {
            const existed = await prisma.aluno.findUnique({
                where: { matricula: aluno.matricula }
            })

            if (existed != null)
                return null;
            else {
                return await prisma.aluno.create({ data: aluno });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(matricula: string, aluno: Prisma.AlunoCreateInput) {
        try {
            const existed = await prisma.aluno.findUnique({
                where: { matricula: matricula }
            })

            if (existed == null)
                return null;
            else {
                return await prisma.aluno.update({
                    where: { matricula: matricula },
                    data: aluno
                });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(matricula: string) {
        try {
            const existed = await prisma.aluno.findUnique({
                where: { matricula: matricula }
            })

            if (existed == null)
                return null;
            else {
                return await prisma.aluno.delete({ where: { matricula: matricula } });
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.aluno.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new AlunoService();