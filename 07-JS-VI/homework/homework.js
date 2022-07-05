// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
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
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada //MUY IMPORTANTE ESTE FOR (VAR NUMERO OF NUMEROS)// *********
  //Tu código:
  var suma = 0;
  for (var numero of numeros){
    suma = suma + numero;
  }
  return cb(suma);
}

//var sumaTotal = numeros.reduce(funtion(acumulador, valorActual){
//  return acummulador + valorActual;
//})
//return cb(sumaTotal);  DE ESTA MANERA USO EL REDUCE;

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (let i = 0; i < array.length; i++){
    cb(array[i]);
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var array1 = [];
  for (let i = 0; i < array.length; i++){
    array1.push(cb(array[i]));
  }
  return array1;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código: //MUY IMPORTANTE ESTE KEY PORQUE BUSCA CADA ELEMENTO DEL ARRAY Y DE AHI PUEDO FILTRAR SI ES
  //NUMERO O STRING
  var array1 = []
  for (var key of array){
    if(key[0] === "a"){
      array1.push(key)
    }
  }
  return array1;
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
