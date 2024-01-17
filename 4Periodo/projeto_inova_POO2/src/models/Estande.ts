export default class Estande {

    private numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    public getNumero(): number {
        return this.numero;
    }
    public setNumero(value: number) {
        this.numero = value;
    }
}