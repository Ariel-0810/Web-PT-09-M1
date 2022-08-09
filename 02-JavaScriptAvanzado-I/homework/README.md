
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5; 
var b = 10; 
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // = 10 (contexto funcional de var c => var x = 10)
  console.log(a); // = 8 (invocacion de function C(a=8, b=9, c=10))
  var f = function(a, b, c) {
    b = a;
    console.log(b); // = 8 (contexto funcional de var f => var f => b=a)
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // = 9
}
c(8,9,10);
console.log(b); // = 10 (contexto global => var b = 10)
console.log(x); // = 1 (contexto global => var x = 1)
```

```javascript
console.log(bar); // undefined
console.log(baz); // baz is not defined
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) { // Block. No abre un nuevo contexto
    var instructor = "Franco";
}
console.log(instructor); // "Franco" (entonces 'Franco' sobreeescribe a 'Tony')
```

```javascript
var instructor = "Tony";
console.log(instructor); // "Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // "Franco"
   }
})(); // funcion invocada inmediatamente
console.log(instructor); // "Tony"
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // = "The Flash" (contexto funcional)
    console.log(pm); // = "Reverse Flash" (contexto funcional)
}
console.log(instructor); // "The Flash" (sobreeescribe a var = "Tony")
console.log(pm); // "Franco" (let respeta los bloques. No se puede sobreescribir)
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // = 2
"2" * "3"  // = 6
4 + 5 + "px" // = "9px"
"$" + 4 + 5 // = "$45"
"4" - 2 // = 2
"4px" - 2 // = NaN
7 / 0 // = Infinity
{}[0] // = undefined
parseInt("09") // = 9
5 && 2 // = 2
2 && 5 // = 5
5 || 0 // = 5
0 || 5 // = 5
[3]+[3]-[10] // = 23 (concatena 3 + 3 = 33 y luego resta 10 = 23)
3>2>1 // = false (3>2 = true => true > 1 = false)
[] == ![] // = true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); // undefined // 2
// undefined porque al hacer console.log(a), en ese momento a todavia no esta definido
// 2 porque esta dentro del contexto funcional de foo, return 2
```      

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined. Porque la funcion getFood esta pasando como argumwnto false.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'. Por que this hace referencia a obj.prop

var test = obj.prop.getFullname;

console.log(test()); // undefined. Por que este test busca getFullname en el contexto Global y no esta definido
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); // 1 4 3 2
```
