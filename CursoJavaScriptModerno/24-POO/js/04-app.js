//Programacion orientada a objetos

//Clases

//class declaration
class Cliente{

    //Propiedades privadas para solo poder acceder a ellas desde la clase
    #nombre;
    #saldo;


    //Constructor
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.#saldo = saldo;
    }

    //Metodos
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.#saldo}`;
    }

    //Propiedades staticas
    static bienvenida(){//Estas funciones son de la clase, no funcionan con los objetos instaciandas con ella, solamente con la clase pura
        return `Bienvenido al cajaero`;
    }
}

//Herencia - sirve para heredar atributos y metodos
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);//Iniciamlizamos las propiedades del objeto padre
        this.telefono = telefono;
        this.categoria = categoria;
    }
    //Reinscribimos un metodo en el hijo
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.#saldo}, telefono: ${this.telefono}, categoria: ${this.categoria}`;
    }
}


//Intanciamos un objeto con la clase

//Objeto Cliente
const edgar = new Cliente("Edgar", 234332);
// console.log(edgar.mostrarInformacion());
// console.log(Cliente.bienvenida());//Static con la clase

//Esto no se puede porque declaramos las propiedades como privadas, solo podemos acceder a ellas desde la clase
// edgar.nombre = "Edgar Avila";
// console.log(edgar.nombre);


//Objeto Empresa
// const empresa1 = new Empresa("elrubiomoradoFc", 134123412, 3751226303, "finanzas");
// console.log(empresa1.mostrarInformacion());
