import React from 'react'
import "../CSS/Login.css"
import imagen from "../assets/img/undraw_secure_login_pdn4.png"
import ContenedorEcomers from './ContenedorEcomers'
export const LoginUsuarios = () => {
  return (
    // <div className='login'>

    //     <div className='registroUsuario'>
            
    //         <h2 className='tituloInicaeSesion'>inicie sesion </h2>

    //         <form action="#" className='formulario'>
    //             <input className='inpform'  type="number"  id="" placeholder='ingrese su cedula' />
    //             <input className='inpform'  type="number"  id="" placeholder='contraseña' />
    //             <button className='btnRegistrar btnIniciarSesion'>iniciar sesion </button>

    //             <a className='crearUsuario'>crear  usuario</a>
    //         </form>

    //     </div>
    //     <div className='imagenForm'>
    //         <img className='imagenLogin' src={imagen} alt="" />

    //     </div>
    // </div>
    <div>
        <ContenedorEcomers/>

    </div>
  )
}