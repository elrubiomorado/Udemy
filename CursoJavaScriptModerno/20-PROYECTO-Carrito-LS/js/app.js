//Varibles
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener("click",agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener("click", () =>{
        articulosCarrito = [];//Reseteamos el array del carrito
        limpiarHTML(); //Mandamos a llamar la funcion que elimina los articulos html del carrito
    });

    //Muestra los cursos de localstorage
    document.addEventListener("DOMContentLoaded", () =>{
        articulosCarrito = JSON.parse(localStorage.getItem("carrito"))||[];
        carritoHTML();
    });
}

//Funciones

//Eliminar curso
function eliminarCurso(e){
    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        //Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);//Itera el array y obtiene los elementos que sean diferentes al curso id

        //Para volver a pintar el html del carrito pero ahora sin los cursos eliminados
        carritoHTML();
    }
}


//Agrega curso
function agregarCurso(e){
    e.preventDefault();
    if( e.target.classList.contains("agregar-carrito")){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

//Lee el contenido del html al que le dimos click y extre la informacion
function leerDatosCurso(curso){
    //Creamos un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }
    
    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad += 1;
                return curso; //Retorna el objeto actualizado
            }else{
                return curso; //Retorna los objetos que no son duplicados
            }
        }); 
        articulosCarrito = [...cursos];
    }else{
         //Agregar elementos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

   
    
    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML(){
    //Limpiar el carrito
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{

        //Desectructuramos el objeto para no tener la necesidad de llamarlo, es como si crearamos variables con cada propiedad del objeto
        const {imagen, titulo, precio, id, cantidad} = curso;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
    //Agregar carrito de compra al storage
    sincronizarStorage();
}
function sincronizarStorage(){
    localStorage.setItem("carrito",JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = "";

    //forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}