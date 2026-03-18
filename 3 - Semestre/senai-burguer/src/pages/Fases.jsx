import { useState } from "react"
import questoes from "../../public/data/perguntas.json"
import Caixaquestoes from "../componntes/CaixaQuestoes"
import Grid from "../componntes/Grid"


export default function Fases(){

	const [selecionada, setSelecionada] = useState (null);

	const handleOpen = (ques) => setSelecionada (ques);
	const handleClose = () => setSelecionada (null);

	return(
		<main className="app">
			<header>
				<h1>Senai Burguer</h1>
			</header>

			{selecionada && <p>{selecionada.promt}</p>};
			<button onClick={ ()=>
				setSelecionada(questoes[0])}>
					Abrir perguntas

			</button>
		</main>
	)

}