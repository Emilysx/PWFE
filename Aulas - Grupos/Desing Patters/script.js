function criarAnimal(tipo){
    if ( tipo == "cachorro"){
        return { tipo: "cachorro", som: "auau"};
    } else if (tipo == "gato"){
        return { tipo: "gato", som: "maiau"};
    }
}

const a1 = criarAnimal("cachorro");
const a2 = criarAnimal("gato");
console.log(a1)
console.log(a2)

// Exercicio 2

function criarCarro(modelo, marca){
    if (modelo == "esportivo"){
        return {marca: "Ferrari", modelo: "F40", Velocidade: "320km/h"};
    } else if ( modelo == "comum"){
        return {marca: "Fiat", modelo: "Uno"};
    }
}

const carro1 = criarCarro("esportivo");
const carro2 = criarCarro("comum");
console.log(carro1)
console.log(carro2)
