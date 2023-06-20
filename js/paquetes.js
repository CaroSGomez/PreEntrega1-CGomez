const ofertas = [
  { id: 1, producto: "vuelo", destino: "Ushuaia", precio: 12500 },
  { id: 2, producto: "vuelo", destino: "Tucuman", precio: 9000 },
  { id: 3, producto: "vuelo", destino: "Bariloche", precio: 23000 },
  { id: 4, producto: "vuelo", destino: "Chapelco", precio: 17000 },
  { id: 5, producto: "hotel", destino: "Mar del Plata", precio: 6500 },
  { id: 6, producto: "hotel", destino: "Las grutas", precio: 5000 },
  { id: 7, producto: "hotel", destino: "Mendoza", precio: 11500 },
  { id: 8, producto: "paquete", destino: "Sudamerica", precio: 150000 },
  { id: 9, producto: "crucero", destino: "Caribe", precio: 89000 },
  { id: 10, producto: "auto", destino: "Miami", precio: 2500 },
];

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

const elegidos = [];

function mostrarPaquetes() {
  for (const paquete of paquetes) {
    let div = document.createElement("div");
    div.className = "col-md-4 text-center";
    div.innerHTML = `<img src=${paquete.imagen} class="img-fluid">
          <h3>${paquete.destino}</h3>
          <p>Paquete de ${paquete.duracion}.<br>
          Incluye ${paquete.transporte} y alojamiento en ${paquete.hotel}
        `;
    const btnInfo = document.createElement("button");
    btnInfo.classList.add("btn-info");
    btnInfo.textContent = "Saber costo";
    btnInfo.onclick = () => {
      mostrarPrecio(paquete.precio);
    };

    document.getElementById("paquetes").appendChild(div);
    document.getElementById("paquetes").appendChild(btnInfo);
  }
}

let resultado = document.getElementById("resultado");

function mostrarPrecio(precio) {
  resultado.innerHTML = "";
  const paqueteElegido = document.createElement("p");
  paqueteElegido.classList.add("detalle");

  paqueteElegido.textContent =
    "El precio por persona en base doble es: $" + precio;
  paqueteElegido.classList.add("detalle");
  elegidos.push(paqueteElegido);

  const btnInfoPlus = document.createElement("button");
  btnInfoPlus.classList.add("btn-info");
  btnInfoPlus.textContent = "Avanzar con la solicitud";
  btnInfoPlus.onclick = () => {
    solicitarDatos();
  };

  resultado.appendChild(paqueteElegido);
  resultado.appendChild(btnInfoPlus);
}

function solicitarDatos() {
  let datos = document.createElement("div");
  datos.innerHTML = `<form class="form" method="GET">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" />
    <label for="apellido">Apellido</label>
    <input type="text" id="apellido" />
    <label for="mail">Email</label>
    <input type="email" id="mail" placeholder="carito@gmail.com" />
    <label for="telefono">Telefono</label>
    <input type="number" id="telefono" />
    <label for="text">Nacionalidad</label>
    <select name="Tipo de usuario">
      <option value="Cultivador">Residente</option>
      <option value="Consumidor">Extranjero</option>
    </select>
    <label for="texto">Comentarios</label>
    <textarea
      name="texto"
      cols="30"
      rows="10"
      placeholder="En qué podemos ayudarte?"
    ></textarea>
    <input type="submit" value="Enviar formulario" />
  </form>
        `;
  let nombre = document.getElementById("nombre");

  resultado.appendChild(datos);
}

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

for (const oferta of ofertas) {
  guardarLocal(oferta.id, JSON.stringify(oferta));
}

guardarLocal("listaProductos", JSON.stringify(ofertas));

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

console.log(almacenados);

document.addEventListener("DOMContentLoaded", () => {
  mostrarPaquetes();
});
