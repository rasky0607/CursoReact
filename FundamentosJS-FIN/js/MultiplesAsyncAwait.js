// *** Fetch API con Async Await ***
//Nota: cuando usamos Async Await, las funciones deben ser ASINCRONAS
//Nota2 : Los AWAIT , bloquean el codigo  hasta obtener respuesta.

/*Este ejemplo vamos a usar una API de ejemplo en la que encontramos los endpoint en la web: https://jsonplaceholder.typicode.com/  
En concreto el de los "comments" con la URL "https://jsonplaceholder.typicode.com/comments"
y el de "photos" con la URL "https://jsonplaceholder.typicode.com/photos" */


/*Nota3 Performance: Podemos medir el performance usando performance.now(),
 de estas dos formas realizar multiples llamadas Async,
 para ver la diferencia entre ambas. */ 

/*
*** FORMA INCORRECTA ***
En esta primera forma , vemos como hacemos dos llamadas a la API, pero una bloquea a la otra,
ya que realizara la 1º bloquenado a la 2º con su await y depues hará esta última.
Estamos bloqueando codigo NO  DEPENDIENTE, ya que, la Photos no depende de cComments,
estas son estas dos llamadas diferentes.
*/
const urlComments = "https://jsonplaceholder.typicode.com/comments";
const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
const consultarAPI = async () =>{
    //Para medir lo que tarda la ejecución
    const inicioPerformance = performance.now();

    const respuestaFetchComments = await fetch(urlComments);
    const respuestaJsonComments = await respuestaFetchComments.json();
    console.log(respuestaJsonComments);

    console.log("Iniciando 2º consulta ....");

    const respuestaFetchPhotos = await fetch(urlPhotos);
    const respuestaJsonPhotos = await respuestaFetchPhotos.json();
    console.log(respuestaJsonPhotos);

    const finPerformance = performance.now();
    console.log(`Ejecucion de primer ASYNC: ${finPerformance - inicioPerformance} ms`);
       
}

consultarAPI();

/*
*** FORMA CORRECTA ***
En esta segunda forma , vemos como hacemos dos llamadas a la API a la vez por separado,
usando un Promise al que le pasamos los fetch() y devolviendo un array de resultados.
gracias a Esto hace que no creemos codigo que bloquea a partes que no son dependientes,
como curren el caso anterior.
*/

const consultarAPI2 = async () =>{
    //Para medir lo que tarda la ejecución
    const inicioPerformance = performance.now();

    //El promise arranca ambos fetch al mismo tiempo
    const [respuesta1, respuesta2] = await Promise.all([ fetch(urlComments), fetch(urlPhotos)]);
    const resultado1 = await respuesta1.json();
    const resultado2 = await respuesta2.json();
    console.log(resultado1);
    console.log(resultado2);

    const finPerformance = performance.now();
    console.log(`Ejecucion de segunda ASYNC: ${finPerformance - inicioPerformance} ms`);
}
consultarAPI2();