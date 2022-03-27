// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers) --> como los casteo todos a int?
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0; i<array.length; i++){
    array[i]+=1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 let frase = palabras[0];
  for (let i=1; i<palabras.length; i++){
    frase += ' ' + palabras[i];
  }
  return frase
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let esta = false;
  for (let i=0; i<array.length; i++){
    if (array[i] === elemento){
      esta = true;
    }
  }
  return esta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i=0; i<numeros.length; i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0, prom = 0;
  for (let i=0; i<resultadosTest.length; i++){
    suma += resultadosTest[i];
  }
  prom = suma/(resultadosTest.length);
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = numeros[0][0];
  for (let i=0; i<numeros.length; i++){ //cual es la longitud que toma aca?
    for (let j=0; j<numeros.length; j++){ //la de las filas o las columnas?
      if (numeros[i][j]> mayor){
        mayor = numeros[i][j];
      }
    }
  }
  return mayor;
}



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicacion = 1;
  if (arguments.length == 0){
    multiplicacion = 0;
  }
  else if (arguments.length == 1){
    multiplicacion = arguments[0];
  }
  else if (arguments.length > 1){
    for (let i=0; i<arguments.length; i++){
      multiplicacion *= arguments[i];
    }
  }
  return multiplicacion;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador = 0;
  for (let i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
      contador ++;
    }
  }
  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  let mensaje;
  if (numeroDeDia == 2 || numeroDeDia == 3 || numeroDeDia == 4 || numeroDeDia == 5 || numeroDeDia == 6){
    mensaje = 'Es dia Laboral';
  }  
  else if (numeroDeDia == 1 || numeroDeDia == 7){
    mensaje = 'Es fin de semana';
  }
  return mensaje;
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let nString = n.toString();
  let empieza = false;
  if (nString[0] == 9){
    empieza = true;
  }
  return empieza;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let iguales = true;
  for (let i=1; i<arreglo.length; i++){
    if (arreglo[0]!=arreglo[i]){
      iguales = false;
    }
      
  }  
  return iguales;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  let dovolver;
  for (let i=0; i<array.length; i++){
    if (array[i]==='Enero'|| array[i]==='Marzo' || array[i]==='Noviembre'){
      nuevoArray.push(array[i]);
    }
  }
  devolver = 'No se encontraron los meses pedidos';
  let a = false, b = false, c = false;
  if (nuevoArray.length != 0){
    for (let i=0; i<array.length; i++){
      if (nuevoArray[i] === 'Enero'){
        a = true;
      }
      if (nuevoArray[i] === 'Marzo'){
        b = true;
      }
      if (nuevoArray[i] === 'Noviembre'){
        c = true;
      }
    
      if (a === true && b === true && c === true){
        devolver = nuevoArray;
      
    }
  }
  return devolver;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayores = [];
  for (let i=0; i<array.length; i++){
    if (array[i]>100){
      mayores.push (array[i]); //hay que chequear que el arreglo que recibo este entre 0 y 200?
    }
  }
  return mayores;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let numerosMas2 = [];
  let devolver;
  for (let i=0; i<10; i++){
    numero +=2;
    if (numero == i){
      break;
    }
    else
      numerosMas2[i]=numero;
  }
  if (numerosMas2.length<10){
    devolver = 'Se interrumpió la ejecución';
  }
  if (numerosMas2.length == 10){
    devolver = numerosMas2;
  }
  return devolver;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let numerosMas2 = [];
  for (let i=0; i<10; i++){
    if (i == 5){
      continue;
    }
    else {
      numero +=2;
      numerosMas2.push(numero);
    }
  }
  return numerosMas2;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
