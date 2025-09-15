let saldo = 100;
let add;
 
const btn = document.getElementById("aposta");
const dinheiro = document.getElementById("saldo");
const body = document.querySelector("body");
 
dinheiro.innerHTML = "Saldo: R$" + saldo;
 
let fazerAposta = (valor) => new Promise((resolve, reject) => {
    console.log("Esperando o fim do jogo...");
    sorteio = Math.random();
    if(saldo >= valor) {
        saldo -= valor;
        if(sorteio < 0.3) {
            let valorGanho = valor * add;
            saldo += valorGanho;
            resolve("Parabéns! Você ganhou R$" + valorGanho);
        } else {
            resolve("Que pena!!! Você perdeu R$" + valor + ".");
        }
        dinheiro.innerHTML = "saldo: R$" + saldo;
    } else {
            reject("Você não pode apostar essa quantia. Aposte valores mais baixos para conseguir dinheiro.");
    }
 
    if(saldo <= 0) {
            body.style.backgroundColor = "rgba(230, 139, 182, 1)";
            body.innerHTML = "<h1>VOCÊ PERDEU!!!</h1>";
            body.querySelector("h1").style.textAlign = "center";
            reject("Você perdeu!!!");
        }
});
 
btn.addEventListener("click", () => {
    do {
        add = Math.floor(Math.random() * 9) + 2;
    } while (add < 2);
    fazerAposta(Number(prompt("Digite o valor que deseja apostar. add: " + add)))
        .then(alert)
        .catch(alert)
    });