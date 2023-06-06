class Paquetes {
    constructor(destino,dias,salida,precio){
        this.destino = destino;
        this.dias = dias;
        this.salida = salida;
        this.precio = precio;
        
    } 
    verDetalle(){
        return `Destino: ${this.destino} <br>
        Duración: ${this.dias} dias <br>
        Salidas: ${this.salida} <br>
        Precio por persona: $${this.precio}`;
    }
   
    
}

let sanRafael = new Paquetes("San Rafael",5,"Junio a Julio", 85000)
let merlo = new Paquetes("Merlo",5,"Junio a Julio", 35000)
let esteros = new Paquetes("Esteros del Ibera",4,"Mayo a Julio", 45000)
let ushuaia = new Paquetes("Ushuaia",8,"Julio", 125000)
let iguazu = new Paquetes("Iguazu",4,"Julio", 75000)
let salta = new Paquetes("Salta",4,"Agosto a Septiembre", 65000);


sanRafael.verDetalle();
