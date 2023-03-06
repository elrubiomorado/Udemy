//Symbols, ningun simbol es igual, se utilizan para guardar propiedades de objetos que no queremos que sean iteradas
const sym = Symbol("1");
const sym2 = Symbol("1");
//Ni asi son iguales

if(sym === sym2){//Nunca entrara aqui, ya que ningun symbol es igual
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Edgar";
persona[apellido] = "Avila";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);

//las propiedades que utilizan symbol no son iterables
for(let i in persona){
    console.log(i);
}

// definir descripcion a symbol
const nombreCliente = Symbol("Nombre del cliente");//descripcion
cliente[nombreCliente] = "Edgar";

console.log(cliente);