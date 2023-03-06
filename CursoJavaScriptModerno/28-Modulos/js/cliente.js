//Modules

//Exportar variables
export const nombreCliente = "Edgar";
export const ahorro = 4000;

//Exportamos funcion
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} \n Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        console.log("Tiene saldo");
    }else{
        console.log("No tiene saldo");
    }
}

//Exportamos clase
export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} \n Ahorro: ${this.ahorro}`;
    }
}

//Export default, solo puede haber un export default
export default function nuevaFuncion(){
    console.log("Este es un export default");
}