import DragWord from "./DragWord"

export default function WordBank({words}){

	return(
		<div className="word-bank">
			{words.map((w) => (
				<DragWord key={w} word={w} />
			))}
		</div>
	)

}