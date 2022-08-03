'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  var decimal = 0,
  posicion = 0;

  for (let i = num.length - 1; i >= 0; i--){
    decimal = decimal + Math.pow(2,posicion) * num[i];
    posicion++;
  }
  return decimal; 
}

function DecimalABinario(num) {
  // tu codigo aca
  
  var binario = []
  while(num > 0){
    binario.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}