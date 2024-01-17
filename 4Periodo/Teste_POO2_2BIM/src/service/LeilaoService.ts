import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class LeilaoService 
{
    constructor() { }
    async createLeilao(dados: Prisma.LeilaoCreateInput) 
    {
        try 
        {
            const newleilao = await prisma.leilao.create({ data: dados });
            return newleilao;
        } 
        catch (error) 
        {
            console.log("error");
        }

    }

    async updateLeilao(idLeilao: string, updateLeilao: Prisma.LeilaoUpdateInput) 
    {
        try 
        {
            const newleilao = await prisma.leilao.update({
                where: 
                {
                    idLeilao
                }, data: updateLeilao

            })
            return newleilao;
        } 
        catch (error) 
        {
            console.log("error");
        }
    }

    async listLeiloes(idLeilao?: string)
    {
        try 
        {
            if (idLeilao == null) 
            {
                const leilao = await prisma.leilao.findMany();
                return leilao;
            } 
            else 
            {
                const leilao = await prisma.leilao.findUnique({
                    where: 
                    {
                        idLeilao
                    }
                })
                return leilao;
            }
        } 
        catch (error) 
        {
            console.log("error");
            return null;
        }

    }

    async deleteLeilao(idLeilao: string) 
    {
        try 
        {
            await prisma.leilao.delete({
                where: 
                {
                    idLeilao
                }
            })
        }
         catch (error) 
        {
            console.log(error);
        }
    }
}

export default new LeilaoService();