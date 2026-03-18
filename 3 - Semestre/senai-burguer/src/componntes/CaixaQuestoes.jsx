import { useId, useRef, useState } from "react";

export default function Caixaquestoes({ question, index, total, onClose, onCorret, }) {

	const titleId = useId();
	const dialogo = useRef(null);
	const closebtnRef = useRef(null);
	const prevFocused = useRef(null);

	const [resposta, setResposta] = useState("");
	const [feedback, setFeedback] = useState({ type: "info", msg: "" })
	const [isCorrect, setIsCorrect] = useState(false)




	return (
		<>
			<div id={`dialogo-${question.id}`} role="dialog" aria-modal="true" aria-labelledby="{titleId}" className="doalogo" ref={dialogRef}>
				<header className="header-questão">
					<h2 id={titleId} className="questao-titulo">
						{question.titulo}
						<span className="questao-subtitulo">
							Pergunta {index + 1} de {total}
						</span>
					</h2>

					<button
						ref={closebtnRef}
						type="button"
						className="questao-fechar"
						aria-label={`Fechar pergunta: ${question.titulo}`}
						onClick={onClose}
					>
						Fechar
					</button>

				</header>

			</div>

		</>
	)

}