class contaBancaria{
     nome: string;
     ammount: number;
     cpf: number;
    

    constructor(nome: string, ammount: number,  cpf: number){
        this.nome = nome
        this.ammount = ammount
        this.cpf = cpf

    }

    pay(Cash: number){
        this.ammount -= Cash;
        
    }
}

const account = new  contaBancaria ('Wallace Araujo', 120000000, 450.999);
console.log(`Seja Bem-Vindo ${account.nome}, cpf é: ${  account.cpf}
o seu saldo está é: ${account.ammount} `);

account.pay(2000) 