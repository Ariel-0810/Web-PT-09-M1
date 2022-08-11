// function multi(multiplicador){
//     //guarda valor privado
//     return function( multiplicado){
//         return multiplicador * multiplicado;
//     }
// }

// var tablaDel2 = multi(2);

// console.log(tablaDel2(1));


// // console.log(tablaDel2(2));

// var tablaDel7 = multi(7); //guardo la declaracion de la funcion interna
// var tablaDel9 = multi(9);
// var tabal9 = [];
// for (let i = 1; i < 11; i++) {
//     tabal9.push(tablaDel9(i));
// }
// console.log(tabal9);


// var creaFuncion = function(){
// 	var arreglo = [];
 
// 	for ( var i=0; i < 3; i++){
// 		arreglo.push(
// 			function(){
// 				console.log(i);
// 			}
// 		)
// 	}
// 	return arreglo;
// }
 
// var arr = creaFuncion();

// arr[0](); //0
// arr[1](); //0
// arr[2](); //0

// var creaFuncion = function(){
// 	var arreglo = [];
// 	for ( var i=0; i < 3; i++){
//       	// IIFE
// 		arreglo.push(
// 			(function(j){
// 				return function() {console.log(j);}
// 			}(i))
// 		)
// 	}
// 	return arreglo;
// }

// var arr = creaFuncion();

// arr[0]() // 0
// arr[1]() // 1
// arr[2]() // 2

// function hacerSaludo( lenguaje ){
// 	if ( lenguaje === 'en'){
// 		return function(nombre){
// 			console.log('Hi!'  + ' ' + nombre );
// 		}
// 	}
 
// 	if ( lenguaje === 'es'){
// 		return function(nombre){
// 			console.log('Hola!' + ' ' + nombre );
// 		}
// 	}
// }
 
// var saludoIngles = hacerSaludo('en');
// var saludoEspaniol = hacerSaludo('es');

// saludoIngles('Chris');
// saludoEspaniol('Chris');

//THIS!!!!!

// var obj = {
//     nombre: 'Objeto',
//     log   : function(){
//       this.nombre = 'Cambiado'; // this se refiere a este objeto, a `obj`
//       console.log(this)  // obj
  
//       var cambia = function( str ){
//         this.nombre = str;  // Uno esperaria que this sea `obj`
//       }
  
//       cambia('Hoola!!');
//       console.log(this);
//     }
// }

// obj.log();

// var persona = {
// 	nombre: 'Guille',
// 	apellido: 'Aszyn',
// }

// var animal = {
//     nombre: 'Gato',
//     apellido: 'Lucifer'
// }

// var logNombre = function(str){
//     this.apellido = str;
// 	console.log(this.apellido);
// }

// var logNombrePersona = logNombre.bind(persona); //this = persona
// // el primer parametro de bind es el this!
// logNombrePersona('Gomez');

// var logNombreAnimal = logNombre.bind(animal); //this = persona

// logNombreAnimal('El jeringas');


// BIND DEVUELVE UNA FUNCION!

// function multiplica(a, b){
// 	return a * b;
// }

// var multiplicaPorDos = multiplica.bind(this, 2); //(ojeto, a)

// console.log(multiplicaPorDos(3)) //b

// console.log(multiplica(5, 4));
// el Bind le `bindeó` el 2 al argumento a.
// y devolvió una función nueva con ese parámetro bindeado.

var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}

var logNombre = function(){
	console.log(this.nombre);
}

// el primer parametro de call es el this!
logNombre.call(persona);

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
// 
var logNombre = function(arg1, arg2){
	return (arg1 +' '+ this.nombre +' '+ arg2);
}

var result = logNombre.call(persona, 'Hola', ', Cómo estas?');

console.log(result);

// Apply es igual a call, solo que el segundo argumento es un
// arreglo.

var logNombre = function(arg1, arg2){
	console.log(arg1 +' '+ this.nombre +' '+ arg2);
}

var miArr = ['Hola', ', Cómo estas?'];

logNombre.apply(persona, miArr);
//Hola Guille , Cómo estas?

////Hola Guille, Cómo estas?






