import Avaliador from "../interfaces/Avaliador";
import { PrismaClient } from "@prisma/client";
import Grupo from "./Grupo";

const prisma = new PrismaClient();
export default class Professor implements Avaliador {

    private matricula: string;
    private nome: string;
    private email: string;

    constructor(matricula: string, nome: string, email: string) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }

    public getMatricula(): string {
        return this.matricula;
    }
    public setMatricula(value: string) {
        this.matricula = value;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }

    async avaliarGrupo(grupo: Grupo, nota: number) {

        try {

            await prisma.avaliacao.create({
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
        } catch (error) {
            console.log(error);
        }
    }

    async removerAvaliacao(grupo: Grupo, avaliador: string) {

        try {
            await prisma.avaliacao.delete({
                where: {
                    avaliador_nomeGrupo: {
                        avaliador: avaliador,
                        nomeGrupo: grupo.getNome(),
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
}