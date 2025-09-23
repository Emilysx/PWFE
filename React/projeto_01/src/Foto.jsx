import React from "react";
import moranguinho from './assets/moranguinho.png'
import moranguinho2 from './assets/moranguinho2.png'

function Foto(){

    return (
        <figure className="foto">
            <img src={moranguinho} alt="Moranguinho feliz" />
            <img src={moranguinho2} alt="Moranguinho com vestido" />
        </figure>

    )
}

export default Foto