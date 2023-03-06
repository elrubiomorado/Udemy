//Prototypes


//Objeto tipo clase
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}


//
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;

}

const CCJ = new Empresa("Elrubiomorado Enterprise", 4000, "Cursos");
console.log()