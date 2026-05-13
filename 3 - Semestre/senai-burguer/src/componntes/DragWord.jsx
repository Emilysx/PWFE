export default function DragWord({word}){
	return(
		<button className="btn-drag" 
		draggable onDragStart={(e) =>{
			e.dataTransfer.setData("text/plain", word)
		}} 
		type="button" 
		aria-label={`Palavra: ${word}`}
		>
			{word}
		</button>
	)

}