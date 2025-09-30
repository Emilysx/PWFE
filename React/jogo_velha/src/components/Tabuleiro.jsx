import Quadrado from "./Quadrado";
import { useState } from "react";
import "../App.css";

export default function Tabuleiro() {
    const [quadrados, setQuadrado] = useState(Array(9).fill(null));
    const [xProximo, setxProximo] = useState(true);

    function handleClick(i) {
        // se já houver vencedor ou se o quadrado estiver preenchido, não faz nada
        if (vencedor(quadrados) || quadrados[i]) {
            return;
        }

        const nextQuadrado = quadrados.slice();

        if (xProximo) {
            nextQuadrado[i] = "X";
        } else {
            nextQuadrado[i] = "O";
        }

        setQuadrado(nextQuadrado);
        setxProximo(!xProximo);
    }

    const resultado = vencedor(quadrados);

    let status;
    if (resultado === "X" || resultado === "O") {
        status = "Vencedor é: " + resultado;
    } else if (resultado === "Empate") {
        status = "Deu velha!";
    } else {
        status = "O próximo jogador é: " + (xProximo ? "X" : "O");
    }

    function reiniciar() {
        setQuadrado(Array(9).fill(null));
        setxProximo(true);
    }

    return (
        <>
            <section className="containerTabuleiro">
                <h1>Jogo da Velha</h1>
                <h2>{status}</h2>
                <div className="linha">
                    <Quadrado value={quadrados[0]} onQuadrado={() => handleClick(0)} />
                    <Quadrado value={quadrados[1]} onQuadrado={() => handleClick(1)} />
                    <Quadrado value={quadrados[2]} onQuadrado={() => handleClick(2)} />
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[3]} onQuadrado={() => handleClick(3)} />
                    <Quadrado value={quadrados[4]} onQuadrado={() => handleClick(4)} />
                    <Quadrado value={quadrados[5]} onQuadrado={() => handleClick(5)} />
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[6]} onQuadrado={() => handleClick(6)} />
                    <Quadrado value={quadrados[7]} onQuadrado={() => handleClick(7)} />
                    <Quadrado value={quadrados[8]} onQuadrado={() => handleClick(8)} />
                </div>

                <section className="reiniciarJogo">
                    <button onClick={reiniciar} className="btn-reiniciar">
                        Reiniciar jogo
                    </button>
                </section>
            </section>
        </>
    )
}

function vencedor(quadrados) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < linhas.length; i++) {
        const [a, b, c] = linhas[i];
        if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
            return quadrados[a]; // “X” ou “O”
        }
    }

    // se não tem vencedor mas todos os quadrados estão preenchidos → empate
    if (quadrados.every(Boolean)) {
        return "Empate";
    }

    return null;
}