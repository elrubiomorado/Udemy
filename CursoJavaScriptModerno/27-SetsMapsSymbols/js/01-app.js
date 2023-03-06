//Crear un set
const carrito = new Set();
//El set es un tipo array que no guarda elementos repetidos

//Agregamos valores al set
carrito.add("Camisa");

//Los elementos duplicados no guarda elementos repetidos
carrito.add("Camisa");
//Asi que no agregara esto

carrito.add("guitarra");
//Eliminamos un elemento
carrito.delete("guitarra");

//Iteramos todos los elementos
carrito.forEach((producto, index, pertenece) =>{
    console.log(producto);
    console.log(index);
    console.log(pertenece);
});

//Eliminamos todos los elementos
carrito.clear();


//Ver cantidad de elementos en el set
console.log(carrito.size);

//Imprimimos
console.log(carrito);

//Del siguiente arreglo eliminar los duplicados

const numeros = [1,1,1,2,3,4,5,5,5,6,6,6,6,6,6,6,7,8,9,9,9,9,9,645,46,4,467,4,67];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);

