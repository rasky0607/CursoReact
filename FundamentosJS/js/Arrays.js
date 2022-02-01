const miarray = [20,30,'Caramelo','React',true];

console.table(miarray);
console.log("Elemento en el indice 2: "+miarray[2]);

// *** Añadir elementos al final ***
// console.log("Añadir elemento al array al final:");
// miarray.push('Papelera');
// console.table(miarray);

//*** Añadir elementos al princpio ***
// console.log("Añadir elemento al array al pricipio:");
// miarray.unshift('Luna');
// console.table(miarray);

//*** Añadir elementos al princpio o al final, sin modificar le array original ***
/* *** (ALTAMENTE RECOMENDADO) *** Tambien podemos copiar el array en uno nuevo usando el operado ... y 
añadir el elemento al pricipio o algo final,
de forma que estariamos modificando el array sin modificar el array original*/
const  nuevoArray = [... miarray, "Papelera"];
const  nuevoArray2 = ["Ventana", ... miarray];
console.log("El array \"nuevoArray: \"")
console.table(nuevoArray);
//console.table(nuevoArray2);

//*** Eliminar elemntos del final ***
// console.log("Eliminar elemento del array del final:");
// miarray.pop();
// console.table(miarray);

//*** Eliminar elemntos del inicio ***
// console.log("Elminar elemento del array del principio:");
// miarray.shift();
// console.table(miarray);

//*** Eliminar elemento de una posicion concreta ***
/*splice(posicion,cantidad), 
ese metodo elimina los elemento de un array, empezando desde una posicion,
hasta el numero de  elmentos indicados,
en este caso desde la posicion 2, un solo elemento,
si no indicamos la cantidad de elementos a eliminar, los eliminara todos*/
// console.log("Eliminar elemento del array por posicion:");
// miarray.splice(2,1);
// console.table(miarray);

//*** Eliminar sin m odificar el array original ***
/*
(ALTAMENTE RECOMENDADO)
Filter() retorna un array nuevo, sin modificar el original. 
Este itera en los elemento del array, es decir se ejecutará una vez por cada elmento,
 y se puede pasar un parametro de forma automatica en la funcion,
donde se guardara cada elmento, para ver los elementos iterados*/
const otroArray = nuevoArray.filter(function(misElementos){
    //console.log("Desde filter.");
    console.log("Elemento-> "+misElementos);
    //return misElementos === "Papelera"; //Retorna los elementos que coinciden en tipo y contenido "Papelera"
    return misElementos !== "Papelera"; //Retorna todos los elementos  de la coleccion que no sean "Papelera"
})
console.log("El array \"otroArray: \"")
console.table(otroArray);

// *** Remplazar elemntos ***

//NO RECOMENDADO
//otroArray [0] = "Tortuga";

// *** Remplazar elemntos sin modificar el array original ***
/*
(ALTAMENTE RECOMENDADO)
Map() al igual que filter, 
itera cada uno de los elementos y con el podemos modificar elementos de una coleccion,
sin modificar la coleccion original.
*/ 
const arrayRemplazos = otroArray.map(function(miselementos){
    /*Si el elemento iterado concide con "Caramelo", entonces lo sustituira por "Candy",
     sino copiara los existnete en el arrray "otroArray" dentro de "arrayRemplazos" */
    if(miselementos === "Caramelo"){
        return "Candy"; 
    }else{
        return miselementos;
    }
})

console.table(otroArray);
console.table(arrayRemplazos);