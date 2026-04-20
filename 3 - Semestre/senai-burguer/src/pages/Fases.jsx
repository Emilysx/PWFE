import { useState, useMemo } from "react"
import questoes from "../../public/data/perguntas.json"
import CaixaQuestoes from "../componntes/CaixaQuestoes.jsx"
import Mapa from "../componntes/Mapa/Mapa.jsx"
import "./Fases.css"
import "../index.css"

export default function Fases() {
    const [selecionada, setSelecionada] = useState(null);
    const [unlockedIndex, setUnlockedIndex] = useState(0);
    const [solvedSet, setSolvedSet] = useState(() => new Set());

    const total = questoes.length;

    // Funções de controle
    const handleOpen = (perg) => setSelecionada(perg);
    const handleClose = () => setSelecionada(null);

    const progresso = useMemo(() => {
        const solved = solvedSet.size;
        return { solved, total, percent: Math.round((solved / total) * 100) };
    }, [solvedSet, total]);

    const handleCorrect = (id) => {
        setSolvedSet((prev) => {
            const next = new Set(prev);
            next.add(id);
            return next;
        });
        const idx = questoes.findIndex((q) => q.id === id);
        if (idx > -1 && idx < questoes.length - 1) {
            setUnlockedIndex((prev) => Math.max(prev, idx + 1));
        }
    };

    return (
        <main className='tela-jogo'>
            <header className="cabecalho-jogo">
                <h1>Senai Burguer</h1>
                <div className='container-barra-progresso'>
                    <div 
                        className='barra-preenchida'
                        style={{ width: `${progresso.percent}%` }}
                    />
                    <span className='texto-progresso'>
                        {progresso.solved}/{progresso.total}
                    </span>
                </div>
            </header>

            {/* Enviando as informações para o Mapa com os nomes corretos */}
            <Mapa 
                questoes={questoes} 
                aoAbrir={handleOpen} 
                indiceDesbloqueado={unlockedIndex} 
                conjuntoResolvido={solvedSet} 
            />
            
            {selecionada && (
                <div className="camada-sobreposicao">
                    <CaixaQuestoes 
                        question={selecionada}
                        index={questoes.findIndex((q) => q.id === selecionada.id)}
                        total={total}
                        onClose={handleClose}
                        onCorrect={handleCorrect}
                    />
                </div>
            )}
        </main>
    );
}