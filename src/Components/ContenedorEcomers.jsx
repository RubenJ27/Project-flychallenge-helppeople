import React from 'react'
import Menu from './Menu'
import Asaid from './Asaid'
import Productos from './Productos'
import "../CSS/ContenedorEcomers.css"

const ContenedorEcomers = () => {
  return (
    <div className='ContenedorEcomers'>
      <Menu/>
      
      <div className='main'>
    <Asaid/>
    <Productos/>
    
      </div>
    </div>
  )
}

export default ContenedorEcomers
