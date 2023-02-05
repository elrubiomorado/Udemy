//Variables dom
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

//variables
let tweets = [];//Guardara los tweets


//Event listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener("submit", agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener("DOMContentLoaded", () =>{
        //Obtenemos los datos del local storage
        tweets = JSON.parse(localStorage.getItem("tweets")) || [];//Es un or, si marca null de que no existe el local storage con esa key, le asignara un [] vacio

        //LLamamos a la funcion de crear html para agregarlo
        crearHTML();
    });
}

//Funciones

//Agregamos y validamos el tweet
function agregarTweet(e){
    //Prevenimos el comportamiento default
    e.preventDefault();
    
    //Text area tweet
    const tweet = document.querySelector("#tweet").value;

    //validacion campos vacios
    if(tweet === ""){
        mensajeError("El mensaje no puede ir vacio");
        return; //Detiene la funcion
    }
    
    //Objeto que agregaremos al tweet
    const tweetObj = {
        id:Date.now(),//Tiempo que ha pasado desde que se publico el tweet, nos sirve de id
        tweet //Cuando la key y la variable que le dara valor se llaman igual, podemos simplemente dejar la variable como key y lo tomara bien, ejm: tweet:tweet
    };

    //Añadimos al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //LLamamos a la funcion de crear html para agregarlo
    crearHTML();

    //Reseteamos el text area despues de haber agregado el elemento a la lista
    formulario.reset();
}

//Mostrar error
function mensajeError(error){
    const mensajeError = document.createElement("P");
    mensajeError.textContent = error;
    mensajeError.classList.add("error");

    //Insertamos el error en el html
    const contenido = document.querySelector("#contenido");
    contenido.appendChild(mensajeError);

    //Eliminamos la alerta despues de 3s
    setTimeout(()=>{
        mensajeError.remove();
    }, 3000);
}

//Crear el html
function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //Agregamos un boton para eliminar el tweet
            const btnEliminar = document.createElement("a");
            btnEliminar.classList.add("borrar-tweet");
            btnEliminar.innerText = "X";

            //Añadir la funcion eliminar
            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id);
            }

            //Crear el html
            const li = document.createElement("LI");

            //Añadimos el texto
            li.innerText = tweet.tweet;
            
            //Asignar el boton
            li.appendChild(btnEliminar);

            //añadimos los tweets al htlm
            listaTweets.appendChild(li);
        });
    }
    //Agregamos los elementos al local storage
    sincronizarStorage();
}

//Guardamos los elementos en el local storage
function sincronizarStorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Limpiar html
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);//Eliminar todo los hijos del elemento
    }
}

//Guardamos los elementos en el local storage
function sincronizarStorage(){
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Eliminar tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}