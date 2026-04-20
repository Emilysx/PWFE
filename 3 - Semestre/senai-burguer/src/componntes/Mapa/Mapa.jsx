import React from 'react';
import './Mapa.css';

import imgBloqueada from '../../assets/fase-bloqueada.png';
import imgConcluida from '../../assets/fase-concluida.png';
import imgDesbloqueada from '../../assets/fase-desbloqueada.png';

export default function Mapa({ questoes, aoAbrir, indiceDesbloqueado, conjuntoResolvido }) {
    if (!questoes || !Array.isArray(questoes)) return null;

    return (
        <section className="container-mapa">
            <div className="fundo-mapa">
                {questoes.map((q, index) => {
                    const estaBloqueada = index > indiceDesbloqueado;
                    const estaResolvida = conjuntoResolvido.has(q.id);
                    
                    let imagemFase = imgDesbloqueada;
                    if (estaBloqueada) imagemFase = imgBloqueada;
                    if (estaResolvida) imagemFase = imgConcluida;

                    return (
                        <button 
                            key={q.id}
                            className={`botao-fase fase-${index}`}
                            onClick={() => !estaBloqueada && aoAbrir(q)}
                            disabled={estaBloqueada}
                        >
                            <img 
                                src={imagemFase} 
                                alt="" 
                                className="icone-fase"
                            />
                            {/* O span precisa de uma classe para centralizarmos no CSS */}
                            <span className="numero-fase">{index + 1}</span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}