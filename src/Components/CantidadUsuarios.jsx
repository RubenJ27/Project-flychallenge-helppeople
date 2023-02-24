import React from 'react'
import "../CSS/CANTIDADusuarios.css"

const CantidadUsuarios = () => {
  return (

    <div  className='CANTIDADusuarios'>
      <form action="#" className='formularioCANTIDADusuarios'>
                <input className='inpformCANTIDADusuarios' type="text" placeholder='Ingrese su nombre' />
                <input className='inpformCANTIDADusuario' type="text" placeholder='Ingrese su apellido' />
                <input className='inpformCANTIDADusuarios'  type="number"  id="" placeholder='Numero celular' />
                <input className='inpformCANTIDADusuarios'  type="number"  id="" placeholder='Ingrese su cedula' />
                <input className='inpformCANTIDADusuarios'  type="number"  id="" placeholder='Contraseña' />
                <button className='btnCANTIDADusuarios' >Agregar usuario</button>
            </form>
    </div>
  )
}

export default CantidadUsuarios