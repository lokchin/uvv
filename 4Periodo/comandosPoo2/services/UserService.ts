import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UserService{

    constructor(){ }

    async criaUser(user: Prisma.UserCreateInput){
        try {
            const novoUser = await prisma.user.create({ data: user });
            return novoUser;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async listaUsers(userId?: string): Promise<Prisma.UserCreateInput[] | Prisma.UserCreateInput | undefined | null > {
        try {
            if(userId) {
                const user = await prisma.user.findUnique({
                    where: { userId }
                })
                return user;
            } else {
                const users = await prisma.user.findMany();
                return users;
            }
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async atualizarUser(userId: string, novoDado: Prisma.UserUpdateInput) {
        try {
            const usuarioAtualizado = await prisma.user.update({
                where: { userId },
                data: {
                    name: novoDado.name,
                    email: novoDado.email,
                    lances: novoDado.lances,
                    leiloes: novoDado.leiloes,
                }
            });
            return usuarioAtualizado;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async deletaUser(userId: string) {
        try {
            if (!userId) {
                return console.log("ID não existente");
            }
            await prisma.user.delete({
                where: { userId }
            });
            return "Usuário deletado com sucesso";
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export default new UserService();