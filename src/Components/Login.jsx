import React from 'react'
import "../CSS/Login.css"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import imagen from "../img/undraw_secure_login_pdn4.png"

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/createUsers/}`);
  };
import imagen from "../assets/img/undraw_secure_login_pdn4.png"
import LoginUsuarios from './LoginUsuarios'


const Login = (  ) => {



  return (
    <div className='login'>
        <div className='registroUsuario'>
            
            <h2 className='tituloLogin'>bienbenidos</h2>
            <form action="#" className='formulario'>
                <input className='inpform' type="text" placeholder='ingrese su nombre y apellido' />
                <input className='inpform'  type="number"  id="" placeholder='numero celular' />
                <input className='inpform'  type="number"  id="" placeholder='ingrese su cedula' />
                <input className='inpform'  type="number"  id="" placeholder='contraseña' />
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

export default Login