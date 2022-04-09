import { getData } from "./getData.js";
import listarApi from "./showData.js"

window.onload = function () {
    let btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            let menu_items = document.querySelector('.menu_items')
            let menu_color = document.querySelector('.menu_color')
            menu_color.classList.toggle('hidden')
            menu_items.classList.toggle('show')//Si el elemento tiene la clase se la va a quitar, de lo contrario la agrega
        })
    }
}

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




