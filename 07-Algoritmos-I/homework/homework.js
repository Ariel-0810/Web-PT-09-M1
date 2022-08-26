'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let result = [1];
  let val = 2;
  // mientras el num sea mayor a 1
  while(num > 1){
    // se puede dividir entre '2' o el val
    if(num % val === 0){
      // guardo en array
      result.push(val);
      //divido num
      num = num/val;
    } else {
      val++;
    }
  }
  return result;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while(swap) {
    swap = false;
    for (let i = 0; i < array.length; i++) {
      if(array[i] > array[i+1]){
        let temp = array[i]
        array[i] = array[i+1];
        array[i+1] = temp;
        swap = true;
      }    
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    //guarda posicion anterior
    let x = i - 1;
    // guarda valor actual
    let temp = array[i];
    while (x >= 0 && temp < array[x]) { // el valor actual es menor al anterior?
      array[x+1] =array[x];
      x--;
    }
    array[x+1] = temp;   
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  // identificar el num mas chico
  for (let i = 0; i < array.length; i++) {
    // asumo que el num mas chico estan en el i
    let min = i;
    // recorre el array buscando el numero mas chico
    for (let x = i+1; x < array.length; x++) {
      if(array[min] > array[x]) min = x; // actualizamos el index del numero mas chico
    }
    // intercambiamos valores entre el numero mas chico y el 'primer' valor
    if(i !== min){
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
