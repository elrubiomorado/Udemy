//Campos del formulario
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//Ui
//Formulario
const formulario = document.querySelector("#nueva-cita");
//Contenedor citas
const contenedorCitas = document.querySelector("#citas");

//variables
let editando;

//Clases
//Gestionara las citas
class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    eliminarCita(id){
        //El filter nos traera todos los arreglos que sean diferentes al del id pasado y lo guardara en el arreglo de las citas
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}
//Gestionara todo lo que tenga que ver con agregar elementos reutilizables al html
class UI{
    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement("div");
        //Le agregamos clases del boostrap
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

        //Agregar clase en base al tipo de error
        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        }
        else{
            divMensaje.classList.add("alert-success");
        }

        //Añadimos el contenido del mensaje al div
        divMensaje.textContent = mensaje;

        //Agregamos al dom
        document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        //Quitamos el mensaje despues de 5s
        setTimeout( () =>{
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}){
         //Limpiamos el html para agregar una nueva cita
        this.limpiarHTML();

        citas.forEach(cita =>{
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement("div");
            divCita.classList.add("cita", "p-3");
            divCita.dataset.id = id;

            //scripting de los elementos de la cita

            //mascota
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title", "font-weight-bolder");
            mascotaParrafo.textContent = mascota;

            //propietario
            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML =
                `
                    <span class="font-weight-bolder">Propietario: </span> ${propietario}
                `;
            
            //telefono
            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML =
                `
                    <span class="font-weight-bolder">Telefono: </span> ${telefono}
                `;
            
            //fecha
            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML =
                `
                    <span class="font-weight-bolder">Fecha: </span> ${fecha}
                `;

            //hora
            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML =
                `
                    <span class="font-weight-bolder">Hora: </span> ${hora}
                `;            

            //sintomas
            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML =
                `
                    <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
                `;

            //Boton para eliminar cita
            const btnEliminar = document.createElement("button"); 
            btnEliminar.classList.add("btn", "btn-danger", "mr-2");
            btnEliminar.innerHTML = 
                `
                Eliminar 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                `;

            //evento eliminar cita
            btnEliminar.onclick = () => eliminarCita(id);

            //Boton para editar cita
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-info", "mr-2");
            btnEditar.innerHTML = 
                `
                    Editar 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                `;

            //Evento editar cita
            btnEditar.onclick = () => cargarEdicion(cita);

            

            //Agregamos los parrafos al div cita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
            

            //Agregar las citas al html
            contenedorCitas.appendChild(divCita);
        });
    }
    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

//Intancias de citas
const ui = new UI();

const administrarCitas = new Citas();

//Eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener("input", datosCita);
    propietarioInput.addEventListener("input", datosCita);
    telefonoInput.addEventListener("input", datosCita);
    fechaInput.addEventListener("input", datosCita);
    horaInput.addEventListener("input", datosCita);
    sintomasInput.addEventListener("input", datosCita);

    formulario.addEventListener("submit", nuevaCita);
}

//Objetos

//Objeto cita
const citaObj = {
    mascota:"",
    propietario:"",
    telefono:"",
    fecha:"",
    hora:"",
    sintomas:""
}

//Funciones de los inputs

//Agregar datos al objeto de citas
function datosCita(e){
    //Accedemos al objeto mediante el name del input, ya que se llaman igual
    citaObj[e.target.name] = e.target.value;
}

//Valida y agrega nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //Extraer informacion del objeto de cita
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //Validamos
    if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === ""){
        ui.imprimirAlerta("Todos los campos son obligatorios", "error");

        return; //Para que la funcion se detenga en caso de que algun campo este vacio
    }

    //Nos fijamos si esta en el modo edicion
    if(editando == true){
        //Mensaje de editado correctamente
        ui.imprimirAlerta("Editado correctamente");

        //pasamos el objeto de la cita a edicion, para guardar el contenido y no solo modificar el htlm
        administrarCitas.editarCita({...citaObj});

        //Regresamos el botton a su texto original
        formulario.querySelector("button[type='submit']").textContent = "Crear Cita";

        //salimos del modo edicion
        editando = false;

    }else{
        //Generar un id unico
        citaObj.id = Date.now();//Apartir de la fecha y segundo generamos un id unico

        //Creamos una nueva cita
        administrarCitas.agregarCita({...citaObj});

        //Mensaje de agregado correctamente
        ui.imprimirAlerta("Se agrego correctamente la cita");
    }

    
    
    //Reiniciamos el objeto
    reiniciarObjeto();

    //Reseteamos el formulario
    formulario.reset();

    //Mostramos el html de la cita
    ui.imprimirCitas(administrarCitas);
}

//Reiniciamos el objeto
function reiniciarObjeto(){
    citaObj.mascota = "";
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = "";
}

//Eliminar cita
function eliminarCita(id){
    //Eliminar cita
    administrarCitas.eliminarCita(id);

    //Mostrar mensaje
    ui.imprimirAlerta("La cita se elimino correctamente");

    //Refrescar citas
    ui.imprimirCitas(administrarCitas);
}

//cargar edicion
function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    //leer los datos
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenamos el objeto de las citas
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //Cambiar el texto del boton
    formulario.querySelector("button[type='submit']").textContent = "GUARDAR CAMBIOS";

    //Modificamos la variable editando
    editando = true;
}