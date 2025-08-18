// Arvore dom
let btn = document.querySelector("button");

function random(num){
    return Math.floor(Math.random() * (num + 1));
}

// btn.onclick = function (){
//     let cor = 
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//     document.body.style.backgroundColor = cor;
// };

/* function bgChange(){
    let cor = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = cor;

}

btn.addEventListener("click", bgChange);*/

/* // FUNÇÃO ANONIMA
btn.addEventListener("click", function(){
    let cor = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = cor;
})
*/

// ARROW FANCTION 
// btn.addEventListener("click", ()=> {
//     let cor = 
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//     document.body.style.backgroundColor = cor;
// })

function bgChange(event){
    let cor = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    event.target.style.backgroundColor = cor;
}
btn.addEventListener("click", bgChange);