//Eventos del DOM en JS

// *** Evento click ***
const heading = document.querySelector('.heading');
//Fomra 1 de crear un evento click en JS
// heading.addEventListener('click',function(){
//     console.log("clicando en mi");
// })

//Fomra 2 de crear un evento click en JS
// heading.addEventListener('click',clickHeading)
// function clickHeading(){
//     console.log("Clicando en heading");
// }

//Fomra 3 (como callBack) de crear un evento click en JS
heading.addEventListener('click',()=>{
    heading.textContent = 'Nuevo Heading al dar click';
})

/*
Nota: Esto NO SE PUEDE  HACER (dara error), ya que un evento solo se puede asociar aun elemento,
 por lo que tendremos que iterar con forEach*/
// const enlaces = document.querySelectorAll('.DOM .navegacion a');
// enlaces.addEventListener('click',() => {
//     console.log("Clicaste en un enlace");
// })

const enlaces = document.querySelectorAll('.DOM .navegacion a');
enlaces.forEach(enlaces =>{
    enlaces.addEventListener('click',() => {
        console.log("Clicaste en un enlace");
    })
})

// *** Eventos en Inputs ***

/* podemos encontrar muchos, entre ellos :
input: cunado escribimos enun input
keydown: Cuando se presiona una tecla se ejecuta.
keyup: cuando se suelta una tecla
*/ 
// const inputNombre = document.querySelector('#nombre');
// inputNombre.addEventListener('input',function(event){
//     console.log("Escribiendo en el input ...");

//     //NOTA IMPORANTE: No es recomendalbe usar value para mostrar lo que vas escribiendo
//     //console.log(inputNombre.value);
//     /*Es mejor usar el parametro que se le pasa automaticamente a la funcion,
//     y que podemos llamar como queramos en este caso 'event'
//     [Este parametro 'event', nos darta mucha infomracion sobre el evento que esta ocurriendo.
//     Entre ella esta la propiedad 'target' que es donde esta ocurriendo el evento.
//     A través de esta propiedad podemos accedera el atributo 'value']*/
//     console.log(event.target.value)
// })

//Ejemplo de como mostrar el password conforme se va escribiendo durante unos segundos
/*Simplemente cambiamos el tipo del input de text a password,
 cuando se escribe algo en el durante un tiempo determinado y volvemos a cambiarlo*/
const inputPassword = document.querySelector('#password');
inputPassword.addEventListener('input',funcionPassword);

function funcionPassword(){
    inputPassword.type = 'text';
    const timeout = 100;
    setTimeout(() => {
        inputPassword.type = 'password';
    }, timeout)
}

// *** Eventos formulario o submit ***

const formulario = document.querySelector('#formulario');

//usando para practicarun arrow fuction
formulario.addEventListener('submit', e =>{
    //preventDefault() evita que el formulario se envie por defecto (por get) al ejecutarse el evento 'sumit'
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    console.log(nombre);
    console.log(password);
    if(nombre == '' || password == '')
        console.log('Todos los campos son obligatorios');
    else
        console.log("Eviaste el formulario ...");
})