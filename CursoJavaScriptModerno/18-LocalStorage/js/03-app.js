//Eliminar y actualizar elementos en local storage

//eliminar
localStorage.removeItem(nombre);

//Actualizar - no existe como tal un metodo para actualizar, asi que simplemente debemos extraer los datos en una variable para actualizar esa variable y una vez actualizada volverla a sobreescribir en local storage
const nombresActualizado = JSON.parse(localStorage.getItem("nombres"));
nombresActualizado.push("Edgar");
localStorage.setItem("nombre", JSON.stringify(nombresActualizado));


//Eliminar todo el local storage
localStorage.clear();