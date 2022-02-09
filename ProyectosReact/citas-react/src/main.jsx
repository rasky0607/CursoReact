import React from 'react' //Este import Conecta conla API de React
import ReactDOM from 'react-dom' //Este import, es especifico para la version web (Tiene todos los elementos relacionados con el DOM)
import './index.css' //Hoja de estilos para toda la aplicacion
//Nota: podemos tener otras hojas de estilos para un componente en especifico, esas se llaman "Modulos"
import App from './App'
import './dist/output.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//Coloca App en un elemento llamado "root", el cual esta en el index.html
)
