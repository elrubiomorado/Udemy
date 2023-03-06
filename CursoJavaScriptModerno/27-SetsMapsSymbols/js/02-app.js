//Weak set, es un set pero debil, solo acepta objetos
const weakset = new weakSet();

const cliente = {
    nombre: "Edgar",
    saldo:100
}

//Esto no lo agarrara
const nombre = "Edgar";

weakset.add(cliente);


console.log(weakset);