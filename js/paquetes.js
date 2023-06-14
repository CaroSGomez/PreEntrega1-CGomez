const ofertas = [
    {id:1,destino:"San Rafael",duracion:"5 dias",transporte:"Aéreo",hotel:"Terra apart",precio:62500,region:1},
    {id:2,destino:"Merlo",duracion:"4 dias",transporte:"Bus",hotel:"La estancia",precio:42600,region:1},
    {id:3,destino:"Bariloche",duracion:"7 dias",transporte:"Aéreo",hotel:"Hotel del lago",precio:92200,region:1},
    {id:4,destino:"Miami",duracion:"6 dias",transporte:"Aéreo", hotel:"Holiday Inn",precio:782200,region:2},
    {id:5,destino:"Rio de Janeiro",duracion:"7 dias",transporte:"Aéreo",hotel:"Copacabana Hotel",precio:775200,region:2},
    {id:6,destino:"Cancun",duracion:"8 dias",transporte:"Aéreo",hotel:"Riu Playa del Carmen",precio:1075200,region:2},
];

class Usuario{
    constructor(nombre,apellido,dni,tel,mail,fop){
        this.nombre=nombre.toUpperCase(),
        this.apellido=apellido.toUpperCase(),
        this.dni=dni,
        this.tel=tel,
        this.mail=mail,
        this.fop=fop
    }
}

const usuario1=[];

function mostrarOpciones() {

    let salida= "";
        
    regionViaje.forEach(el =>{(salida+=`Paquete Nro: ${el.id} \n Destino: ${el.destino}.\n Duracion: ${el.duracion}. \n Transporte: ${el.transporte}. \n Hotel: ${el.hotel}. \n Precio por persona: $${el.precio}. \n \n`)});

    return salida;
}

function mostrarEleccion(){
    for (const item of paqueteElegido){
    alert(`El paquete elegido es \n Paquete Nro: ${item.id} \n Destino: ${item.destino}.\n Duracion: ${item.duracion}. \n Transporte: ${item.transporte}. \n Hotel: ${item.hotel}. \n Precio por persona: $${item.precio}. \n \n`)
}
}

function solicitarDatos(){
    let nombre=prompt("Ingresa tu nombre completo");
    let apellido=prompt("Ingresa tu apellido completo");
    let dni=prompt("Ingresa tu numero de DNI");
    let tel=parseInt(prompt("Ingresa tu telefono"));
    let mail=prompt("Ingresa tu mail");
    let fop=prompt("Ingresa la opcion de pago deseasa" + "\n" + " 1-Tarjeta de crédito" +"\n"+ "2-Transferencia");
    if(fop == 1){
        fop = "Tarjeta de credito"
    }else if(fop == 2){
        fop = "Transferencia"
    };

    usuario1.push(new Usuario(nombre,apellido,dni,tel,mail,fop))

}

let comprar="";

function mostrarDatos(){

    for (const dato of usuario1){
        alert(`Verificar datos cargados \n Nombre: ${dato.nombre} \n Apellido: ${dato.apellido}.\n DNI: ${dato.dni}. \n Tel: ${dato.tel}. \n Mail: ${dato.mail}. \n Forma de pago elegida ${dato.fop}. \n \n`)
    }
    comprar = prompt("Si los datos estan correctos ingresa 1");

}

class Cotizador{
    constructor(precio,adultos,cuotas){
      this.precio = precio,
      this.adultos=adultos,
      this.cuotas=cuotas
    }
  
    agregarIva(){
    this.precio = this.precio * 1.21;
    }
  
    mostrarResumen(){
      document.write("Importe con impuestos por adulto: $" + this.precio + "<br>" + "Cantidad de adultos: "+ this.cuotas + "<br>" + "Cantidad de cuotas elegidas: "+this.cuotas +"<br>")
    }
  
    financiar(){
      if (this.cuotas == 3){
        this.cuotas = 1.30
      } else if(this.cuotas == 6){
        this.cuotas = 1.36
      } else if (this.cuotas == 12){
        this.cuotas = 1.39
      }
    }
  
    calcularFinal(){
      let total = (this.precio * this.adultos)*this.cuotas
      document.write("El importe total del paquete a pagar: $" + total)
    }
  
  }

let region = prompt("Ingresa 1 si deseas ver ofertas Nacionales o 2 para viajar fuera del pais");

while ((region >=3) || (region==0) || (region=="")){
    region = prompt("Por favor ingresa 1 si deseas ver ofertas Nacionales o 2 para viajar fuera del pais")
}

const regionViaje = ofertas.filter((el) => el.region == region)

console.log(regionViaje);

alert(`Las ofertas disponibles son: \n\n ${mostrarOpciones()}`);

let paquete = prompt("Ingresa el nro de paquete que deseas contratar. Marca 0 para volver a ver las opciones disponibles");

while ((paquete == 0)||(paquete=="")){
    alert(`Las ofertas disponibles son: \n\n ${mostrarOpciones()}`);
    paquete = prompt("Ingresa el nro de paquete que deseas contratar. Marca 0 para volver a ver las opciones disponibles");
} 

const paqueteElegido = regionViaje.filter((el)=>el.id == paquete);

mostrarEleccion();

console.log(paqueteElegido)

let precioElegido = paqueteElegido[0].precio

console.log(precioElegido)

let avanzar = prompt("Si deseas avanzar al cotizador de cuotas marca 1. De lo contrario marca 0 para salir")
let cantidadAdultos;
let cuotas;
let venta;

while (avanzar==""){
    avanzar = prompt("Si deseas avanzar al cotizador de cuotas marca 1. De lo contrario marca 0 para salir")
}
if (avanzar == 1){
    cantidadAdultos = prompt("Ingrese cantidad de adultos");
    cuotas =prompt("Ingrese la cantidad de cuotas que deseas (3, 6 o 12 cuotas)");
    while (cuotas == ""){
      alert("La opción de salida no es válida");
      cuotas =prompt("Ingrese la cantidad de cuotas elegidas(3, 6 o 12 cuotas)")
  }
    cuotas = parseInt(cuotas)
    const calculo1 = new Cotizador(precioElegido,cantidadAdultos,cuotas)

    calculo1.agregarIva();
    calculo1.mostrarResumen();
    calculo1.financiar();
    calculo1.calcularFinal();

    alert("Gracias por usar nuestro cotizador")
    
} else if(avanzar == 0){
     venta = prompt("Tal vez alguno de nuestros agentes de viajes pueda ayudarte! Si deseas que te comuniquen presiona 1 y completa los datos. De lo contrario presiona cualquier tecla para salir");
     if(venta == 1){
        solicitarDatos();
        mostrarDatos();
        alert(`En el trancurso del dia de hoy un agente de ventas te contactará para concretar tu viaje`)
     } 
}


