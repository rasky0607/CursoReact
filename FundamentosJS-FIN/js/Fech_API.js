// *** Fetch API ***
//Lo que es el nuvo Ajax o antiguamente el XML HTTP Request

/*Este ejemplo vamos a usar una API de ejemplo en la que encontramos los endpoint en la web: https://jsonplaceholder.typicode.com/  
En concreto el de los "comments" con la URL "https://jsonplaceholder.typicode.com/comments"
*/

/*
fetch()
Es una funcion ya incluida en todos los navegadores, pero en algunos suele ir acompañada de un "promise",
es decir una respuesta del servidor, que va devolver en el momento que se realiza el fetch, o en un futuro.
este se indica con el metodo then(). 
*/
// const url = "https://jsonplaceholder.typicode.com/comments"
// fetch(url).then( () => {
//     console.log("Haciendo fetch ...");
// })

/*Ahora vemos la respues del servidor, y si hacemos click en la consola en la propiedad de la respuesta "prototype"
Vemos los diferentes metodos que podemos ejecutar sobre esta respuesta, entre ellos encontramos el metodo Json()*/
// const url = "https://jsonplaceholder.typicode.com/comments"
// fetch(url).then( (respuesta) => {
//     //console.log(respuesta);
//     return respuesta.json();
// })

/*Json() al usar este metodo con la respuesta, obtenemos un segundo then(),
 es decir una segunda respuesta que ya seran los datos obtenidos*/
// const url = "https://jsonplaceholder.typicode.com/comments"
// fetch(url).then( (respuestaFetch) => {
//     return respuestaFetch.json();
// }).then((respuestaJson) => {
//     //console.log('resultado casi listo...')
//     //console.log(respuestaJson);
//     respuestaJson.forEach(comentario => {
//         console.log(comentario);
//     });
// })

/* Es la misma forma  que la anteiror,
 pero embebido en un metodo de arrow function creado por nosotros */ 
const url = "https://jsonplaceholder.typicode.com/comments"
const consultarAPI = (miurl) =>{
    fetch(miurl)
        .then( respuestaFetch => respuestaFetch.json())
        .then(respuestaJson => {
            respuestaJson.forEach(comentario => {
                console.log(comentario);
            });
        })
}

consultarAPI(url);