function Paciente() {
    return (
        <div className='mt-5 bg-white shadow-md ml-3 rounded-lg py-8 px-8 mb-10'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {''}
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {''}
                <span className='font-normal normal-case'>Pablo López</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Email: {''}
                <span className='font-normal normal-case'>correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Alta: {''}
                <span className='font-normal normal-case'>19 Diciembre 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Sintomas: {''}
                <span className='font-normal normal-case'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci dolorum eligendi provident! Consequatur quos quis dolores? Fuga necessitatibus ullam ratione,
                    repellat libero, fugit molestias quidem in perspiciatis, reprehenderit magnam animi?
                </span>
            </p>
        </div>
    )
}

export default Paciente
