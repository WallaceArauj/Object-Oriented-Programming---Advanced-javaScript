var contaBancaria = /** @class */ (function () {
    function contaBancaria(nome, ammount, cpf) {
        this.nome = nome;
        this.ammount = ammount;
        this.cpf = cpf;
    }
    contaBancaria.prototype.pay = function (Cash) {
        this.ammount -= Cash;
    };
    return contaBancaria;
}());
var account = new contaBancaria('Wallace Araujo', 120000000, 450.999);
console.log("Seja Bem-Vindo ".concat(account.nome, ", cpf \u00E9: ").concat(account.cpf, "\no seu saldo est\u00E1 \u00E9: ").concat(account.ammount, " "));
account.pay(2000);
