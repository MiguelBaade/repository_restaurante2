import { Funcionario } from "./Funcionario";

export class FuncionarioContratado extends Funcionario{
     salarioFixo: number;

     constructor(nome: string, sexo: string, dtContratacao: Date, cpf: string, rg: string, salarioFixo: number){
          super(nome, sexo, dtContratacao, cpf, rg);
          this.salarioFixo = salarioFixo;
     }
}