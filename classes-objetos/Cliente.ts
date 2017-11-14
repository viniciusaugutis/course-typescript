class Cliente {
  nome: string;
  idade: number;
  
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  
  apresentar() {
    return `Olá eu sou ${this.nome} e tenho ${this.idade} anos`;
  }
}

let joao: Cliente = new Cliente('João', 12);
console.log(joao.apresentar());