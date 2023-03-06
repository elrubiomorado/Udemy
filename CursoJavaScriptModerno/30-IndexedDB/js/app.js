let DB;

//Evento para cuando se cargue el Dom
document.addEventListener("DOMContentLoaded", ()=>{
    crmDB();

    setTimeout(()=>{
        crearCliente();
    }, 5000);
});

//Funcion crear base de datos
function crmDB(){
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open("crm", 1);

    //Si hay error
    crmDB.onerror = function(){
        console.log("hubo un error al crear base de datos");
    }
    //Si se creo bien
    crmDB.onsuccess = function(){
        console.log("Base de datos creada correctamente");
        DB = crmDB.result;
    }
    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore("crm",{
            keyPath: "crm",
            autoIncrement: true
        });
        //Definir las columnas
        objectStore.createIndex("nombre", "nombre", {unique:false});
        objectStore.createIndex("email", "email", {unique:true});
        objectStore.createIndex("telefono", "telefono", {unique:false});


        console.log("columnas creadas");
    }


}

//Crear cliente
function crearCliente(){
    let transaction = DB.transaction(["crm"], "readwrite");
    transaction.oncomplete = function(){
        console.log("Transaction completada");
    }
    transaction.onerror = function(){
        console.log("Hubo un error en la transaction");
    }
    const objectStore = transaction.objectStore("crm");

    const nuevoCliente = {
        telefono: 123412341,
        nombre: "Edgar",
        email: "correoa@correo.com"
    }

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);

}