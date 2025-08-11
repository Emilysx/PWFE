// LOOPS

// Exemplo de FOR 
let cats = ["Kuromi", "Kitty", "Emily"];
let info = "Minhas gatas chamam: ";

for (let i = 0; i < cats.length; i++){
    info += cats[i] + ", ";
}
console.log(info)

// Exemplo de While
let dogs = ["Harry", "Bruce", "Baco"];
let infos = "Meus cachorros chamam: ";

let i = 0;
while (i < dogs.length){
    if (i == dogs.length -1){
        infos += "e " + dogs[i] + ".";
    }
    else {
        infos += dogs[i] + ", "
    }
    i++
}
console.log(infos);

// Exemplo de Do While 
let passaros = ["Neném", "Bolota", "Pitico"];
let dados = "Meus passaros chamam: ";
let ia = 0;

do{
    if (i === passaros.length -1){
        dados += "e " + passaros[ia] + ".";
    }
    else {
        dados += passaros[ia] + ", "
    }
    ia++
} while (ia < passaros.length);

console.log(dados);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// FUNÇÕES

function helou(){
    alert("Helou");
}
helou()

// funçao anonima

let soma = function(n1,n2){
    return n1 + n2;
}
alert(soma(2,3));

// Arrow Funtion

let somaArrow = (n1, n2) => n1 + n2;
console.log(somaArrow(5, 5));

let helouu = function(){
    console.log("Olarr");
    console.log(somaArrow(7,7))
}
helouu()


