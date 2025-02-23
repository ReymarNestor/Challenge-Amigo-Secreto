// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Declaración de variable que guardará el nombre de los amigos
let listaAmigos = [];

//Función que agrega amigos a la lista

function agregarAmigo () {
    let nombreAgregado = document.getElementById('amigo').value.trim();
    if (nombreAgregado.length === 0) {
        alert('Por favor ingrese un nombre válido');
    } else {
        listaAmigos.push(nombreAgregado);
    }
    limpiarInput();
    mostrarLista();
    console.log(listaAmigos);
}

//Función que deja vacio el input despues de agregar un nombre válido
function limpiarInput () {
    document.querySelector('#amigo').value = '';
}

//Función que muestra en pantalla la lista de amigos agregados

function mostrarLista () {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = generarLista();
}

//Función que generara la lista
function generarLista() {
    let elementoLi= `<li>${listaAmigos[0]}</li>`;
    for (let i = 1; i < listaAmigos.length; i++) {
        elementoLi += `<li>${listaAmigos[i]}</li>`; 
    }
    return elementoLi
}

//Función que sortea un numero para elegir un Amigo
function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let nombreSorteado = document.getElementById('resultado');
    console.log(numeroAleatorio);
    nombreSorteado.innerHTML = listaAmigos[numeroAleatorio];
}
