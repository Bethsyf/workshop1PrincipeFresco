import { getData } from "./getData.js";
import listarApi from "./showData.js"

const api = 'https://api-worlshop-f10.herokuapp.com/prendas'

const listarProductos = document.querySelectorAll('.list-group')

document.addEventListener('DOMContentLoaded', async()=> { 
    // 1-leer api con fetch
   const arrayProductos= await getData(api)

    listarApi(arrayProductos, listarProductos )
})

listarProductos[0].addEventListener('click', async (e)=>{
    const idBoton= e.target.id

   if(idBoton){
       const data = await getData(api)
       const DetalleProducto = data.find(array =>array.id === Number(idBoton))
       console.log(DetalleProducto)
       localStorage.setItem('Detalle', JSON.stringify(DetalleProducto))
       window.location.href= 'detail.html' 
   }
})




