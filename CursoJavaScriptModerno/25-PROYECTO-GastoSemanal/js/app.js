//App control de gastos

//Variables


//Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
    formulario.addEventListener("submit", agregarGasto);
}

//Clases
//Esta clase se encargara de obtener los objetos del presupues
class Presupuesto{

    constructor(presupuesto){

        this.presupuesto = Number(presupuesto);
        
        this.restante = Number(presupuesto);

        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto)=> Number(total)+ Number(gasto.cantidad), 0);
        this.restante = this.presupuesto - gastado;
    }

}

//Esta clase se encargara de crear el html necesario
class UI{
    //Metodos
    //Insertar el presupuesto
    insertarPresupuesto(cantidad){
        //convertimos las propiedades del objeto en variables separadas
        const {presupuesto, restante} = cantidad;

        //Agregamos el presupuesto a total
        document.querySelector("#total").textContent = presupuesto;

        //Agregamos el presupuesto a total
        document.querySelector("#restante").textContent = restante;
    }

    //Imprimir alerta
    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert");

        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }else{
            divMensaje.classList.add("alert-success")
        }
        
        //Mensaje alerta
        divMensaje.textContent = mensaje;

        //Insertamos en el html
        document.querySelector(".primario").insertBefore(divMensaje, formulario);

        //quitamos el mensaje
        setTimeout(()=>{
            divMensaje.remove();
        },3000);
        }
        agregarGastoListado(gastos) {
            this.limpiarHtml();

            //Iterar sobre los gastos
            gastos.forEach( gasto => {
                const {cantidad, nombre, id} = gasto;

                //Crear un li
                const nuevoGasto = document.createElement("li");
                nuevoGasto.className = "list-group-item justify-content-between align-items-center";
                nuevoGasto.dataset.id = id;
                //Agregar el html del gasto
                nuevoGasto.innerHTML = 
                `
                ${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>
                `;
                //Boton para borrar el gasto
                const btnBorrar = document.createElement("button");
                btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
                btnBorrar.innerHTML = "Borrar &times"
                nuevoGasto.appendChild(btnBorrar);
                //Agregamos al html
                gastoListado.appendChild(nuevoGasto);
                
            });
        }
        limpiarHtml(){
            while(gastoListado.firstChild){
                gastoListado.removeChild(gastoListado.firstChild);
            }
        }
        actualizarRestante(restante){
            //Agregamos el presupuesto a total
            document.querySelector("#restante").textContent = restante;
        }
        comprobarPresupuesto(presupuestoObj){
            const {presupuesto, restante} = presupuestoObj;

            const restanteDiv = document.querySelector(".restante");

            //Comprobar 25%
            if((presupuesto/4) > restante){
                restanteDiv.classList.remove("alert-success", "alert-warning");
                restanteDiv.classList.add("alert-danger");
            }else if( (presupuesto / 2) > restante){
                restanteDiv.classList.remove("alert-success");
                restanteDiv.classList.add("alert-warning");
            }

            //Si el total es menor a 0
            if(restante <= 0){
                ui.imprimirAlerta("El presupuesto se ha agotado", "error");
                formulario.querySelector("button[type='submit']").disabled = true;
            }
        }




}

//Instanciaciones
const ui = new UI();
let presupuesto;

//Funciones

//Agregar presupuesto
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt("¿Cual es tu presupuesto?");

    //Validacion de lo agregado por el usuario
    if(presupuestoUsuario === "" || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();//Recarga la pagina
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

}

//Agregar gasto
function agregarGasto(e){
    e.preventDefault();

    //Leer datos del form
    const nombre = document.querySelector("#gasto").value;
    const cantidad = document.querySelector("#cantidad").value;

    //Validar
    if(nombre === "" || cantidad === ""){
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    }else if(cantidad <= 0 || isNaN(cantidad) ){
        ui.imprimirAlerta("Agrega un gasto valido", "error");
        return;
    }

    //Generar un objeto con el gasto
    const gasto = {//Object Literal
        nombre,
        cantidad, 
        id:Date.now()
    }

    //Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta("Gasto Agregado correctamente");


    //Imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);

    //Actualizar restante
    ui.actualizarRestante(restante);


    //Comprobamos el presupuesto
    ui.comprobarPresupuesto(presupuesto);

    //Reseteamo el formulario
    formulario.reset();
    
}