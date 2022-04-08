import { getData } from "./getData.js";
import listarApi from "./showData.js"

const api = 'https://api-worlshop-f10.herokuapp.com/prendas'

const listarProductos = document.querySelectorAll('.list-group')

document.addEventListener('DOMContentLoaded', async()=> { 
    // 1-leer api con fetch
   const arrayProductos= await getData(api)

    listarApi(arrayProductos, listarProductos )
})




