  function enviarForm(){
  let enviar = document.getElementById("submit")
  enviar.onclick = showAlert;
}

function showAlert(){
  alert('Mensaje enviado correctamente')
}
