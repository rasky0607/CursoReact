// *** Selectores del DOM ***

/*Nota (Propiedades del objeto): si en un selector indicamos el id
(en ocasiones nos aparece un desplegable), como el ejemplo siguiente,
 podemos ver todas la propiedades del objeto que nos devuelve este selector y a las que podemos acceder.
 Como textContent, tagName, classList, id u otros*/
 ////querySelector() Selecciona 0 o un elemento coincidiente
// const heading = document.querySelector('.DOM #heading');
// console.log(heading);

//querySelectorAll() Selecciona todos los elementos coincidientes
// const enlaces = document.querySelectorAll('.DOM .navegacion a');
// console.log(enlaces);

// *** Manipulacion de objetos del DOM ***
const heading = document.querySelector('.DOM #heading');
heading.textContent = "Cambiando el texto del DOM"
console.log(heading.textContent);

const inputNombre = document.querySelector('.DOM #nombre');
//inputNombre.placeholder = 'Escribe aqui tu nombre';
inputNombre.value = "Un valor por defecto";
console.log(inputNombre.value);

const enlaces = document.querySelectorAll('.DOM .navegacion a');
enlaces.forEach(enlaces => enlaces.textContent = 'Nuevo enlace');
