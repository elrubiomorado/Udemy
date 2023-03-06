//App cotizar seguros

//En este proyecto haremos uso de los prototypes que sustituiran a las funciones como tal, ya que asi evitamos que alguien use una funcion con un elemento que no debe ser

//Constructores
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function (){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case "1":
            cantidad = base * 1.5;
            break;
        case "2":
            cantidad = base * 1.05;
            break;
        case "3":
            cantidad = base * 1.35;
            break;

        default:
            break;
    }
    //Leer el año
    //Por cada año que sea mas viejo, el costo baja 3%
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3)*cantidad)/100;

    /*
        Si el seguro es basico se multiplica por 30%

        si es completo se multiplica por 50%
    */
   if(this.tipo === "basico"){
    cantidad *= 1.30;
   }else{
    cantidad *= 1.50;
   }
   return cantidad;
}



//Este tendra los prototypos de la interfas
function UI(){

}

//Llena las opciones de los años
UI.prototype.llenarOpciones = function(){
    const max = new Date().getFullYear(),
        min = max-20;
    
    const selectedYear = document.querySelector("#year");

    for(let i = max; i>min;i--){
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        selectedYear.appendChild(option);
    }
}

//Muestra Alertas en pantalla
UI.prototype.mostrarMensaje = function (mensaje, tipo){
    const div = document.createElement("div");

    if(tipo === "error"){
        div.classList.add("mensaje","mt-10", "error");
    }else{
        div.classList.add("mensaje", "mt-10","correcto");
    }
    div.textContent = mensaje;
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.insertBefore(div, document.querySelector("#resultado"));

    setTimeout(()=>{
        div.remove();
    },3000);
}

UI.prototype.mostrarResultado = function(total, seguro){
    //Crear resultado
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch(marca){
        case "1":
            textoMarca = "Americano"        ;
            break;
        case "2":
            textoMarca = "Asiatico";
            break;
        case "3":
            textoMarca = "Europeo";
            break;
        default:
            break;
    }
    const div = document.createElement("div");
    div.classList.add("mt-10");

    div.innerHTML = `
        <p class="header">Tu resumen:</p>
        <p class="font-bold">Total: <span class="font-normal">${total}</span></p>
        <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p
        <p class="font-bold">Tipo: <span class="font-normal">${tipo}</span></p
        
    `;
    const resultadoDiv = document.querySelector("#resultado");
    

    //Mostramos el spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(()=>{
        spinner.style.display = "none";;//Se borra el spinner
        resultadoDiv.appendChild(div); // Se muestra el contenido
    }, 3000);
}



//Validaciones
const ui = new UI();


//Eventos
document.addEventListener("DOMContentLoaded", ()=>{
    ui.llenarOpciones();//LLena el select con años
});

eventListeners();
function eventListeners(){
    const formulario = document.querySelector("#cotizar-seguro");
    formulario.addEventListener("submit", cotizarSeguro);
}


//Funciones
function cotizarSeguro(e){
    e.preventDefault();
    
    //Leer marca seleccionada
    const marca = document.querySelector("#marca").value;
    //Leer año seleccionado
    const year = document.querySelector("#year").value;
    //Leer cobertura
    const tipo = document.querySelector("input [name='tipo']:checked");

    if(marca === "" || year ==="" || tipo === ""){
        ui.mostrarMensaje("No pasaste la validacion pana", "error");
        return;
    }
    ui.mostrarMensaje("todo bien", "correcto");

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector("resultado div");
    if(resultados != null){
        resultados.remove();
    }

    //Instanciamos el seguro
    const seguro = new Seguro(marca,year,tipo);

    //Utilizar le prototype que va a cotizar
    const total = seguro.cotizarSeguro();

    //Prototipe interfas
    ui.mostrarResultado(total, seguro);
}