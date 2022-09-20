var Paciente = /** @class */ (function () {
    function Paciente(nome, dataIternacao, idade, sexo, alergiaRemedio) {
        this.nome = nome;
        this.dataInternacao = dataIternacao;
        this.idade = idade;
        this.sexo = sexo;
        this.alergiaRemedio = alergiaRemedio;
    }
    Paciente.prototype.publicAlergia = function () {
        this.publicAlergia;
    };
    return Paciente;
}());
var paciente = new Paciente('Giovanni Cardoso', 20.09, 25, 'Masculino', false);
console.log("".concat(paciente.nome, ", data de interna\u00E7\u00E3o foi no dia ").concat(paciente.dataInternacao, ",\nIdade ").concat(paciente.idade, ", G\u00EAnero: ").concat(paciente.sexo, " \n Possui alergia a rem\u00E9dio").concat(paciente.alergiaRemedio));
