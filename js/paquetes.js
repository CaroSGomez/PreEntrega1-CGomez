const ofertas = [
    {destino:"Salta",
     duracion:"6 dias",
     transporte:"Aéreo",
     hotel:"Amerian Salta",
     precio:82500,
     region: 1,
    },
    {destino:"San Rafael",
     duracion:"5 dias",
     transporte:"Aéreo",
     hotel:"Terra apart",
     precio:62500,
     region: 1,

    },
    {destino:"Merlo",
     duracion:"4 dias",
     transporte:"Bus",
     hotel:"La estancia",
     precio:42600,
     region: 1,

    },
    {destino:"Bariloche",
     duracion:"7 dias",
     transporte:"Aéreo",
     hotel:"Hotel del lago",
     precio:92200,
     region: 1,

    },
    {destino:"Miami",
     duracion:"10 dias",
     transporte:"Aéreo",
     hotel:"Holiday Inn",
     precio:782200,
     region: 2,

    },
    {destino:"Rio de Janeiro",
     duracion:"7 dias",
     transporte:"Aéreo",
     hotel:"Copacabana Hotel",
     precio:675200,
     region: 2,
    },
];

let region = prompt("Ingresa 1 si deseas ver ofertas Nacional o 2 para viajar fuera del pais")

while (region >=3){
    alert("La opción de salida no es válida");
    region = prompt("Por favor ingresa 1 si deseas ver ofertas Nacional o 2 para viajar fuera del pais")
}

const regionViaje = ofertas.filter((el) => el.region == region)

console.log(regionViaje);

const mostrarOpciones= () =>{

    let salida= "";
        
    regionViaje.forEach(elemento =>{(salida+=`Destino: ${elemento.destino}.\n Duracion: ${elemento.duracion}. \n Pasaje: ${elemento.transporte}. \n Hotel: ${elemento.hotel}. \n Precio :  $${elemento.precio}. \n \n`)});

    return salida;
}

alert(`Las ofertas disponibles son: \n\n ${mostrarOpciones()}`);
