//Un componente, no es mas que una funcion
//Todos los componentes, requierenun return
//Para crear o nombrar un componente, la primera letra, tanto del fichero como dentro de el, debe ser en mayuscula
//Para desbugear en chrome, instalamos la extension "React Developer Tools", tambien disponible en firefox
//Escribimos rfce y autocompleta  la plantilla del fichero ( es decir la funcion y el export)
//La nomenclatura md en un los estilos añadido en las clases como md:flex, es igual aue añadir una mediaquery en css
function Header() {
    return (
        <>
         <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Seguimiento pacientes{' '}
            <span className="text-indigo-600">Veterianaria</span>
        </h1>
        </>
    )
}

export default Header;