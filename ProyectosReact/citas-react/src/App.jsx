/*En las anteriores versiones de React, era necesario este import en todos tus componentes: import React from 'react' 
Pero en las ultimas versiones ya no es necesario */
/* JSX -> JavaScript Syntax  Extension, es un lenguaje de template, pero que tiene todas las funciones de JAvaScript
Reglas al escribir JSX: 
1- Las etiquetas, estan obligadas a ser cerradas (incluidas link o img), es decir finalizar en />
2- Cada componente , debe tener un return y dentro de este no podemos colocar funciones ni if ..
a no ser que lo coloquemos una expresion, como entre {"Hola mundo1".toUpperCase()} esto indicara que es codigo que se debe interpretar como JavaScript,
tambien podemos incluir entre las laves, peradores ternarios como {edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad' }
3- El return debe tener un solo elemento en el nivelmas alto.
Ej Correcto:
    <div className="App">
      <h1>Hola Mundo</h1>
    </div>
Ej Correcto Alternativo (Fragments) creando etiqueta vacia de apertura y cierre
  <>
      <div className="App">
        <h1>Hola Mundo</h1>
      </div>
      <div className="App">
        <h1>Hola Mundo</h1>
      </div>
  </>
Ej Incorrecto:
    <p>Un parrafo</p>
    <h1>Hola Mundo</h1>
*/

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className='bg-slate-100'>
      <div className="container mx-auto">
          <Header/>
          <div className="mt-12 md:flex h-screen">
              <Formulario/>     
          </div>
      </div> 
    </div>
  )
}

export default App
