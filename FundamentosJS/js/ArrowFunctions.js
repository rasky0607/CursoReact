//Funciones - Arrow Functions

/* Diferencias entre Function Expression y Arrow Functions */
//Function Expression
const sumar1 = function(){
    console.log(2 + 3);
}
//Arrow Functions
const sumar2 = () => {
    console.log(7 + 3);
}

sumar2();

//recordamos que podemos pasar un valor por defecto a los parametros
const sumar3 = (n1 = 0,n2 = 0) => {
    console.log(n1 + n2);
}

sumar3(89,25);

const sumar4 = (n1 = 0,n2 = 0) => {
    return n1 + n2;
}

const result = sumar4(62,25);
console.log(result);

//Otra caracteristica del arrow function, son con los return ya que puede ELIMINAR las llaves y el return
const sumar5 = (n1 = 0,n2 = 0) => n1 + n2;
const valor = sumar5(33,25);
console.log(valor);

//Otra caracteristica del arrow function, es que si solo recibe un parametro, podemos ELIMINAR los paretesis de los parametros
const sumar6 = n1 => n1 + 15;
const resultado = sumar6(30);
console.log(resultado);

//Otra caracteristica del arrow function, es cuando no tiene parametros, lo veriamos del siguiente modo
const sumar7 = () => 20 + 15;
const resultado2 = sumar7();
console.log(resultado2);