//Local storage - persiste en la pc
localStorage.setItem("nombre", "Edgar");//Clave - valor

//Sesion storage - persiste solo en la sesion, despues se eliminan
sessionStorage.setItem("nombre", "Jisoo");//Clave valor

//En estos solo se guardan strings


const producto = {
    nombre:"Monitor 24 pulgadas",
    precio:300
};

const productoString = JSON.stringify(producto);//Convierte el objeto en formato json string
console.log(typeof(productoString));

//Ahora asi ya podemos meterlo al local storage
localStorage.setItem("Producto", productoString);

//Tambien podemos convertir arreglos a formato json string
const nombres = ["Jisoo", "Rosé", "Jennie", "Lisa"];
const nombresStrings = JSON.stringify(nombres);
localStorage.setItem("nombres", nombresStrings);