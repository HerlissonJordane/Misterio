const moveButton  = document.getElementById("btn-nao");
const yesButtom = document.getElementById("btn-sim");

console.log(yesButtom);


//MUDA DE LUGAR SE CLICAR NO BOTÃO
moveButton.addEventListener("click", () => { 
    randomButton();    
});


//FAZ MNUDAR DE LUGAR SE O MOUSE PASSAR POR CIMA
moveButton.onmouseover = function() {randomButton()};


//CRIA A NOVA POSIÇÃO DO BOTÃO
function randomButton(){
    var vertical = Math.floor(Math.random() * 400);
    var horizontal = Math.floor(Math.random() * 400);
    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
}

yesButtom.addEventListener("click", () =>{
    aceitou();
})

function aceitou(){
    window.location.href = "fotos.html"
}