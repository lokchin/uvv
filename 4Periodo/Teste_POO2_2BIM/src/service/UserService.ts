import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserService 
{
    constructor() { }
    async createUser(dados: Prisma.UserCreateInput) 
    {
        try 
        {
            const newuser = await prisma.user.create({ data: dados });
            return newuser;
        } 
        catch (error) 
        {
            console.log("Erro");
        }

    }

    async updateUser(idUser: string, updateUser: Prisma.UserUpdateInput) 
    {
        try 
        {
            const newuser = await prisma.user.update({
                where: 
                {
                    idUser
                }, data: updateUser
            })
            return newuser;
        } 
        catch (error) 
        {
            console.log("Erro");
        }
    }

    async listUser(idUser?: string): Promise<Prisma.UserCreateInput[] | Prisma.UserCreateInput | undefined | null> 
    {
        try 
        {
            if (idUser == null) 
            {
                const users = await prisma.user.findMany();
                return users;
            } 
            else 
            {
                const user = await prisma.user.findUnique({
                    where:
                    {
                        idUser
                    }
                })
                return user;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }

    }

    async deleteUser(idUser: string) 
    {
        try 
        {
            await prisma.user.delete({
                where: 
                {
                    idUser
                }
            })
        } catch (error) {
            console.log("error");
        }
    }
}

export default new UserService();