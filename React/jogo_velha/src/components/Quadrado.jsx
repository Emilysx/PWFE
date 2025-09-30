import letraX from "../assets/letraX.png";
import letraO from "../assets/letraO.png";

export default function Quadrado({ value, onQuadrado }) {
  let conteudo = null;

  if (value === "X") {
    conteudo = <img src={letraX} alt="X" className="icone" />;
  } else if (value === "O") {
    conteudo = <img src={letraO} alt="O" className="icone" />;
  }

  return (
    <button className="quadrado" onClick={onQuadrado}>
      {conteudo}
    </button>
  );
}
