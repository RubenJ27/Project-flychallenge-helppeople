import React from 'react'
import "../CSS/Productos.css"
import portada from "../assets/img/portada.jpg"
import { useState } from 'react';
import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { MinusIcon } from '@heroicons/react/24/solid';

const Productos = () => {

  const [contador, setContado]= useState(0)

  function aumentar(){
    setContado(contador+1)
  } 

  if(contador < 0){
    setContado(0)
  }
  function disminuir(){
    setContado(contador-1)
  } 

  return (
    <div className='Productos'>
      <div className='portada'>
        <img className='imagenPortada' src={portada} alt="" />

      </div>

      <div className='contenedorProductos'>

        <div className='targetas'>

        <p className='nombreProducto'>telas grandes</p>

        <div className='opcionesCompra'>
          <div>
          <p className='precioProducto'> <span>precio:</span>  $20.000</p>
          </div>
          
          <div className='contador'>
            <button onClick={disminuir} > <MinusIcon class="h-6 w-6 text-gray-500" /></button>
            <p>{contador}</p>
            <button onClick={aumentar} > <PlusSmallIcon class="h-6 w-6 text-gray-500" /></button>
           
          </div>
          </div>
          
          <button className='btnComprar'>comprar</button>
        </div>


        
      </div>
    </div>
  )
}



export default Productos