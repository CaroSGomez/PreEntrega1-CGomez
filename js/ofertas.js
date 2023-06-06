const paquetes = [
    {
        id: 1,
        name: "Ushuaia",
        img:"../images/Ushuaia.jpg",
        text:"La ciudad más austral del mundo",
        precio: 55000,
        
    },
    {
        id: 2,
        name: "Iguazu",
        img:"../images/Iguazu.jpg",
        text:"Una de las 7 maravillas del mundo",
        precio: 48000,
      
    },
    {
        id: 3,
        name: "Jujuy",
        img:"../images/Jujuy.jpg",
        text:"Es el punto de acceso al corazón indigena de Argentina",
        precio: 35000,

    },
    {
        id: 4,
        name: "Bariloche",
        img:"../images/Bariloche.jpeg",
        text:"......",
        precio: 52000,

    },
    {
        id: 5,
        name: "Puerto Madryn",
        img:"../images/Puerto-madryn.jpg",
        text:"......",
        precio: 45000,

    },
    {
        id: 5,
        name: "San Martin de los Andes",
        img:"../images/SanMartin.jpg",
        text:"......",
        precio: 50000,

    },
];

const contenedorPaquetes = document.querySelector(".contenedor-paquetes");

const resultado = document.querySelector(".resultados");

const elegidos = [];

document.addEventListener("DOMContentLoaded", () => {
    mostrarOpciones();
});

function mostrarOpciones() {
    for (const item of paquetes) {
        const divPaquetes = document.createElement("div");
        divPaquetes.classList.add("card");
        
        const tituloDestino = document.createElement("h2");
        tituloDestino.classList.add("titulo-destino");
        tituloDestino.textContent = item.name;

        const imgDestino = document.createElement("img");
        imgDestino.classList.add("img-destino");
        imgDestino.src = item.img;
       
        const btnInfo = document.createElement("button");
        btnInfo.classList.add("btn-info");
        btnInfo.textContent = "Saber costo";
        btnInfo.onclick = ()=>{
            mostrarPrecio (item.precio);
        }; 
            
        
        const textInfo = document.createElement("p");
        textInfo.classList.add("info");
        textInfo.textContent = "**Aprovecha el beneficio de PreViaje para conocer este destino**";
        
        divPaquetes.appendChild(tituloDestino);
        divPaquetes.appendChild(imgDestino);
        divPaquetes.appendChild(textInfo);
        divPaquetes.appendChild(btnInfo);

        
        contenedorPaquetes.appendChild(divPaquetes);

    };
};

function mostrarPrecio (precio){

    resultado.innerHTML = "";
    const destinoElegido = document.createElement("p");
    destinoElegido.textContent = ("El precio por persona en base doble es: $" + precio);
    destinoElegido.classList.add("detalle")
    elegidos.push(destinoElegido);

    const btnInfoPlus = document.createElement("button");
        btnInfoPlus.classList.add("btn-info");
        btnInfoPlus.textContent = "Ir al cotizador";
        elegidos.push(btnInfoPlus);
        btnInfoPlus.onclick = ()=>{
           
        }; 


    resultado.appendChild(destinoElegido);
    resultado.appendChild(btnInfoPlus);


};


