export default function DragSentece({parts, answers, onDropWord}){
	return(
		<p className="drag-sentece">
			{parts.map((part, index) => {
				if(part.type === "text"){
					return <span key={index}> {part.value} </span>
				}

				return(
					<span
						key={index}
						className="drop-slot"
						onDragOver={(e) => e.preventDefault()}
						onDrop={(e) =>{
							const word = e.dataTransfer.getData("text/plain")
							onDropWord(index, word)
						}}
						role="button"
						tabIndex={0}
					>
						{answers[index] || "__________________"}
					</span>
				)
			})}

		</p>
	)

}