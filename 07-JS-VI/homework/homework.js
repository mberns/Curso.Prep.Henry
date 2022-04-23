// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nombreNuevo;
  nombreNuevo = nombre[0].toUpperCase() + nombre.slice(1); // slice: el 1er limite lo incluye, el 2do no
  // por defecto el 2do limite lo toma hasta el ultimo caracter
  return nombreNuevo;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return (cb(n1,n2));
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  resultado = numeros.reduce (function (acumulador, elemento){ //es como un for, el ac empieza en 0 por defecto
    return (acumulador + elemento);
  }); //si el acumulador va inicializado en otro valor, se le pasa por aca: una ',' dsp de la llave y el valor
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento)){
    cb(elemento);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoArray = [];
  //array.forEach(function(elemento)){
  //  nuevoArray.push(cb(elemento));
  //}
 
  nuevoArray = array.map(funtion(elemento){
    return cb(elemento);
  })
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  nuevoArray = array.filter(funtion(elemento){
    return elemento[0] === 'a';
  })
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
