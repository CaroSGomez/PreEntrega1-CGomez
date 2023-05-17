let destino = parseInt(prompt("Ingresa el destino elegido"+"\n"+ "1- Bariloche" +"\n"+ "2- Ushuaia"));

while ((destino != 1) && (destino != 2)){
    alert("La opción de salida no es válida")
    destino = parseInt(prompt("Por favor ingresa alguna de las siguientes opciones disponibles"+"\n"+ "1- Bariloche" +"\n"+ "2- Ushuaia"));
}

let salida = parseInt(prompt("Ingresa la salida elegida"+"\n"+ "1- Fecha 25/05/2023" +"\n"+ "2- Fecha 12/06/2023"));

while ((salida != 1) && (salida != 2)){
    alert("La opción de salida no es válida")
    salida = parseInt(prompt("Por favor ingresa alguna de las siguientes opciones disponibles"+"\n"+ "1- Fecha 25/05/2023" +"\n"+ "2- Fecha 12/06/2023"));
}

let cantidadAdt = parseInt(prompt("Ingrese la cantidad de adultos que viajarían (Mayores de 12 años)"));
let cantidadHab = parseInt(prompt("Ingrese la cantidad de habitaciones"));
let residente = parseInt(prompt("Por favor ingresa 1 si sos Residente o 2 si sos extranjero"));

while ((residente != 1) && (residente != 2)){
    alert("La opción de salida no es válida")
    residente = parseInt(prompt("Por favor ingresa alguna de las siguientes opciones disponibles"+"\n"+ "1- Soy Residente" +"\n"+ "2- Soy extranjero"));
}

function calculoFinal(precio, adultos, habitaciones) {
  let final = (precio * adultos) * habitaciones;
    return final;
}
function mostrarResumen(destino, salida, adultos, habitaciones,costo){
    alert ("Destino elegido: " + destino + "\n" + "Salida elegida: " + salida + "\n" + "Cantidad de adultos: " + adultos + "\n" + "Habitaciones: " + habitaciones + "\n" + "Total del paquete: $" + costo)
}
if ((destino == 1) && (salida == 1) && (residente == 1)){
    const precioAdt = 45000;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Bariloche", "25/05/2023", cantidadAdt, cantidadHab, costo );
    
} else if ((destino == 1) && (salida == 1) && (residente == 2)){
    const precioAdt = 51750;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Bariloche", "25/05/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 1) && (salida == 2) && (residente == 1)){
    const precioAdt = 60000;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Bariloche", "12/06/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 1) && (salida == 2) && (residente == 2)){
    const precioAdt = 69000;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Bariloche", "12/06/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 2) && (salida == 1) && (residente == 1)){
    const precioAdt = 48000;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Ushuaia", "25/05/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 2) && (salida == 1) && (residente == 2)){
    const precioAdt = 55200;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Ushuaia", "25/05/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 2) && (salida == 2) && (residente == 1)){
    const precioAdt = 58000;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Ushuaia", "12/06/2023", cantidadAdt, cantidadHab, costo );

} else if ((destino == 2) && (salida == 2) && (residente == 2)){
    const precioAdt = 66700;
    let costo = calculoFinal(precioAdt, cantidadAdt,cantidadHab);
    mostrarResumen("Ushuaia", "12/06/2023", cantidadAdt, cantidadHab, costo );

}

let fop = parseInt(prompt("Ingresa el medio de pago que deseas utilizar" +"\n"+ "1- Tarjeta de crédito (1 pago)" + "\n"+ "2- Transferencia/deposito bancario"+ "\n"+ "3- Verificar financiacion en cuotas"));

while ((fop != 1) && (fop != 2) && (fop != 3)){
  alert("La opción de salida no es válida")
  fop = parseInt(prompt("Por favor ingresa alguna de las siguientes opciones disponibles"+"\n"+ "1- Tarjeta de crédito (1 pago)" + "\n"+ "2- Transferencia/deposito bancario"+ "\n"+ "3- Verificar financiacion en cuotas"));
}

let importe;
const cuentaCorriente = ("Banco Supervielle" + "\n"+
                        "Cuenta Corriente: 125568846/12" + "\n");

if (fop == 1){

  let tc = parseInt(prompt("Ingresa el tipo de tarjeta a utilizar" +"\n"+ "1- Visa" + "\n"+ "2- Master"+ "\n"+ "3- American Express"))

} else if (fop == 2){
  alert("Los datos de nuestra cuenta son: " +"\n" +cuentaCorriente)

} else if (fop == 3) {

    importe = parseInt(prompt("Ingresa el importe que deseas financiar"));
    
  while (importe != "0") {

    let cuotas = Number(prompt("Podes optar por el Plan Ahora 6, 12 y 18 ¿En cuantas cuotas deseas financiar?"));
    function plan6() {
       let importeConInt = importe * 1.24
       let valorCuota = importeConInt / 6 
      alert("El importe con el interés en el Plan Ahora 6 es: $" + importeConInt + "\n" + "Quedaria un costo por cuota de: $" + valorCuota);
    }
    function plan12() {
        let importeConInt = importe * 1.33
        let valorCuota = importeConInt / 12 
       alert("El importe con el interés en el Plan Ahora 12 es: $" + importeConInt + "\n" + "Quedaria un costo por cuota de: $" + valorCuota);
    }
    function plan18() {
        let importeConInt = importe * 1.39
        let valorCuota = importeConInt / 18 
       alert("El importe con el interés en el Plan Ahora 12 es: $" + importeConInt + "\n" + "Quedaria un costo por cuota de: $" + valorCuota);
    }

    if (cuotas == 6) {
      plan6();
    } else if (cuotas == 12) {
      plan12();
    } else if (cuotas == 18) {
      plan18();
    } else {
      alert("La opción ingresada no es válida para el Plan Ahora");
    }

    alert("Ingresa un monto superior a $0 para volver calcular");
    importe = prompt("Introduce el importe o marca 0 para salir de la calculadora");
  }
  
} 

alert("Gracias por usar nuestro cotizador");
