//Iteradores
const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123,234,1234,532]);
const datos = new Map();

datos.set("nombre", "Edgar");
datos.set("profecion", "Desarrollador Web");

//Iterador entries
//Este iterador itera sobre un array, set, etc y devuelve la llave y el valor
for(let entry of ciudades.entries()){
    console.log(entry);
}
for(let entry of ordenes.entries()){
    console.log(entry);
}
for(let entry of datos.entries()){
    console.log(entry);
}

//values iterator
//Es un for de toda la vida pero mas practico, ya que devuelve en cada iteracion un valor del array, set, map , etc
for (let value of ciudades.values()){
    console.log(value);
}
for (let value of ordenes.values()){
    console.log(value);
}
for (let value of datos.values()){
    console.log(value);
}

//Keys iterator
//Es un for que devuelve las keys y no el valor
for( let key of ciudades.keys()){
    console.log(key);
}
for( let key of ordenes.keys()){
    console.log(key);
}
for( let key of datos.keys()){
    console.log(key);
}
//Default iterator
for(let ciudad of ciudades){
    console.log(ciudad);
}
for(let orden of ordenes){
    console.log(orden);
}

for(let dato of datos){
    console.log(dato);
}
