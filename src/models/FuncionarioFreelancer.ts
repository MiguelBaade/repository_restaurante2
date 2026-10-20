import { Funcionario } from "./Funcionario";

export class FuncionarioFreelancer extends Funcionario{
     salarioHora: number;
     dtFimContrato: Date;

     constructor(nome: string, sexo: string, dtContratacao: Date, cpf: string, rg: string, salarioHora: number, dtFimContrato: Date){
          super(nome, sexo, dtContratacao, cpf, rg);
          this.salarioHora = salarioHora;
          this.dtFimContrato = dtFimContrato;
     }

     calcularSalario(horasTrabalhadas: number): number{
          return this.salarioHora * horasTrabalhadas;
     }

     isContratoAtivo(): boolean{
          const hoje = new Date();
          if(this.dtFimContrato >= hoje){
               return true;
          }else{
               return false;
          }
     }
}