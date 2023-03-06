//Generadores

//Crear generadores
function *crearGenerador(){
    yield 1;
    yield "Edgar";
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

//Es como un iterador a pasos, en el cual tenemos que hacer cada iteracion manualmente
console.log(iterador);
console.log(iterador.next().value);//Iteramos al siguiente yield
console.log(iterador.next().value);//Iteramos al siguiente yield
console.log(iterador.next().done);//Iteramos al siguiente yield

function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}
const carrito = ["Producto 1", "Producto 2", "Producto 3"];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.done);

