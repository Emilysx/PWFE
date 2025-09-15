fetch("https://www.csscolorsapi.com/api/colors")
    .then(res=> res.json())
    .then(dados => {
        const lista = document.getElementById("lista");
        const cores = dados.colors || dados;
 
        cores.forEach(cor => {
            const item = document.createElement("article");
            item.className = "cor";
 
            const quadrado = document.createElement("div");
            quadrado.className = "quadrado";
 
            quadrado.style.backgroundColor = "#" + cor.hex;
 
            const texto = document.createElement("h2");
            texto.textContent = `${cor.name} - #${cor.hex}`
 
            item.appendChild(quadrado);
            item.appendChild(texto);
            lista.appendChild(item);
        });
    })
    .catch(err => console.error("Erro ao carregar as cores.", err));