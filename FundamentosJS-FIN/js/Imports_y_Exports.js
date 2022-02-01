// *** Imoport y Exports ***

// 1- Importando una unica funcion de un fichero
/*Estamos importando UNA UNICA FUNCION indicada con export en el fichero "funciones.js"
 que esta situado enla misma carpeta que este*/
 /* Nota: es popsible que nos de error al realizar la importacion, 
 "diciendo no es posible usar un import fuera de un modulo"
 y es porque debemos aregar en la etiqueta script de nuestro index, el atributo type="module" */
//import comoquieras from  "./funcionesJs.js" //Comoquieras, se refiere a la funciuon sumar() del fichero "./funcionesJs.js"

// const resultado = comoquieras(20, 30);
// console.log(resultado);

// 2- Importando varias funciones de un mismo fichero
/* Nota: tambien podemos colocar un alias a la funcion de la siguiente forma 
import { sumar as misuma} from "./js/funcionesJs.js"; 
*/
import { sumar } from "./funcionesJs.js"; 
const resultado = sumar(20, 30);
console.log(resultado);