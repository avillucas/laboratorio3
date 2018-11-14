
/// <reference path="./clases/animal" />

let perro:Animal  = new Animal(4,"Bobby","Marron");
console.log(perro.cantidadPatas);
perro.cantidadPatas = 5;

$(document).ready(function(){
     $('body > h1').text('Cambiado');
});
 
 