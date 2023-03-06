//WeakMap

const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto, "Monitor");
console.log(weakmap.has(producto));//Comprobamos si existe el producto
console.log(weakmap.get(producto));//Obtenemos el producto, pero no se puede, ya que se hace como privados los elementos

