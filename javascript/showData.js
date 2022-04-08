const listarApi = async (arrayproductos, pintarHTML) => {

  arrayproductos.forEach((producto) => {
    const { id, prenda, img, price } = producto;

    pintarHTML[0].innerHTML += `
    <div class="card">
    <h3 class="card-title">${prenda}</h3>
    <img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
</div>
</div>  
        `;
  });
};

export default listarApi;
