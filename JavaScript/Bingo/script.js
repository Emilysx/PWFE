// Variáveis globais do jogo
var numerosSorteados = [];
var numeroAtual = null;

// Função para sortear um número
function sortearNumero() {
    if (numerosSorteados.length == 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }
    var numero;
    var tentativas = 0;

    // Gera um número que ainda não foi sorteado
    do {
        numero = Math.floor(Math.random() * 75) + 1;
        tentativas++;
    } while (numerosSorteados.indexOf(numero) !== -1 && tentativas < 100);

    numerosSorteados.push(numero);
    numeroAtual = numero;

    // Determina a letra baseada no número
    var letra = "";
    if (numero >= 1 && numero <= 15) letra = "B";
    else if (numero >= 16 && numero <= 30) letra = "I";
    else if (numero >= 31 && numero <= 45) letra = "N";
    else if (numero >= 46 && numero <= 60) letra = "G";
    else if (numero >= 61 && numero <= 75) letra = "O";

    // Atualiza a exibição do número atual
    var elementoNumero = document.getElementById("NumeroAtual");
    elementoNumero.innerHTML = '<span>' + letra + numero + '</span>';

    // Marca o número na tabela
    marcarNumeroNaTabela(numero);

    // Atualiza o histórico
    atualizarHistorico();

    // Desabilita o botão se todos os números foram sorteados
    if (numerosSorteados.length > 75) {
        document.getElementById("BotaoSortear").disabled = true;
    }
}

// Função para marcar um número na tabela
function marcarNumeroNaTabela(numero) {
    var celulas = document.querySelectorAll("#CorpoCartela td");

    for (var i = 0; i < celulas.length; i++) {
        var celula = celulas[i];
        var numeroTabela = parseInt(celula.getAttribute("data-numero"));

        if (numeroTabela === numero) {
            celula.classList.add("NumeroMarcado"); // adiciona a classe que destaca o número, para mostrar que ele já saiu
            break;
        }
    }
}

// Função para atualizar o histórico de números sorteados
function atualizarHistorico() {
    var areaHistorico = document.getElementById("HistoricoNumeros");

    if (numerosSorteados.length === 0) {
        areaHistorico.innerHTML = '<p class="TextoVazio">Nenhum número foi sorteado ainda</p>';
        return;
    }

    var lista = document.createElement("ul");
    lista.classList.add("ListaHistorico");

    var numerosOrdenados = numerosSorteados.slice().reverse(); // Mais recente primeiro

    numerosOrdenados.forEach(function(numero) {
        var letra = "";
        if (numero >= 1 && numero <= 15) letra = "B";
        else if (numero >= 16 && numero <= 30) letra = "I";
        else if (numero >= 31 && numero <= 45) letra = "N";
        else if (numero >= 46 && numero <= 60) letra = "G";
        else if (numero >= 61 && numero <= 75) letra = "O";

        var item = document.createElement("li");
        item.classList.add("ItemHistorico");
        item.textContent = letra + numero;
        lista.appendChild(item);
    });

    areaHistorico.innerHTML = "";
    areaHistorico.appendChild(lista);
}

// Função para iniciar um novo jogo
function novoJogo() {
    numerosSorteados = [];
    numeroAtual = null;

    document.getElementById("NumeroAtual").innerHTML = '<span class="TextoAguardando">Clique em "Sortear"</span>';

    var celulas = document.querySelectorAll("#CorpoCartela td");
    celulas.forEach(function(td) {
        td.classList.remove("NumeroMarcado");
    });

    atualizarHistorico();

    document.getElementById("BotaoSortear").disabled = false;
}

// Inicializa o jogo
function inicializarJogo() {
    document.getElementById("BotaoSortear").addEventListener("click", sortearNumero);
    document.getElementById("BotaoReiniciar").addEventListener("click", novoJogo);
}

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", inicializarJogo);
