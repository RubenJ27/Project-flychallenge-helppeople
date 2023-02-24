import React, { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, deleteDoc } from '@firebase/firestore';
import { db } from "../api/Firebase";
import { async } from "@firebase/util";

export const Show = () => {
  const [products,  SetProducts] = useState([]);
  /* referencia a la db firestore */
  const productsCollection = collection(db, "products");

  /* funcion para mostrar los docs */
  const getProducts = async () => {
   const data  = await getDocs(productsCollection)
   console.log(data.docs)

   SetProducts(
    data.docs.map((doc) => ({...doc.data(), id:doc.id}))
    )
    console.log("products", products)
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
}