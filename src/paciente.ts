class Paciente{
    nome: string;
    dataInternacao: number;
    idade: number;
    sexo: string;
    alergiaRemedio: boolean;

    constructor(nome:string, dataIternacao: number, idade: number, sexo: string, alergiaRemedio: boolean){
        this.nome = nome
        this.dataInternacao = dataIternacao
        this.idade = idade
        this.sexo = sexo
        this.alergiaRemedio = alergiaRemedio
    }
    publicAlergia(){
        this.publicAlergia 
    }
}

const paciente = new Paciente ('Giovanni Cardoso', 20.09, 25, 'Masculino', false )

console.log(`${paciente.nome}, data de internação foi no dia ${paciente.dataInternacao},
Idade ${paciente.idade}, Gênero: ${paciente.sexo} \n Possui alergia a remédio${paciente.alergiaRemedio}`)