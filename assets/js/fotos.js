 

confirmar() 


  function confirmar() {
      $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Claaro!": function() {
            $( this ).dialog( "close" );
            PlayAudio();
          },
          'Nada! To de boa hoje': function() {
            $( this ).dialog( "close" );
            alert("=(");
          }
        }
      });
  }

function PlayAudio(){
  const audio = document.querySelector('audio');
      console.log("tocando");
      audio.play();
}