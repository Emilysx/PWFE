// Exercico 1 - Verificar se o número é par/ímpar e múltiplo de 3 ou 5.
console.log("Exercício 1")

let num = Number(prompt(
    "Esse programa vai dizer se o número é impar ou par, múltiplo de 3 e 5!" +
    "\nInsira um número: "
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
