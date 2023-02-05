//Obtener datos de local storage
const nombre = localStorage.getItem("nombre");
console.log(nombre);

//Obtener json de local storage, pasarlo de string a otra vez json
const nombress = localStorage.getItem("nombres");
const nombresJson = JSON.parse(nombress);
console.log(nombresJson);

//Si no existe el elemeto simplemente retorna null
const noExiste = localStorage.getItem("edad");
console.log(noExiste);
