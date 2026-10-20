export class Prato {
     nome: string;
     dtValidade: Date;
     nacionalidade: string;

     constructor(nome: string, dtValidade: Date, nacionalidade: string){
          this.nome = nome;
          this.dtValidade = dtValidade;
          this.nacionalidade = nacionalidade;
     }
}