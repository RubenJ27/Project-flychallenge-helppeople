import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import "../CSS/Login.css";
/* import { Show } from "../api/Show"; */
import imagen from "../assets/img/undraw_secure_login_pdn4.png";
import ContenedorEcomers from './ContenedorEcomers';
/* import { collection, getDocs, getDoc, deleteDoc } from '@firebase/firestore'; */
/* import { db } from "../api/Firebase";
import { async } from "@firebase/util";
import { getFirestore } from '@firebase/firestore'; */
export const LoginUsuarios = () => {
  /* const [products,  SetProducts] = useState([]); */
  /* referencia a la db firestore */
  /* const productsCollection = collection(db, "products"); */

  /* funcion para mostrar los docs */
  const getProducts = async () => {
   const data  = await getDocs(productsCollection)
   /* console.log(data.docs) */

   SetProducts(
    data.docs.map((doc) => ({...doc.data(), id:doc.id}))
    )
    /* console.log("products", products) */
  }

  /* funcion para eliminar los docs */
  const deleteProduct = async (id) => {
  const productDoc =  doc(db, "products", id)
    await deleteDoc(productDoc)
    getProducts()
   }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/createUsers/`);
  };
  return (
     <>
     <div className='login'>
      <div className='registroUsuario'>

        <h2 className='tituloInicaeSesion'>inicie sesion </h2>

        <form action="#" className='formulario'>
          <input className='inpform' type="number" id="" placeholder='ingrese su cedula' />
          <input className='inpform' type="number" id="" placeholder='contraseña' />
          <button className='btnRegistrar btnIniciarSesion'>iniciar sesion </button>

          <a className='crearUsuario' onClick={handleRegisterClick}>crear  usuario</a>
        </form>

      </div>
      <div className='imagenForm'>
        <img className='imagenLogin' src={imagen} alt="" />

      </div>
    </div>
    <div>
        <ContenedorEcomers />
        <Show />
        
      </div>

   {/*  <table className="table-fixed">
  <thead>
    <tr>
      <th>Descripcion</th>
      <th>Stock</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    {products.map( (product, index) => (
      <tr key={product.id}>
      <td>{product.description}</td>
      <td>{product.stock}</td>
      <td><button onClick={ () => deleteProduct(product.id)} className='bg-red-500'>Borrar</button></td>
      </tr>
    ))}
  </tbody>
</table> */}
      </>
      
  )
}