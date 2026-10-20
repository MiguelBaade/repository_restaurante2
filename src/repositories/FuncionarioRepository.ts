import { Funcionario } from "../models/Funcionario";
import { FuncionarioFreelancer } from "../models/FuncionarioFreelancer";
import { FuncionarioContratado } from "../models/FuncionarioContratado";

export class FuncionarioRepository {
    private funcionarios: Funcionario[] =[];

    salvar(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    consultarFuncionarios(): void {
        console.log(this.funcionarios);
    }
}