function renderProducto(){
    const paquete = JSON.parse(localStorage.getItem("paquete"));
    let contenido = `<div class="card">
    <div class="detalle">
    <img src=${paquete.imagen} class="img-destino">
    <h3 class="titulo-destino">${paquete.destino}</h3>
    <p>Paquete de ${paquete.duracion}</p><br>
    <p>Incluye ${paquete.transporte} y alojamiento en Hotel ${paquete.hotel}</p>
    </div>
    <p>Precio por persona $<b>${paquete.precio}</b></p><br>
    

    <p><button class="btn-info" onClick="completarDatos();">Avanzar con la solicitud</button></p>
  </div>`;
  document.getElementById("contenido").innerHTML = contenido;
};

function completarDatos(){
location.href = "form.html";       
}
renderProducto();