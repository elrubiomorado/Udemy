//Maps - llave/valor - lista de llave valor
const cliente = new Map();

//Agregar elemento
cliente.set("nombre", "Edgar");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

console.log(cliente);

//Ver cuantos elementos tiene
console.log(cliente.size);

//comprobar si contiene algo
console.log(cliente.has("nombre"));

//Obtener un valor de una llave
console.log(cliente.get("nombre"));


//eliminar valor
cliente.delete("saldo");

console.log(cliente);

//Eliminar todo de un map
cliente.clear();

//Pasar desde un inicio los valores
const paciente = new Map([["clave", "valor"], ["otraClave", "OtroValor"]]);
console.log(paciente);

//Reescribir un valor con la llave
paciente.set("clave", "CLAVEPRIMARIA");

console.log(paciente);

//Iterar
paciente.forEach(datos => {
    console.log(datos);
})