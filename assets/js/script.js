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
        return window.location.href = "assets/pages/pedido.html"
        
    } else {
        setTimeout(() => hideLoading(), 4000);
        return window.location.href = "assets/pages/surpresa.html"
    }
}

