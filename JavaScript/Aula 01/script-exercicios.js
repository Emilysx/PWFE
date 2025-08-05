// PRIMEIRA PARTE
console.log("Exercicio 1")
let nome = prompt("Insira seu nome: ");
console.log("Seja bem vindo(a)", nome, "!");

console.log("Exercicio 2");
let materia = prompt("Qual é sua disciplina favorita?");
alert("A disciplina" + " " + materia + " " + "realmente é ótima");

console.log("Exercicio 3");
let data = prompt("Informe a data de hoje (DD/MM/AAAA): ")
console.log("A data de hoje é: ", data)


console.log("Exercicio 4");
let semestre = confirm("Você está preparado para o segundo semestre de desenvolvimento de sistema?")
console.log(semestre) 


// SEGUNDA PARTE 

console.log("Exercicio 5");
let num1 = prompt("Insira um número: ");
let num2 = prompt("Insira outro número: ");

num1=Number(num1);
num2=Number(num2);

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

alert("Resultado da Soma é de: " + soma);
alert("Resultado da Subtração é de: " + subtracao);
alert("Resultado da Multiplicação é de: " + multiplicacao);
alert("Resultado da Divisão é de: " + divisao);

console.log("Exercicio 6");
let nota1 = prompt("Insira a primeira nota");
let nota2 = prompt("Insira a segunda nota");
let nota3 = prompt("Insira a terceira nota");

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);

let media = (nota1 + nota2 + nota3) / 3;

alert("Sua média é de: " + media);

console.log("Exercicio 7");
let largura = prompt("Informe a largura da parede: ");
let altura = prompt("Informe a altura da parede: ");

largura = Number(largura);
altura = Number(altura);

let area = altura * largura;
let litros = area / 2;

alert("Serão necessário " + litros + " litros de tinta");

