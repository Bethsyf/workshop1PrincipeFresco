const listar = document.getElementById('list-group')

const traerLocalStorage =()=>{
       const detalle= JSON.parse(localStorage.getItem('Detalle'))
       console.log(detalle)

       const {img, prenda, precio} = detalle
       listar.innerHTML +=`
       <div class="card" style="width: 18rem;">
        <img src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${prenda}</h5>
            <p>Let them know you’re 90s royalty with this official The Fresh Prince crown pattern sweater. Throw vintage vibes that Uncle Phil would approve of. Featuring woven The Fresh Prince logo on chest. Navy crown print crew neck sweatshirt with white ribbed collar and waist band. Cotton/Poly blend.</p>
            <h5 >Precio: ${precio}</h5>
            <a  class="btnReturn btn-primary">Return</a>
            <button>Add Cart</button>
            <button>buy it now</button>
        </div>
        </div>
       `
}

document.addEventListener('DOMContentLoaded', traerLocalStorage)

listar.addEventListener('click', (e)=>{
    console.log(e)
    if (e.target.classList.contains('btnReturn')){
        window.location.href="index.html"
    }
})