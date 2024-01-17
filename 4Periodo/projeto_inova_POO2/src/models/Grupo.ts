import Aluno from "./Aluno";

export default class Grupo {

    private nome: string;
    private lider: Aluno;
    private membros: Aluno[];
    private diaApresentacao: Date;
    private estande: number;

    constructor(nome: string, lider: Aluno, membros: Aluno[], diaApresentacao: Date, estande: number) {
        this.nome = nome;
        this.lider = lider;
        this.membros = membros;
        this.diaApresentacao = diaApresentacao;
        this.estande = estande;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getLider(): Aluno {
        return this.lider;
    }
    public setLider(value: Aluno) {
        this.lider = value;
    }

    public getMembros(): Aluno[] {
        return this.membros;
    }
    public setMembros(value: Aluno[]) {
        this.membros = value;
    }

    public getDiaApresentacao(): Date {
        return this.diaApresentacao;
    }
    public setDiaApresentacao(value: Date) {
        this.diaApresentacao = value;
    }

    public getEstande(): number {
        return this.estande;
    }
    public setEstande(value: number) {
        this.estande = value;
    }
}