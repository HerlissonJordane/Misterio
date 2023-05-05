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