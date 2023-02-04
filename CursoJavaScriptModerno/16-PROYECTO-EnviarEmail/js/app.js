//Este script se ejecutara cuando el dom este cargado
document.addEventListener("DOMContentLoaded", function(){

    //Objeto para verificar si los campos estan correctamente llenados
    const email ={
        email:"",
        asunto:"",
        mensaje:""
    }

    //Seleccionamos los elementos de la interfas
    const inputEmail = document.querySelector("#email");
    const inputEmailExtra = document.querySelector("#emailExtra");
    const inputAsunto = document.querySelector("#asunto");
    const inputMensaje = document.querySelector("#mensaje");
    const formulario = document.querySelector("#formulario");
    const btnSubmit = document.querySelector("#formulario button[type='submit']");
    const btnReset = document.querySelector("#formulario button[type='reset']");
    const spinner = document.querySelector("#spinner");
    //Eventos inputs
    //Podemos hacer uso de dos eventos, el blur y el input, ademas de otros cuantos pero estos son los mas ideales, el blur sirve para cuando salga del campo y el input es en tiempo real
    inputEmail.addEventListener("input", validar); //Mandamos a llamar la funcion de validar
    inputEmailExtra.addEventListener("input", validar);
    inputAsunto.addEventListener("input", validar);
    inputMensaje.addEventListener("input", validar);
    formulario.addEventListener("submit",enviarEmail);
    btnReset.addEventListener("click", function(e){
        e.preventDefault();//Evitamos que haga lo que hace por default ese boton

        //Reiniciamos el objeto email que guarda los valores
        resetForm();
    });

    //Funciones

    //validar
    function validar(e){
        //Validamos si los campos no estan vacios
        if(e.target.value.trim() === "" && e.target.id !== "emailExtra"){//Validamos que no esten vacios los espacios, con el trim eliminamos los espacios en blanco vacios al inicio y al final
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);//Parent element sirve para seleccionar el elemento padre del elemento, asi que llamaremos al div que contiene el input y al final de este se agregara la alerta
            email[e.target.id] = "";//Reiniciamos el objeto si es que borra el contenido, para que el boton se vuelva a desabilitar
            comprobarEmail();
            return; //Los return sirven para si entra aqui se termine la ejecucion del programa, con esto podemos evitar hacer uso de else, ya que de aqui no pasara en dado caso de que entre a este if
        }
        
        //Validamos el email
        if(e.target.id === "email" && !validarEmail(e.target.value)){
            mostrarAlerta("El email no es valido", e.target.parentElement);
            email[e.target.id] = "";//Reiniciamos el objeto si es que borra el contenido, para que el boton se vuelva a desabilitar
            comprobarEmail();
            return;
        }

        //Validamos email extra
        if(e.target.id === "emailExtra" && !validarEmail(e.target.value)){
            mostrarAlerta("El email no es valido", e.target.parentElement);
            email[e.target.id] = "";//Reiniciamos el objeto si es que borra el contenido, para que el boton se vuelva a desabilitar
            comprobarEmail();
            return;
        }

        //limpiamos las alertas si es que hay
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores al objeto
        email[e.target.id] = e.target.value.trim().toLowerCase();
        
        //Comprobar el email
        comprobarEmail();
    }

    //Agregar Alertas
    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya existe esta alerta
        limpiarAlerta(referencia);
        //Generamos una alerta en html
        const error = document.createElement("P");
        //Agregamos contenido al elemento html
        error.textContent = mensaje;
        //Le agregamos una clase al nuevo elemento
        error.classList.add("bg-red-600","text-white","p-2","text-center", "alerta");//Son clases de tailwild css, excepto por la alerta, que sirve para comprobar si ya existe una
        //Inyectamos el error al formulario
        referencia.appendChild(error);//agrega un elemento hasta el final de los hijos del elemento donde se agregue
    }

    //Limpiar alertas
    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector(".alerta"); //En lugar del document, utilizamos la referencia para que solo busque en el div de la referencia
        if(alerta){
            alerta.remove();
        }
    }

    //Validar email
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);//Probamos la expresion regular con el metodo test, verificara si el email contiene el patron de usuario@dominio.com y regresara un resultado
        return resultado;
    }

    //Comprobamos si todos los elementos del form de email se encuentran correctos
    function comprobarEmail(){
        if(Object.values(email).includes("")){
            btnSubmit.classList.add("opacity-50");
            btnSubmit.disabled = true;
            return
        }

        btnSubmit.classList.remove("opacity-50");
        btnSubmit.disabled = false;
        
    }

    //Enviar email para habilitar el spinner y enviar el formulario
    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(()=>{
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");
            //Reiniciamos el objeto email que guarda los valores
            resetForm();
            //Crear una alerta
            const alertaExito = document.createElement("P");
            alertaExito.classList.add("bg-green-500","text-white","p-2","text-center","rounded-lg","mt-10","font-bold","text-sm","uppercase");
            alertaExito.textContent = "Mensaje enviado correctamente";
            formulario.appendChild(alertaExito);
            setTimeout(()=>{
                alertaExito.remove();
            },3000)
        }, 3000);
        
    }

    //Reset
    function resetForm(){
        //Reiniciamos el objeto email que guarda los valores
        email.email = "";
        email.asunto = "";
        email.mensaje = "";

        formulario.reset();
        comprobarEmail();
    }

});