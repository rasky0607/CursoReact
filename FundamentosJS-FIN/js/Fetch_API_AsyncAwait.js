// *** Fetch API con Async Await ***
/*Este ejemplo vamos a usar una API de ejemplo en la que encontramos los endpoint en la web: https://jsonplaceholder.typicode.com/  
En concreto el de los "comments" con la URL "https://jsonplaceholder.typicode.com/comments"
*/
//Nota: cuando usamos Async Await, las funciones deben ser ASINCRONAS
//Nota2 : Los AWAIT , bloquean el codigo  hasta obtener respuesta.
const url = "https://jsonplaceholder.typicode.com/comments"
const consultarAPI = async (miurl) =>{
    const respuestaFetch = await fetch(miurl);
    const respuestaJson = await respuestaFetch.json();
    //console.log(respuestaJson);
    respuestaJson.forEach(comentario => {
        console.log(comentario.email);
    });
       
}

consultarAPI(url);