// *** Template de String o concatenar String y variables ***

//Para ello usamos siempre las comillas inclinadas
//Ejemplo : console.log(`Restando la varaible1 - la variable2: ${variable1 - variable2} ms`);

const producto = "Tablet de 12 pulgadas";
const precio = 400;
const marca = "Orange";

//Antigua forma de formatear string ( PERO POCO LEGIBLE )
console.log(producto + " $" + precio + " Dolares, Marca: " + marca);

console.log("================");
//Nueva forma de formatear string (Mas clara)
console.log(`${producto} $${precio} Dolares, Marca: ${marca}`);

//Tambien podemos llamar a funciones con este template de string
function textoFuncion(){
    return "Este texto viene de una funcion ...";
}

console.log("================");
console.log(`Estamos llamando una funcion dentro d eun string y nos devbuelve: ${textoFuncion()}`)