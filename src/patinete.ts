class Patinete{
    Nroda: number;
    cor: string;
    tamanho: number;
    movimento: string;


    constructor(Nroda: number, cor: string, tamanho: number){
        this.Nroda = Nroda;
        this.cor = cor;
        this.tamanho = tamanho;
    }

    movimentoSexy(){
        console.log ('O Patinete tá louco de rápido')
     
    }

}

const patinete = new Patinete (1.0 , 'Cor Azul', 2.0);
patinete.movimentoSexy()

console.log(`A ${patinete.cor} \n Ele possui o nº de rodas: ${patinete.Nroda} \n
e tem o tamanho em ${patinete.tamanho}`)