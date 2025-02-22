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
    console.log(listaAmigos);
}

//Función que deja vacio el input despues de agregar un nombre válido
function limpiarInput () {
    document.querySelector('#amigo').value = '';
}