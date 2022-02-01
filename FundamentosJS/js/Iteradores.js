//Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

/* *** Diferencia entre iterador forEach y map *** */

//forEach, solo lista y accede a cada elemento
const arrayForEach = tecnologias.forEach(function(tech){
    //console.log(tech);
    return tech;
})

//map, lista, accede y CREA un nuevo array
const arrayMap = tecnologias.map(function(tech){
    //console.log(tech);
    return tech;
})

/* NOTA:
Si nos fijamos en el resultado, "arrayForEach" NO se ha copiado
mientras que "arrayMap" SI se ha copiado
*/
console.table(arrayForEach);
console.table(arrayMap);