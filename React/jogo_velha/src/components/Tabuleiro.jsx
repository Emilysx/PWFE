import Quadrado from "./Quadrado";
import { useState } from "react";
import  "../App.css";
import letraX from '../assets/x.png';
import letraO from '../assets/o.png';
 
export default function Tabuleiro(){
    const [quadrados, setQuadrado] = useState(Array(9).fill(null));
    const [xProximo, setxProximo] = useState(true);
 
    function handleClick(i){
        if(quadrados[i]){
            return;
        }
         
       
        const nextQuadrado = quadrados.slice();
        
        if(xProximo) {
            nextQuadrado[i] = "{letraX}";
            console.log(nextQuadrado[i])
        } else {
            nextQuadrado[i] = "{letraO}";
            console.log(nextQuadrado[i])
        }
 
        setQuadrado(nextQuadrado);
        setxProximo(!xProximo);
    }

    const venceu = vencedor(quadrados);
    let status;
    if (venceu){
        status = "Vencendor é: " + venceu
    }else{
        status = "O proximo jogador é: " + (xProximo ? "{letraX}":"{letraO}");
    }

 
    return(
        <>
            <section className="containerTabuleiro">
                <h1>Jogo da Velha</h1>
                <h2>{status}</h2>
                <div className="linha">
                    <Quadrado value={quadrados[0]} onQuadrado = {() => handleClick(0)} />
                    <Quadrado value={quadrados[1]} onQuadrado = {() => handleClick(1)} />
                    <Quadrado value={quadrados[2]} onQuadrado = {() => handleClick(2)} />
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[3]} onQuadrado = {() => handleClick(3)} />
                    <Quadrado value={quadrados[4]} onQuadrado = {() => handleClick(4)} />
                    <Quadrado value={quadrados[5]} onQuadrado = {() => handleClick(5)} />
                </div>
                <div className="linha">
                    <Quadrado value={quadrados[6]} onQuadrado = {() => handleClick(6)} />
                    <Quadrado value={quadrados[7]} onQuadrado = {() => handleClick(7)} />
                    <Quadrado value={quadrados[8]} onQuadrado = {() => handleClick(8)} />
                </div>
            </section>
        </>
    )
}

function vencedor(quadrados){
    const lin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    

    for (let i = 0; i < lin.length; i++){
        const [a,b,c] = lin[i];

        if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
            return quadrados[a];
        }
    }
    return null;
}