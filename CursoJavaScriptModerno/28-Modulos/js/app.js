//Importamos al archivo, deben de ir al inicio de preferencia
import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from "./cliente.js"; //Export de variables
import {Empresa} from "./empresa.js";
//Importacion del export default, sin estar dentro de las llaves
import nuevaFuncion from "./cliente.js";

console.log(nombreCliente); //hacemos uso de la variable importada 
console.log(mostrarInformacion(nombreCliente, ahorro));//Hacemos uso de la funcion
tieneSaldo(ahorro);

const cliente1 = new Cliente(nombreCliente, ahorro);
console.log(cliente1); 
console.log(cliente1.mostrarInformacion());

//Importamos la clase heredada

const empresa = new Empresa("LosRubiosMoradosFC", 100, "Desarrollo de Inteligencia Artificial");
console.log(empresa);

//Usamos la funcion default
nuevaFuncion();