export class Entrega{
    numeroPedido: number;
    dtSaida: Date;
    endereco: string;

    constructor(numeroPedido: number, dtSaida: Date, endereco: string){
        this.numeroPedido = numeroPedido;
        this.dtSaida = dtSaida;
        this.endereco = endereco;
    }
}