var empresa = 'Algaworks';
var nome = 'João';
//array
var notas = [1, 5, 10];
//tuple
var alunos = ['joao', 1, 'ana'];
//enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//Any : tipo sem tipagem dinâmica
//útil para biblioteca de terceiros, em funções que não sabem o tipo de retorno que vai vir
//migração de javascript para typescript para testar
var algumValor = 4;
algumValor = 'Agora é String';
algumValor = true;
//void
function alerta() {
}
//null e undefined
//são subtipos dos outros tipos
nome = undefined;
nome = null;
