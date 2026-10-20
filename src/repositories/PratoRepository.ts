import { Prato } from "../models/Prato";

export class PratoRepository{
    private pratos: Prato[] = [];

    salvar(prato: Prato): void {
        this.pratos.push(prato);
    }

    consultarPrato(): void {
        console.log(this.pratos);
    }
}