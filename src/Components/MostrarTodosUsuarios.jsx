import React from 'react'
import "../CSS/MostrarTodosUsuarios.css"
import imagenUsuario from "../assets/img/perfil.jpg"

const MostrarTodosUsuarios = () => {
  return (
    <div className='ContenedorMostrarTodosUsuarios'>

        <div className='estructuraUsuarios'>
            <img className='PerfilestructuraUsuarios' src={imagenUsuario} alt="" />
            <p>bruno mars</p>
            <p>12356378</p>
            <p>3216826377</p>
        </div>

        

        
    </div>
  )
}

export default MostrarTodosUsuarios