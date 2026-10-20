export class Funcionario{
     nome: string;
     sexo: string;
     dtContratacao: Date;
     cpf: string;
     rg: string;

     constructor(nome: string, sexo: string, dtContratacao: Date, cpf: string, rg: string){
          this.nome = nome;
          this.sexo = sexo;
          this.dtContratacao = dtContratacao;
          this.cpf = cpf;
          this.rg = rg;
     }
}