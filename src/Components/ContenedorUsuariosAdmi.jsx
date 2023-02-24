import React from 'react'
import "../CSS/ContenedorUsuariosAdmi.css"
import imagenAdmind from "../assets/img/perfil.jpg"
import perfilProductos from "../assets/img/perfilProductos.jpg"

const ContenedorUsuariosAdmi = () => {
  return (
    <div className='contenedorUsuario'>
        <div className='usuario usuario--li'>
            <img className='imagenAdmind' src={imagenAdmind} alt="imagen usuario" />
            <a href="">Administrador</a>

        </div>

        <div className='usuarioProducto usuario--li'>
            <img className='perfilProductos' src={perfilProductos} alt="imagen producto" />
            <a href="">Producto</a>
        </div>
    </div>
  )
}

export default ContenedorUsuariosAdmi