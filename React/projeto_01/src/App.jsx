import './App.css' // import basico, ref para quando foi exportado 
import Foto from './Foto.jsx'
import Profile from './Profile.jsx'

function App() {
  return (
    <main className="app">
      <h1>Perfil — Moranguinho</h1>

      <article className="perfil-principal">
        <Foto />
        <Profile />
      </article>
    </main>
  )
}

export default App // Faz que o conponente seja "visto" por todo o React
