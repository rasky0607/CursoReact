/* 
Destructuring con dos o mas objetos.
Estamos dando un alias a la propiedad "nombre" del objeto cliente,
ya que a la hora de usar esta forma de extraer propiedades de objetos,
necesita que los nombres de las propiedades sean unicos ,
y esto lo hacemos con  :nombreDeAlias*/

const persona = {
    tipo: "Adulto",
    altura: 1.5,
}

const cliente = {
    tipo: "Premium"   
}

const { tipo, altura } = persona;
const { tipo: tipoCliente } = cliente;
console.log("Destructuring -> "+tipo);
console.log("Destructuring -> "+tipoCliente);

console.log("|*-------------------*|");
/*
Literal Enhacement,
para introducir una varaible como propiedad dentro de objetos
*/
const autenticado = true;
const usuario = "Pablo";

const nuevoObjeto = {
    autentificacion: autenticado,
    user: usuario
}

console.table(nuevoObjeto);
console.log("|*-------------------*|");

/* Object.seal() El objeto SI PUEDEN  MODIFICAR sus propiedades existentes,
pero NO se pueden añadir propiedades nuevos
(en este caso el valor del propiedad " nombre " SI será cambiado)
 */
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

Object.seal(producto);
producto.nombre = "Pantalla Oled";
console.table(producto);
console.log("|*-------------------*|");

/* Object.freeze() El objeto NO PUEDE SER AÑADIR NUEVAS O MODIFICADAS las propiedades,
(en este caso el valor del propiedad " nombre " NO será cambiado)
 */
Object.freeze(producto);
producto.nombre = "Tv de Tubo";
console.table(producto);
console.log("|*-------------------*|");


