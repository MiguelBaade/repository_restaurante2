import { Entrega } from "../models/Entrega"

export class EntregaRepository{
    private entregas: Entrega[] = [];

    salvar(entrega: Entrega): void {
        this.entregas.push(entrega);
    }

    consultarEntrega(): void{
        console.log(this.entregas);
    }
}