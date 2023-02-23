import React from 'react'
import Menu from './Menu'
import Asaid from './Asaid'
import Productos from './Productos'

const ContenedorEcomers = () => {
  return (
    <div className='ContenedorEcomers'>
      <Menu/>
      <div>
    <Asaid/>
    <Productos/>
    
      </div>
    </div>
  )
}

export default ContenedorEcomers
