//Libreria para trabajar con fechas
//Moment js - sirve para dar formato de fechas
const diaToday = new Date();
moment.locale("es");//Damos formato español a la fecha
console.log(moment().format("LLLLL",diaToday));