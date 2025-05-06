let products = JSON.parse(localStorage.getItem('Productos')) || [];
let productsContainer = document.getElementById('cardsContainer');

let excard = document.getElementById('excard');
let panel = document.getElementById('panel');
let closeButton = document.getElementById('close');
let crearProducto = document.getElementById('crearProducto');
let borrarProductos = document.querySelector('.borrarProductos')

excard.onclick = () => {
    panel.classList.add('mostrar-panel');
}
closeButton.onclick = () => {
    panel.classList.remove('mostrar-panel');
}

borrarProductos.onclick = () => {
    products = []
    localStorage.removeItem('Productos');
    location.reload()
}

function mostrarProductos(productos){
    productos.forEach(producto => {
        const product = document.createElement("div");
        product.className = "card"
        product.innerHTML = `
                            <h5 class="card-title">${producto.nombreProducto}</h5>
                          <p class="card-price">$${producto.precioProducto}</p>
                          <p class="card-desc">${producto.descProducto}</p>`
        productsContainer.appendChild(product);
    })

}


crearProducto.onclick = () => {
    let nombreProducto = document.getElementById('nombre');
    let precioProducto = document.getElementById('precio');
    let descProducto = document.getElementById('desc');

    products.push({
        nombreProducto: nombreProducto.value,
        precioProducto: precioProducto.value,
        descProducto: descProducto.value 
    })
    localStorage.setItem("Productos", JSON.stringify(products));
    panel.classList.remove('mostrar-panel');

    setTimeout(() => {
        location.reload();
    }, 100);
    
}

mostrarProductos(products);