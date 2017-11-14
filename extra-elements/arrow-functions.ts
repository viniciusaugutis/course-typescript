const precos = [10, 22, 23];

const precosEmReais = precos.map(preco => 'R$' + preco + ',00');

const precosAcimaDe20 = precos.filter(preco => preco > 20);

console.log(precosAcimaDe20);

const precosTemplateString = precos.map(preco => `R$ ${preco} ,00`);