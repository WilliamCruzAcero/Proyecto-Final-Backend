let productosList = [];
let carrito = [];
let total = 0;

function add(productoId, precio) {

    const producto = productosList.find(p => p.id === productoId);
    producto.stock--;

    console.log(productoId, precio);
    carrito.push(productoId);
    total = total + precio;
    document.getElementById('checkout').innerHTML = `Pagar $${total}`
    displayProductos();
}

async function pay() {
    const productosList = await(await fetch("/api/pay", {
            method: "post",
            body: JSON.stringify(carrito),
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
    }
    
function displayProductos() {
    let productosHTML = '';
    productosList.forEach(p => {
        let buttonHTML = `<button class="button-add" onclick="add(${p.id}, ${p.precio})">Agregar</button>`
        if (p.stock <= 0) {
            buttonHTML = `<button disable class="button-add" onclick="add(${p.id}, ${p.precio})">Sin stock</button>`
        }

        productosHTML +=
        `<div class="product-cotainer">
            <h3>${p.nombre}</h3>
            <img src="${p.imagen}"/>
            <h3>$${p.precio}</h3>
            ${buttonHTML}
    </div>`        
    });
    document.getElementById('page-content').innerHTML = productosHTML;
}

window.onload = async() => {
    productosList = await (await fetch("/api/productos")).json();
    console.log(productosList);
    displayProductos();
}