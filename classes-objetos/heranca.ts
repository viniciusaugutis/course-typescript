class Funcionario {
  nome: string;
  salario: number;
  
  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  } 
  
  pagarImposto(taxa: number = 7.5) { //passa valor default se ele não foi definido
    console.log(`Pagar taxa de ${taxa}`)
  }
  
}

class Secretario extends Funcionario { 
}

class Executivo extends Funcionario {
  pagarImposto(taxa: number = 9.5){
    console.log(`pagar taxa de ${taxa}`);
    super.pagarImposto(taxa);
  }
}

let sarah = new Secretario('Sarah', 2000);
sarah.pagarImposto(10);
sarah.pagarImposto();

let ana = new Executivo('João', 2500);
ana.pagarImposto();