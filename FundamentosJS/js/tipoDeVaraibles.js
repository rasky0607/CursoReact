//Nota: Js es un lenguaje de tipo "Dinamico" es decir una variable puede contener diferentes tipos de datos
/*
-- Variables var let const --

var -> es la forma antigua de declarar variables, ahora se usa let y const 
let -> estas varaibles se pueden declarar sin inicializar y se le puede reasignar un valor
const -> estas varaibles deben ser inicializadas y no se le pueden reasignar un valor, ya que son constantes en todo el codigo
*/ 

let precio;
console.log("Valor de la variable precio");
console.log(precio);
precio = 23;
console.log(precio);
precio = 9;
console.log(precio);

console.log("Valor de la variable nombre");
let nombre = "Juan";
console.log(nombre);
nombre = "Ramon";
console.log(nombre);

const velocidadTiempo = 1
console.log("Valor de la constante")
console.log(velocidadTiempo)