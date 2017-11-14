var precos = [10, 22, 23];
var precosEmReais = precos.map(function (preco) { return 'R$' + preco + ',00'; });
var precosAcimaDe20 = precos.filter(function (preco) { return preco > 20; });
console.log(precosAcimaDe20);
var precosTemplateString = precos.map(function (preco) { return "R$ " + preco + " ,00"; });
