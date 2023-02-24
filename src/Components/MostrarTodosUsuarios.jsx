import React from 'react'
import "../CSS/MostrarTodosUsuarios.css"
import imagenUsuario from "../assets/img/perfil.jpg"

const MostrarTodosUsuarios = () => {
  return (
    <div className='ContenedorMostrarTodosUsuarios'>

       
<div className="table-wrapper">
    <table className="fl-table">
        <thead>
        <tr>
            <th>Nombre </th>
            <th> Apellidos</th>
            <th>Cedula</th>
            <th>Celular 3</th>
            
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>bruno </td>
            <td>mars</td>
            <td>12456644</td>
            <td>4564433</td>
           
        </tr>

        
       
        </tbody>
    </table>
</div>


        

        
    </div>
  )
}

export default MostrarTodosUsuarios