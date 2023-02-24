
import React from "react";
import imagen from "../assets/img/undraw_secure_login_pdn4.png"
import "../CSS/Login.css"

export const Login = () => {

  return (
    <div className='login'>
        <div className='registroUsuario'>
            
            <h2 className='tituloLogin'>Bienbenidos</h2>
            <form action="#" className='formulario'>
                <input className='inpform' type="text" placeholder='Ingrese su nombre y apellido' />
                <input className='inpform'  type="number"  id="" placeholder='Numero celular' />
                <input className='inpform'  type="number"  id="" placeholder='Ingrese su cedula' />
                <input className='inpform'  type="number"  id="" placeholder='Contraseña' />
                <button onClick={handleRegisterClick} className='btnRegistrar'>registrarse</button>

                 
                <button  className='btnRegistrar'>registrarse</button>

            </form>

        </div>
        <div className='imagenForm'>
            <img className='imagenLogin' src={imagen} alt="" />
        </div>
    </div>
  )
}