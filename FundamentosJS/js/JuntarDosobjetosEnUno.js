/* Juntar dos objetos:

*/

const persona1 = {
    tipo: "Adulto",
    altura: 1.5,
}

const cliente1 = {
    tipo: "Premium"   
}
/* CASO 1
Este caso NO SE DEBE USAR EN  REACT,
ya que como vemos, esta modificado el objeto "persona" al verlo por separado esto sobjetos,
porque coincide una propiedad en nombre
y sobreescribe la porpiedad "tipo" del objeto "persona" por el valor de la propiedad "tipo" del objeto "cliente"
que es el útimo, que tiene una propiedad llamada "tipo" con el valor de esta, modificando nuestro objeto persona al final.
*/
const nuevoObjeto1 = Object.assign(persona1, cliente1);
console.log("Objeto NuevoObjeto1: ");
console.log(nuevoObjeto1);
console.log("Objeto persona1: ");
console.log(persona1);
console.log("Objeto cliente1: ");
console.log(cliente1);
console.log("|*-------------------*|");

/*CASO 2
Otra QUE NO ES FACTIBLE opción es utilizar un (Spread operator) la nomeclatura de tres puntos { ... persona, ...cliente} ,
para realizar una copia de los objetos,
pero seguiremos tenidendo el problema de que se reescriben la propiedad "tipo" porque se llaman igual en ambos objetos.
PERO en este caso, no se modifican los objetos, si lo observamos por separado.
*/
const persona2 = {
    tipo: "Adulto",
    altura: 1.5,
}

const cliente2 = {
    tipo: "Premium"   
}

const  nuevoObjeto2 =  {... persona2, ... cliente2};
console.log("Objeto NuevoObjeto2: ");
console.log(nuevoObjeto2);
console.log("Objeto persona2: ");
console.log(persona2);
console.log("Objeto cliente2> ");
console.log(cliente2);
console.log("|*-------------------*|");

/*CASO 3
FORMA CORRECTA de fusionar dos objetos en uno:
De esta forma, tenemos los dos objeto integrados dentros de un nuevo objeto,
sin que las propiedaes se machaquen el valor entre si, como en el caso2, por tener el mismo nombre,
o sin que la copia modifique uno de los objetos, como en el caso 1.*/
const persona3 = {
    tipo: "Adulto",
    altura: 1.5,
}

const cliente3 = {
    tipo: "Premium"   
}

const  nuevoObjeto3 =  {
    persona: {... persona3},
    cliente: { ... cliente3}
};
console.log("Objeto NuevoObjeto3: ");
console.log(nuevoObjeto3);
console.log("Objeto persona3: ");
console.log(persona3);
console.log("Objeto cliente3> ");
console.log(cliente3);
console.log("|*-------------------*|"); 