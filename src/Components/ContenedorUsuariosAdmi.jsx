import React from 'react'
import "../CSS/ContenedorUsuariosAdmi.css"
import imagenAdmind from "../assets/img/perfil.jpg"
import perfilProductos from "../assets/img/perfilProductos.jpg"
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const ContenedorUsuariosAdmi = () => {
  return (
    <div className='contenedorUsuario'>
        <div className='usuario usuario--li'>
            
            <UserCircleIcon class="h-6 w-6 text-gray-500 imagenAdmind" />
            <a href="">Administrador</a>

        </div>

        <div className='usuarioProducto usuario--li'>
            
            <BuildingStorefrontIcon class="h-6 w-6 text-gray-500 perfilProducto" />
            <a href="">Producto</a>
        </div>
    </div>
  )
}

export default ContenedorUsuariosAdmi