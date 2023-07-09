(async ()=> {
    const {value: pais} = await Swal.fire({
        title: "Bienvenide!",
        text: "Selecciona tu pais",
        icon: "question",
        confirmButtonText: "Seleccionar",
        footer: "Esta es información importante!",
        allowOutsideClick:false,
	    allowEscapeKey:false,
	    allowEnterKey:false,
        input: "select",
        inputPlaceholder: "País",
        inputOptions: {
            Argentina: "Argentina",
            España: "España",
            Mexico: "México",        
        }
    });

    if(pais){
        Swal.fire({
            title: `¡Estás en MundoViajero ${pais}! `,
            confirmButtonText: "Continuar",

        });
    }
})()
  const paquetes = [
    {
        id: 1,
        imagen:
          "https://www.argentinaenviaje.com/wp-content/uploads/2020/01/sanrafael-mendoza-med.jpg",
        destino: "San Rafael",
        duracion: "5 dias",
        transporte: "Aéreo",
        hotel: "Terra apart",
        precio: 62500,
        region: 1,
      },
      {
        id: 2,
        imagen:
          "https://respiroviajes.com/wp-content/uploads/2020/06/que-hacer-en-Merlo-10.jpg",
        destino: "Merlo",
        duracion: "4 dias",
        transporte: "Bus",
        hotel: "La estancia",
        precio: 42600,
        region: 1,
      },
      {
        id: 3,
        imagen:
          "https://media.istockphoto.com/id/820824654/es/foto/bariloche-lago-nahuel-huapi.jpg?s=612x612&w=0&k=20&c=UIe5LkCmk1zAZRFEFnVdAbEncUSPAtpPdRf0KtQHpjo=",
        destino: "Bariloche",
        duracion: "7 dias",
        transporte: "Aéreo",
        hotel: "Hotel del lago",
        precio: 92200,
        region: 1,
      },
      {
        id: 4,
        imagen:
          "https://www.barnes-miami.com/wp-content/uploads/2021/03/MG_6_1_Miami.jpg",
        destino: "Miami",
        duracion: "6 dias",
        transporte: "Aéreo",
        hotel: "Holiday Inn",
        precio: 782200,
        region: 2,
      },
      {
        id: 5,
        imagen:
          "https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        destino: "Rio de Janeiro",
        duracion: "7 dias",
        transporte: "Aéreo",
        hotel: "Copacabana Hotel",
        precio: 775200,
        region: 2,
      },
      {
        id: 6,
        imagen:
          "https://www.eleconomista.com.mx/__export/1680217937738/sites/eleconomista/img/2023/03/29/cancun_shutterstock_2114994.jpg_554688468.jpg",
        destino: "Cancun",
        duracion: "8 dias",
        transporte: "Aéreo",
        hotel: "Riu Playa del Carmen",
        precio: 1075200,
        region: 2,
      },
];

function guardarPaquetesLS(){
    localStorage.setItem("paquetes", JSON.stringify(paquetes));
}

function cargarPaquetesLS(){
    return JSON.parse(localStorage.getItem("paquetes"));
}

guardarPaquetesLS();

function renderPaquetes(){
    let paquetes = cargarPaquetesLS();
    let contenido = "";

    paquetes.forEach(paquete => {
        contenido += `
        <div class="card text-center">
        <img src=${paquete.imagen} class="img-destino">
        <h3 class="titulo-destino">${paquete.destino}</h3>
        <p>Paquete de ${paquete.duracion}</p><br>
        <p>Incluye ${paquete.transporte} y alojamiento en Hotel ${paquete.hotel}</p>
        <p><button class="btn-info" onClick="verPaquete(${paquete.id});">Ver Paquete</button></p>
      </div>
      `
    });

    document.getElementById("contenido").innerHTML = contenido;
};

function verPaquete(id){
    let paquetes = cargarPaquetesLS();
    let paquete = paquetes.find(item => item.id == id);
    localStorage.setItem("paquete", JSON.stringify(paquete));
    location.href = "./html/ver-paquete.html";
}

renderPaquetes();