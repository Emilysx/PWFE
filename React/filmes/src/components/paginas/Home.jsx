import NavBar from "../celula/NavBar";
import FilmeCard from "../organismo/FilmeCard.jsx";



const filmes = [
    {
        id: 1,
        titulo: "Adrenalina",
        ano: 2006,
        genero: "Ação, Crime",
        imagem: "https://static.wikia.nocookie.net/dublagem/images/5/59/Adrenalina.jpg/revision/latest/scale-to-width-down/1200?cb=20241223193610&path-prefix=pt-br"

    },
    {
        id: 2,
        titulo: "Alvin e os Esquilos",
        ano: 2007,
        genero: "Animação, Aventura",
        imagem: "https://cinemacomrapadura.com.br/imagens/2014/08/20140827-alvin_e_os_esquilos-poster-615x878.jpg"
    },
    {
        id: 3,
        titulo: "Rio",
        ano: 2011,
        genero: "Animação, Aventura",
        imagem: "https://static.wikia.nocookie.net/rio/images/6/66/Rio_Poster.jpg/revision/latest?cb=20140428044615&path-prefix=pt-br"
    }
];

function Home() {
    return (
        <>
            <NavBar />
            <header>
                <h1>Catálogo de Filmes</h1>
            </header>
            <main>
                <div className="filme-list">
                    {filmes.map((filme) => (
                        <FilmeCard key={filme.id} filme={filme} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Home;