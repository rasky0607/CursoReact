// *** Funciones - Function Declaration ***

/*Nota: En JS, se puede llamar uan funcion antes de ser declarada,ya que en la primera pasada del compilador,
 se busca y crean todas las funciones y luego se ejecutan*/

//Añadir un valor por defecto a un parametro
// function sumar(numero,numnero2 = 10){
//     console.log(numero);
// }

function sumar(numero,numnero2){
     return numero + numnero2;
}
const resultado = sumar(3,10);
console.log("Resultado: "+resultado);

//Otra forma de acceder a los resultados, cuando son de diferente tipo o estan en una coleccion
function sumar2(numero,numnero2 = 0){
    return [numero + numnero2, 'Hola mundo'];
}
const [result, cadena] = sumar2(82,9);
console.log(result);
console.log(cadena);

//Devolviendo un objeto y accediendo a sus propiedades
function sumadorCliente(numero,numnero2 = 0){
    return {
        valor: numero + numnero2,
        mensaje: 'Hola mundo'
    };
}
const {valor, mensaje} = sumadorCliente(55,13);
console.log(valor);
console.log(mensaje);



