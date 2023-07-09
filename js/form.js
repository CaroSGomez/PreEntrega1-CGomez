let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario enviado");
    alert("Gracias por tus datos. Dentro de las 48hs gestionaremos tu solicitud")
}

