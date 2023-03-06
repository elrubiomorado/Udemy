//Programacion orientada a objetos

//Clases

//class declaration
class Cliente{
    //Constructor
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Metodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    //Propiedades staticas
    static bienvenida(){//Estas funciones son de la clase, no funcionan con los objetos instaciandas con ella, solamente con la clase pura
        return `Bienvenido al cajaero`;
    }
}

//Intanciamos un objeto con la clase
const edgar = new Cliente("Edgar", 234332);
console.log(edgar.mostrarInformacion());
console.log(Cliente.bienvenida());//Static con la clase




//Class expression
const Cliente2 = class{
    //Constructor
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    //Metodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
//Intanciamos un objeto con la clase
const rose = new Cliente2("Rose",999999999999999999);