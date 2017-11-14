var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1 eu sou " + this.nome + " e tenho " + this.idade + " anos";
    };
    return Cliente;
}());
var joao = new Cliente('João', 12);
console.log(joao.apresentar());
