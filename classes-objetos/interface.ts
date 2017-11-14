interface Pessoa{
  idade: number;
  sexo?: string;
}

function imprimirIdade(pessoa: Pessoa){
  console.log(pessoa.idade);
}

let joaoMarcos = {nome: 'Joao Marcos', idade: 22};
imprimirIdade(joaoMarcos);

//interface define um contrato
//ou seja no caso na função imprimir idade é preciso pelo menos ter o atributo idade do tipo number senão não compila
// se coloco ? junto da variável indica que ele não é obrigatório passar por parametro no objeto 