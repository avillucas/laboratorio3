var numeros = [1,2,6,4,5,3];
//conseguir un array con los cuadrados de los numeros 
var cuadrados = numeros.map( nro=> nro*nro);
console.log(cuadrados);
//tomar todos los valores menores a 4
var menoresA4 = numeros.filter(elemento => elemento < 4);
console.info(menoresA4);
//mostrar la sumatoria de todos los numeros
var suma = numeros.reduce((total,num) => total + num,0);
console.info(suma);
//
