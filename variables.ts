let empresa: string = 'Algaworks';

let nome: string = 'João';

//array
let notas: number[] = [1, 5, 10];

//tuple
let alunos: [string, number, string] = ['joao', 1, 'ana'];

//enum
enum Cor {Verde, Amarelo, Azul, Branco};

let corFundo: Cor = Cor.Verde;

//Any : tipo sem tipagem dinâmica
//útil para biblioteca de terceiros, em funções que não sabem o tipo de retorno que vai vir
//migração de javascript para typescript para testar

let algumValor: any = 4;
algumValor = 'Agora é String';
algumValor = true;

//void

function alerta(): void {
  
}

//null e undefined
//são subtipos dos outros tipos

nome = undefined;
nome = null;
