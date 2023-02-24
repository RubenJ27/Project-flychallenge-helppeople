import React from 'react'
import { useNavigate } from "react-router";
import "../CSS/Login.css"
import imagen from "../assets/img/undraw_secure_login_pdn4.png"
import ContenedorEcomers from './ContenedorEcomers'
import AdministradorDasboard from './AdministradorDasboard'
export const LoginUsuarios = () => {
  
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/createUsers/`);
  };
  return (
<<<<<<< HEAD
  /* 
   <div className='login'>

       <div className='registroUsuario'>
=======
    <>
   <div className='login'>
 {/* // 
    //     <div className='registroUsuario'>
>>>>>>> cfabc144e74889050ab4fd821d9eb285f9f08d46
            
          <h2 className='tituloInicaeSesion'>inicie sesion </h2>

          <form action="#" className='formulario'>
              <input className='inpform'  type="number"  id="" placeholder='ingrese su cedula' />
           <input className='inpform'  type="number"  id="" placeholder='contraseña' />
               <button className='btnRegistrar btnIniciarSesion'>iniciar sesion </button>

                <a className='crearUsuario' onClick={handleRegisterClick}>crear  usuario</a>
  /          </form>

       </div>
       <div className='imagenForm'>
           <img className='imagenLogin' src={imagen} alt="" />

<<<<<<< HEAD
       </div>
   </div>
     <div>
         { <ContenedorEcomers/> }
         

     </div>
    */

   <AdministradorDasboard/>
=======
    //     </div>
    // </div>
    <div> */}
  
        {/* <ContenedorEcomers/> */}
        <AdministradorDasboard/>

    </div>
    </>
>>>>>>> cfabc144e74889050ab4fd821d9eb285f9f08d46
  )

}
