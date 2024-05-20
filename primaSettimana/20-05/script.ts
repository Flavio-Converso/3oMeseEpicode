interface iSmartPhone{
    credito:number;
    numeroChiamate:number;
}

class User implements iSmartPhone{
    credito:number;
    numeroChiamate:number;
    constructor(credito:number,numeroChiamate:number){
        this.credito=credito;
        this.numeroChiamate=numeroChiamate;
    }
}