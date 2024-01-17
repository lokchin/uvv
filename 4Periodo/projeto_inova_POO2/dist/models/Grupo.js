"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grupo {
    constructor(nome, lider, membros, diaApresentacao, estande) {
        this.nome = nome;
        this.lider = lider;
        this.membros = membros;
        this.diaApresentacao = diaApresentacao;
        this.estande = estande;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getLider() {
        return this.lider;
    }
    setLider(value) {
        this.lider = value;
    }
    getMembros() {
        return this.membros;
    }
    setMembros(value) {
        this.membros = value;
    }
    getDiaApresentacao() {
        return this.diaApresentacao;
    }
    setDiaApresentacao(value) {
        this.diaApresentacao = value;
    }
    getEstande() {
        return this.estande;
    }
    setEstande(value) {
        this.estande = value;
    }
}
exports.default = Grupo;
