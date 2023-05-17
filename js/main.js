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