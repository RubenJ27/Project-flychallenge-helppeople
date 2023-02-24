import React from 'react'
import Menu from './Menu'

import "../CSS/ContenedorEcomers.css"
import ContenedorUsuariosAdmi from './ContenedorUsuariosAdmi'
import ContenedorProductos from './ContenedorProductos'

const AdministradorDasboard = () => {
  return (
   
        <div className='ContenedorEcomers'>
      <Menu/>

      <div className='main'>
    
    <ContenedorUsuariosAdmi className="ContenedorUsuariosAdmi" />

    <ContenedorProductos className="ContenedorUsuariosAdmi" />
    
      </div>
    </div>
      )
}

export default AdministradorDasboard




