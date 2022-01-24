//Objetos
/*
Un objeto como  ya sabesmos, puede contener gran cantidad de información, en varias varaibles.
Para definir uno en JS, podemos hacerlo entre "Llaves", similar a los Json 
Nota: realmente sus variables declaradas en el interior , son clave valor, como los array.

Nota: Estamos definiendo un objeto con const, porque,
aunque cambie el valor de los atributos, no cambia el valor del objeto producto.
Si definimos un objeto con " let ", podemos redefinir este objeto o macharlo.
*/ 


const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto);
console.log("|*-------------------*|");
//Tambien podemos usar la funcion table enlos objetos, viene bien para ver sus propiedades o datos
console.table(producto);
console.log("|*-------------------*|");
//Como acceder a los propiedad de un objeto:
console.log("Nombre del producto -> "+producto.nombre);
console.log("Precio del producto -> "+producto.nombre);
console.log("Disponible del producto -> "+producto.nombre);
console.log("|*-------------------*|");
/* Destructuring 
(Sacar un atributo deun objeto, para poder llamarlo sin la nomenclatura  "objeto.atributo")
*/
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log("|*-------------------*|");
//Si no exite un propiedad en un objeto, lo va añadir automaticamente
producto.stock = 10;
console.log(producto);
console.log("|*-------------------*|");
//Reescribir un valor
producto.nombre = "Monitor Curvo";
console.log(producto);
console.log("|*-------------------*|");
//Eliminar un propiedad de un objeto
delete producto.disponible;
