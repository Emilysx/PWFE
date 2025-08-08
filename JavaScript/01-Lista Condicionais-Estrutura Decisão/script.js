/* // Exercico 1 - Verificar se o número é par/ímpar e múltiplo de 3 ou 5.
console.log("Exercício 1")

let num = Number(prompt(
    "Esse programa vai dizer se o número é impar ou par, múltiplo de 3 e 5!\n" +
    "Insira um número: "
));

if (num % 2 == 0) {
    console.log("Esse número é par!");
    alert("Esse número é par!")

} else {
    console.log("Esse número é impar!");
    alert("Esse número é impar!");
}

if (num % 3 == 0 && num % 5 == 0) {
    console.log("Esse número é multiplo de 3 e 5!");
    alert("Esse número é multiplo de 3 e 5!");

} else if (num % 3 == 0) {
    console.log("Esse número é multiplo de 3!");
    alert("Esse número é multiplo de 3!");

} else if (num % 5 == 0) {
    console.log("Esse número é multiplo de 5!");
    alert("Esse número é multiplo de 5!");

} else {
    console.log("Esse número não é multiplo 3 e nem de 5!");
    alert("Esse número não é multiplo 3 e nem de 5!");
}
*/

/* // Exercicio 2 - Verificar qual numero é maior
console.log("Exercicio 2")
let num1 = Number(prompt(
    "Esse programa vai mostrar qual número é o maior!\n" +
    "Insira o primeiro número: "
));
let num2 = Number(prompt("Insira o segundo número: "));
let num3 = Number(prompt("Insira o terceiro e último número: "));

if (num1 > num2 && num1 > num3) {
  console.log(`O número ${num1} é o maior!`);
  alert(`O número ${num1} é o maior!`);

} else if (num2 > num1 && num2 > num3) {
  console.log(`O número ${num2} é o maior!`);
  alert(`O número ${num2} é o maior!`);

} else if (num3 > num1 && num3 > num2) {
  console.log(`O número ${num3} é o maior!`);
  alert(`O número ${num3} é o maior!`);

} else {
  console.log("Há dois ou mais números iguais e maiores.");
  alert("Há dois ou mais números iguais e maiores.");
}
*/

/* // Exercicio 3 - Irá Classificar conforne a idade
console.log("Exercicio 3");
let idade = Number(prompt(
    "Esse prograama vai fazer a classificação conforme a idade!\n" +
    "Informe sua idade: "
));

if (idade <= 0) {
    console.log("Idade inválida!");
    alert("Idade inválida!");
}
else if (idade <= 2) {
    console.log("Classificação: Bebê");
    alert("Classificação: Bebê");

} else if (idade > 2 && idade <= 13) {
    console.log("Classificação: Criança");
    alert("Classificação: Criança");

} else if (idade > 13 && idade <= 18) {
    console.log("Classificação: Adolescente");
    alert("Classificação: Adolescente");

} else if (idade > 18 && idade <= 60) {
    console.log("Classificação: Adulto");
    alert("Classificação: Adulto");

} else {
    console.log("Classificação: Idoso");
    alert("Classificação: Idoso");
}
*/

 // Exercicio 4 - Conversão entre Celsius e Fahrenheit.
console.log("Exercício 4");

let escolha = prompt(
  "Escolha uma opção de conversão:\n" +
  "1 - Celsius para Fahrenheit\n" +
  "2 - Fahrenheit para Celsius"
);

if (escolha === "1") {
  let celsius = Number(prompt("Informe a temperatura em Celsius:"));
  let fahrenheit = (celsius * 9/5) + 32;

  console.log(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`);
  alert(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`);

} else if (escolha === "2") {
  let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
  let celsius = (fahrenheit - 32) * 5/9;

  console.log(`${fahrenheit}°F equivalem a ${celsius.toFixed(2)}°C`);
  alert(`${fahrenheit}°F equivalem a ${celsius.toFixed(2)}°C`);

} else {
  console.log("Opção inválida!");
  alert("Opção inválida!");
}




