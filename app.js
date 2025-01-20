// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let listaNombres = document.getElementById("listaAmigos");
let seleccionado = document.getElementById("resultado");
let sorteoRealizado = false;
let reinicioRealizado = false;

function agregarAmigo (){
    let agregarNombre = document.getElementById("amigo").value;
    if (agregarNombre){
        //Si el sorteo ya fue realizado una vez se reinicia el juego al ingresar un nombre nuevamente
        if (sorteoRealizado && !reinicioRealizado){
            reiniciar();
        }
        if (!amigos.includes(agregarNombre)){
        amigos.push(agregarNombre);
        limpiarCaja();
        mostrarLista();
        console.log(amigos);
    } else {
        alert("Este nombre ya esta en la lista.");
    }
    }else{
        //Verificar que no se dupliquen los nombres
        alert("Por favor, inserte un nombre")
    }
    }

//Limpiar la caja
function limpiarCaja(){
   let valorCaja = document.querySelector("#amigo");
    valorCaja.value = '';
}

function mostrarLista() {
// Limpiar el contenido actual de listaNombres
    listaNombres.innerHTML = '';

// Usar un bucle for para recorrer el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        listaNombres.appendChild(li); 
    }
}

//Sortear un nombre 
function sortearAmigo(){
    if (sorteoRealizado) {
        alert("El sorteo ya fue realizado, ingrese un nombre.");
        return;  // Detener la ejecución de la función
    }
    if (amigos.length === 0){
        alert("Por favor, inserte un nombre.");
        return
    } 
//Genera un indice aleatorio
let indiceRandom = Math.floor(Math.random() * amigos.length);

//Seleccionar nombre
let nombreSorteado = amigos[indiceRandom];

//Mostrar el seleccionado
seleccionado.textContent = "El amigo secreto sorteado es: "+ nombreSorteado;

//limpiar lista
limpiarLista();
//indicar que ya se realizo el sorteo
sorteoRealizado = true;
}

//limpiar lista de nombres
function limpiarLista(){
  listaNombres.innerHTML = '';
}

//Limpiar Sorteado
function limpiarSorteado (){
   seleccionado.innerHTML = '';
}

//Reiniciar el juego.
function reiniciar(){
//Limpiar caja
limpiarCaja();
//Limpiar lista
limpiarLista();
//Limpiar Sorteado
limpiarSorteado();
//Limpiar array
amigos = [];
console.log(amigos);
reinicioRealizado = false; 
sorteoRealizado = false; 

}
