//Objeto tipo clase
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//Le agregamos un prototype que viene siendo como un metodo del objeto
Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 1000){
        tipo = "Gold";
    }else if(this.saldo > 5000){
        tipo: "platinum";
    }else{
        tipo: "Normal";
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function (){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${ this.tipoCliente() }`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

//Instanciamos un objeto
const Edgar = new Cliente("Edgar",6000);

console.log(Edgar.tipoCliente());
console.log(Edgar.nombreClienteSaldo());
Edgar.retiraSaldo(1000);
console.log(Edgar.nombreClienteSaldo());