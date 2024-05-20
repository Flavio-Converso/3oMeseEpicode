interface iSmartPhone{
    credito:number;
    numeroChiamate:number;
}

class User implements iSmartPhone{
    credito: number= 0;
    numeroChiamate: number = 0;
    costoMinuto:number = 0.2;
    nome:string;
    cognome:string;
    constructor(_nome:string,_cognome:string){
        this.nome=_nome;
        this.cognome=_cognome;
    }
    ricarica(n:number){
        this.credito+=n;
    }
}
const user1 = new User("Mario","Rossi");
console.log("credito pre-ricarica: "+user1.credito);
user1.ricarica(10);
console.log("credito post-ricarica "+user1.credito);