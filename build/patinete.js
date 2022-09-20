var Patinete = /** @class */ (function () {
    function Patinete(Nroda, cor, tamanho) {
        this.Nroda = Nroda;
        this.cor = cor;
        this.tamanho = tamanho;
    }
    Patinete.prototype.movimentoSexy = function () {
        console.log('O Patinete tá louco de rápido');
    };
    return Patinete;
}());
var patinete = new Patinete(1.0, 'Cor Azul', 2.0);
patinete.movimentoSexy();
console.log("A ".concat(patinete.cor, " \n Ele possui o n\u00BA de rodas: ").concat(patinete.Nroda, " \n\ne tem o tamanho em ").concat(patinete.tamanho));
