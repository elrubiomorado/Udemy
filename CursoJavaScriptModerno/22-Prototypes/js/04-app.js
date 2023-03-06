//Herencia de prototypes
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
const Lisa = new Cliente("Edgar",6000);

console.log(Lisa.tipoCliente());
console.log(Lisa.nombreClienteSaldo());
Lisa.retiraSaldo(1000);
console.log(Lisa.nombreClienteSaldo());

//Persona
function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre, saldo);//Heredamos el constructor de cliente
    this.telefono = telefono;
}

//Heredamos los prototypes
Persona.prototype = Object.create(Cliente.prototype);//Copiamos los prototypes de cliente
Persona.prototype.constructor = Cliente;

const Rose = new Persona("Rosé", 10000, 355123412);
console.log(Rose.tipoCliente());