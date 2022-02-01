//Generar codigo HTML

// *** Eventos formulario o submit ***
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', e =>{
    //preventDefault() evita que el formulario se envie por defecto (por get) al ejecutarse el evento 'sumit'
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;
    const alertaPrevia = document.querySelector('.alerta');

    //Si existe un elemento con la clase alerta ya, es eliminado , para no duplicarlo en el html
    if(alertaPrevia){
        alertaPrevia.remove();
    }   

    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta');

    if(nombre == '' || password == ''){
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');

    }else{
        alerta.textContent = 'Todo correcto';
        alerta.classList.add('exito');

    }
        console.log(alerta);
        formulario.appendChild(alerta);
})