
// **** Array metohds ****
//Nota 1: En React es MUY IMPORTANTE no mutar o modificar los arrays originales.
//Nota 2: web donde comprobar metodos que mutan los arrays y cuales no https://doesitmutate.xyz/
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// ** Este metodo  map() podemos convertirlo en Arrow function a continuacion. **
// const nuevoArray = tecnologias.map(function(tech){
//     if(tech === "HTML"){
//         return "GraphQL"; 
//     }else{
//         return tech;
//     }
// })

//Metodo Map() convertido a un Arrow Function :
const nuevoArray = tecnologias.map( tech => {
    if(tech === "HTML"){
        return "GraphQL"; 
    }else{
        return tech;
    }
})

// ** Este metodo  filter() podemos convertirlo en Arrow function a continuacion. **
// const nuevoArray2 = tecnologias.filter(function(tech){
//     return tech !== "React"; 
// })

//Metodo Filter() crea un nuevo array en base auna condicion
//Metodo Filter() convertido a un Arrow Function :
const nuevoArray2 = tecnologias.filter((tech) => tech !== "React");

//Metodo forEach() convertido a un Arrow Function : 
//Nota: podemos añadir como parametro, la palabra reserrvada "index" , para acceder al indice del array cuando es recorrido
const arrayForEach = tecnologias.forEach((tech, index) => console.log(index, tech))

//console.log(nuevoArray);
//console.log(nuevoArray2);




const numeros = [10,20,30];

// Includes(parametro) comprueba si un elemento exist en el array
console.log(tecnologias.includes('React'));

// Some(parametro => comndicionACumplir) comprueba si algun elemento del array cumple la condicion
const cumple = numeros.some(n1 => n1 > 55);
console.log(cumple);

// Find() devuelve el primer elemento que cumpla la condicion
const mayor = numeros.find(n1 => n1 > 25);
console.log(mayor);

// Every() Devuelve true o false si todos cumplen la condicion
const todosCumplen = numeros.every(n1 => n1 > 5);
console.log(todosCumplen);

/* Reduce(acumulacionDeOperacion, numeroASumar => numeroASumar + acumulacionDeOperacion, NumeroPorElQueEmpiezaASumar)
 suma todos los elementos ( esta diseñado para cantidades ) */
const cantidadDeSumas = numeros.reduce((acumulado,numero) => numero + acumulado, 0);
console.log(cantidadDeSumas);