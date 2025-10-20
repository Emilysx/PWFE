import './FilmeCard.css';

function FilmeCard({ filme }){
    
    return (
        <article className="filme-card">
            <figure>
                <img src={filme.imagem} alt={filme.titulo} />
            </figure> 
            <h2>{filme.titulo}</h2>
            <p>{filme.ano} ° {filme.genero}</p> 
        </article>
    )
}

export default FilmeCard;