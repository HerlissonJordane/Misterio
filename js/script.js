var loading;// = document.querySelector('.loading');
var count = 4;
var load;

const button = document.querySelector("#send");

button.addEventListener("click", () => {   

    const nome = document.querySelector("#name");
    const value = nome.value;    
    
    let evento = verificaNome(value);
    redirect(evento);

})

//VERIFICA QUAL NOME FOI DIGITADO
function verificaNome(nomeDigitado){
    let retorno;
    if (nomeDigitado.toUpperCase() === 'CINTIA') {
       retorno = 1
    } else {
       retorno = 0
    }
    return retorno
}

//REDIRECIONA PARA A PÁGINA DE ACORDO COM A VALIDAÇÃO DO NOME
function redirect(evento){
    console.log(evento);
    if (evento === 1) {
        setTimeout(() => hideLoading(), 2000);
        return window.location.href = "pedido.html"
        
    } else {
        setTimeout(() => hideLoading(), 2000);
        return window.location.href = "surpresa.html"
    }
}

//CRIA O COMPONETE LOADING
function showLoading(){
    const div = document.createElement("div");
    div.classList.add("loading", "centralize");
    
    const div2 = document.createElement("div");
    div2.classList.add("spinner");
    div.appendChild(div2);


    const label = document.createElement("label");
    label.classList.add("percent");
    label.innerText = "carregando";   
    div2.appendChild(label);

    document.body.appendChild(div);
    console.log("bateu 100");
}

//OCULTA O COMPONENTE LOADING
function hideLoading(){
    const loadings = document.getElementsByClassName("loading");
    if (loadings.length) {
        loadings[0].remove();        
    }
}