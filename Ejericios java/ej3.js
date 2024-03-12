//Ejercicio 3 //

array = [2,4,6,8];
const sumArray = array.reduce( (accumulator, currentValue) => accumulator + currentValue );

console.log("La suma de los elementos del arreglo es: " + sumArray); 

const multArray = array.reduce( ( accumulator, currentValue ) =>   accumulator * currentValue );

console.log("La multiplicación de los elementos del arreglo es: "+ multArray);