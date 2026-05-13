import { useState, useId } from "react";
import "./CaixaQuestoes.css";

// Importação dinâmica dos ingredientes da pasta assets
import pão from "../assets/Pão.png";
import queijo from "../assets/Queijo.png";
import alface from "../assets/alface.png";
import tomate from "../assets/Tomate.png";
import picles from "../assets/Picles.png";
import cebola from "../assets/Cebola.png";
import ketchup from "../assets/Ketchup.png";
import humburguer from "../assets/Humburguer.png";
import secreto from "../assets/Ingrediente Secreto.png";
import lancheCompleto from "../assets/Lanche-completo.png";

const dicionarioIngredientes = {
  "Pão": pão,
  "Queijo": queijo,
  "Alface": alface,
  "Tomate": tomate,
  "Picles": picles,
  "Cebola": cebola,
  "Ketchup": ketchup,
  "Humburguer": humburguer,
  "Ingrediente Secreto": secreto,
  "Lanche Completo": lancheCompleto
};

export default function CaixaQuestoes({ question, index, total, onClose, onCorrect }) {
  const [feedback, setFeedback] = useState("");
  const [resolvida, setResolvida] = useState(false);
  const idTitulo = useId();

  
  
  const verificarResposta = (alternativaEscolhida) => {
    if (alternativaEscolhida === question.respostaCorreta) {
      setResolvida(true);
      setFeedback("Correto! Você coletou o ingrediente!");
    } else {
      setFeedback("Ops! Tente novamente.");
    }
  };

  return (
    <div className="cartao-questao" role="dialog" aria-labelledby={idTitulo}>
      <header className="topo-questao">
        <button className="botao-voltar" onClick={onClose}>←</button>
        <h2 id={idTitulo}>FASE {index + 1}</h2>
      </header>

      <div className="conteudo-pergunta">
        <div className="caixa-texto-pergunta">
          <p>{question.pergunta}</p>
        </div>

        <div className="grade-alternativas">
          {['A', 'B', 'C', 'D'].map((letra) => (
            <button 
              key={letra}
              className="botao-alternativa"
              onClick={() => verificarResposta(letra)}
              disabled={resolvida}
            >
              <span className="letra">{letra}</span>
              <span className="texto-opcao">{question.opcoes[letra]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="area-ingrediente">
        <div className="display-ingrediente">
          <img 
            src={dicionarioIngredientes[question.ingrediente]} 
            alt={question.ingrediente} 
          />
        </div>
        <div className="instrucao-ingrediente">
          <p>
            {resolvida 
              ? `Você pegou o ${question.ingrediente}!` 
              : `Responda para ganhar o ${question.ingrediente}!`}
          </p>
        </div>
      </div>

      {resolvida && (
        <button className="botao-avancar" onClick={() => { onCorrect(question.id); onClose(); }}>
          PRÓXIMO NÍVEL
        </button>
      )}
      
      {feedback && <p className="feedback-texto">{feedback}</p>}
    </div>
  );
}