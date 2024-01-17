export default class Aluno {
    private nome: string;
    private matricula: string;
    private idade: number;

    constructor(nome: string, matricula: string, idade: number){
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
    }
}