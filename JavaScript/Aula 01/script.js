/*console.log("Emily Gabrielle") // é parecido com um print

var uma = "uma";
let duas = "duas";
const tres = 3;

console.log(uma, duas, tres);

//console.log(maria);
//var maria = 4;
// alert("Olá Emily, boa tarde!");

let nome = prompt("Qual é seu nome?");
console.log("Seu come é: ",nome);

let senai = confirm("Você é do senai? ");
console.log(senai) */

// seguanda parte da aula

var numNum = 3;
var numText = "3";

console.log(numNum === numText);

// terceira parte da aula

let arr = ["emily", "ana", "maria"] // lista - arry
console.log(arr[0])

let obj = {nome: "emily", idade: 19,} // objeto
console.log(obj); // mosta o objeto
console.log(obj.nome); // mostra apenas o nome que está dentro do objeto

let nome = "Emily"; // string
console.log(nome[0]);
console.log(nome.charAt(4));

// No javascript, ele consegue dizer qual letra é maior que  a outra. o Z sempre vai ser o maior
let a = "a";
let b = "b";

console.log(a>b)

console.log(typeof(a));  // mostra qual é o tipo da variavel
console.log(arr.toString());  //transforma em string
console.log(arr.length);// tamanho do array
console.log(nome.slice(0,3));
console.log(nome.toLowerCase()); // transforma tudo em minusculo
console.log(nome.toUpperCase()); // transforma tudo em maiusculo
console.log(nome.replace('Em', 'JY'));  // substitui o Em por JY
 
let lista = 'maria, jorge, rafa ';
console.log(lista);
 
lista = lista.split(',');   // transformou o array em lista
console.log(lista);
 
lista = lista.join(',');   // transformou a lista em array
console.log(lista);
 
console.log(arr);   // adiciona um item ao FINAL do array
arr.push("marcia");
console.log(arr);  
 
arr.unshift("marcos");      // adiciona um item ao COMEÇO do array
console.log(arr);
 
arr.pop();  // tira o item do FINAL do array
console.log(arr);
 
arr.shift();    // tira o item do COMEÇO do array
console.log(arr);

// if e else no Javascript

if (3 > 4){
    console.log("oi")
} else if (5 > 6){
    console.log("oi")
}else{
    console.log("tchau")
}

// AND == && e o OR == || 
// NOT  == !

let cor = prompt("Escolha uma cor: ")
switch (cor){
    case "amarelo":
        console.log("Você gosta de: ", cor);
        break;

    case "rosa":
        console.log("Você gosta de: ", cor);
        break

    case "azul":
        console.log("Você gosta de: ", cor);
        break
    
    case "roxo":
        console.log("Você gosta de: ", cor);
        break
    
     case "vermelho":
        console.log("Você gosta de: ", cor);
        break

     case "preto":
        console.log("Você gosta de: ", cor);
        break

     case "branco":
        console.log("Você gosta de: ", cor);
        break

     case "verde":
        console.log("Você gosta de: ", cor);
        break

     case "laranja":
        console.log("Você gosta de: ", cor);
        break

    default:
        console.log("Sua cor não se encontra.");
}

// Operador ternário
let idade1 = prompt("Insira sua idade: ");
let maiorDidade = idade1 >= 18 ? "sim" : "não";
console.log(maiorDidade);
