//Importamos
import { Cliente } from "./cliente.js";

//Heredamos de una clase importada
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }
}
