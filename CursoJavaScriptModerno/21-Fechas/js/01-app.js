//Fechas
const diaHoy = new Date();

let valor;

valor = diaHoy;

console.log(valor);


//Poner una fecha
const fecha = new Date("August 10 2001");

console.log(fecha);

//Metodos fechas
console.log(diaHoy.getFullYear()); //Obtenemos solo el año
console.log(diaHoy.getMonth());//obtenemos el mes
console.log(diaHoy.getMinutes());//Minutos 
console.log(diaHoy.getHours());//Horas
console.log(diaHoy.getTime());//Segundos apartir de la fecha de 1970

