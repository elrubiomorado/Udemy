//Variables dom
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor resultados
const resultado = document.querySelector("#resultado");

//variables de uso
const max = new Date().getFullYear();
const min = max - 10;




//Objetos
const datosBusqueda = {
    marca:"",
    year:"",
    minimo:"",
    maximo:"",
    puertas:"",
    transmision:"",
    color:""
}



//Eventos
document.addEventListener("DOMContentLoaded",()=>{
    mostrarAutos(autos);//Muestra los automobiles al cargar


    //Llena las opciones de años
    llenarSelect();
});

//event listener para los select
marca.addEventListener("change",e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener("change",e =>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener("change",e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change",e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener("change",e =>{
    datosBusqueda.puertas =  parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener("change",e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change",e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});




//Funciones
//Crear elementos html con la info de los autos
function mostrarAutos(autos){
    limpiarHTML();
    //Iteramos en el array de objetos de autos
    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        //Creamos un parrafo para cada auto
        const autoHtml = document.createElement("p");
        autoHtml.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - ${transmision } - Precio: $${precio} - Color ${color}
        `; 
        //Insertamos el html
        resultado.appendChild(autoHtml);
    });
}

//Elimina el html previo
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect(){
    for(let i = max; i > min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTrasmision).filter(filtrarColor);
    

    if(resultado.length){
        mostrarAutos(resultado);
        return
    }
    noResultado();
}

//Filtros
function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}
function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}
function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}
function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}
function filtrarTrasmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}

//Mensaje de no resultado
function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No hay resultados, intenta con otros filtros";
    resultado.appendChild(noResultado);
}