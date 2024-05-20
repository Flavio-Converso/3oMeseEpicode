"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    ricarica(n) {
        this.credito += n;
    }
}
const user1 = new User("Mario", "Rossi");
console.log("credito pre-ricarica: " + user1.credito);
user1.ricarica(10);
console.log("credito post-ricarica " + user1.credito);
