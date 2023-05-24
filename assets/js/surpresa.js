

window.addEventListener("DOMContentLoaded", function() {
  showLoading();  
  trocarVideo();

});


function trocarVideo(){
  var randomNumber = Math.floor(Math.random() * 7) + 1;
  var video = document.getElementById("videos");
  var directory = '../midia/'+randomNumber+'.mp4';
  console.log(randomNumber);  
  video.src = directory;
  video.load();
  hideLoading();
}
    //video.setAttribute('src', directory);    
// testar a função Onload tbm após carregar o video para desativar o carregamento do loading}