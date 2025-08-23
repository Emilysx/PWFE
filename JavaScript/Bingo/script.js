// Variáveis globais do jogo
var numerosSorteados = [];
var numeroAtual = null;

// Função para criar a tabela completa do bingo
function criarTabelaBingo() {
    var corpoTabela = document.getElementById("CorpoCartela");
    corpoTabela.innerHTML = "";

    // Criar 15 linhas (cada coluna tem 15 números)
    for (var linha = 0; linha < 15; linha++) {
        var tr = document.createElement("tr");

        // Criar 5 colunas (B, I, N, G, O)
        for (var coluna = 0; coluna < 5; coluna++) {
            var td = document.createElement("td");
            var numero;

            // Calcular o número baseado na coluna e linha
            if (coluna === 0) {
                numero = linha + 1; // Coluna B: 1 a 15
            } else if (coluna === 1) {
                numero = linha + 16; // Coluna I: 16 a 30
            } else if (coluna === 2) {
                numero = linha + 31; // Coluna N: 31 a 45
            } else if (coluna === 3) {
                numero = linha + 46; // Coluna G: 46 a 60
            } else if (coluna === 4) {
                numero = linha + 61; // Coluna O: 61 a 75
            }

            td.textContent = numero;
            td.setAttribute("data-numero", numero);
            tr.appendChild(td);
        }

        corpoTabela.appendChild(tr);
    }
}

// Função para sortear um número
function sortearNumero() {
    if (numerosSorteados.length >= 75) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    var numero;
    var tentativas = 0;

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
    if (numerosSorteados.length >= 75) {
        var botaoSortear = document.getElementById("BotaoSortear");
        botaoSortear.disabled = true;
    }
}

// Função para marcar um número na tabela
function marcarNumeroNaTabela(numero) {
    var celulas = document.querySelectorAll("#CorpoCartela td");

    for (var i = 0; i < celulas.length; i++) {
        var celula = celulas[i];
        var numeroTabela = parseInt(celula.getAttribute("data-numero"));

        if (numeroTabela === numero) {
            celula.classList.add("NumeroMarcado");
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

    for (var i = 0; i < numerosOrdenados.length; i++) {
        var numero = numerosOrdenados[i];
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
    }

    areaHistorico.innerHTML = "";
    areaHistorico.appendChild(lista);
}

// Função para iniciar um novo jogo
function novoJogo() {
    numerosSorteados = [];
    numeroAtual = null;

    var elementoNumero = document.getElementById("NumeroAtual");
    elementoNumero.innerHTML = '<span class="TextoAguardando">Clique em "Sortear"</span>';

    var celulas = document.querySelectorAll("#CorpoCartela td");
    for (var i = 0; i < celulas.length; i++) {
        celulas[i].classList.remove("NumeroMarcado");
    }

    atualizarHistorico();

    var botaoSortear = document.getElementById("BotaoSortear");
    botaoSortear.disabled = false;
}

// Função para inicializar o jogo
function inicializarJogo() {
    criarTabelaBingo();

    document.getElementById("BotaoSortear").addEventListener("click", sortearNumero);
    document.getElementById("BotaoReiniciar").addEventListener("click", novoJogo);
}

document.addEventListener("DOMContentLoaded", inicializarJogo);
