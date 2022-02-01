//Funciones - Function Expression

/* ** Diferencias entre Function Declaration y Function Expression **

Function Declaration  primero son recopiladas por el compilador en una primera pasada y despues ejecutadas,
por eso , estas pueden ser llamadas antes de ser declaradas.

Function Expression son recopiladas al mismo tiempo que ejecutadas, 
estas NO pueden ser llamadas antes de ser declaradas
*/
//Function Declaration
function sumar1(numero,numnero2){
    return numero + numnero2;
}

//Function Expression
const sumar2 = function(n1,n2){
    return n1 + n2;
}

console.log(sumar1(10,10));
console.log(sumar2(3,4));

