import React from 'react'
import "../CSS/Menu.css"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import perfil from "../assets/img/perfil.jpg"
import logoEmpresa from "../assets/img/logoEmpresa.png"


const Menu = () => {
  return (
    <div className='contenedorMenu'>
        <img className='logoEmpresa' src={logoEmpresa} alt="logo empresa" />
        <div className='cont-carritoCompras'>
        <a href="" className="h-6 w-6 text-gray-500 ">{<ShoppingCartIcon  />} </a>

            <a href=""> <img className='perfilUsuario' src={perfil} alt="imagenUsuario" /> </a>
    
        </div>

    </div>
  )
}

export default Menu