class Productos {
    constructor(id, corte, price, img) {
        (this.id = id),
            (this.corte = corte),
            (this.price = price),
            (this.img = img),
            (this.cantidad = 1);
    }
}

const vacio = new Productos(1, "Vacio", 1500, "img/vacio.jpg");
const tapaDeAsado = new Productos(
    2,
    "Tapa de asado",
    1450,
    "img/tapaDeAsado.jpg"
);
const tomaHawk = new Productos(3, "Toma Hawk", 1650, "img/tomahawk.jpg");
const picaña = new Productos(4, "Picaña", 1800, "img/picaña.jpg");
const tiraDeAsado = new Productos(5, "Tira de Asado", 2000, "img/asado.webp");

const arrayProductos = [];

arrayProductos.push(vacio);
arrayProductos.push(tapaDeAsado);
arrayProductos.push(tomaHawk);
arrayProductos.push(picaña);
arrayProductos.push(tiraDeAsado);

let carrito = [];

const contenedorProductos = document.getElementById("contenedor-productos");
const carritoContenedor = document.getElementById("lista-carrito");

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (verCarrito) {
        showCarrito();
    }
    
});

if (contenedorProductos) {
    const showProductos = () => {
        arrayProductos.forEach((prod) => {
            const { id, corte, price, img, cantidad } = prod;
            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                <div class = "shop-card">

                    <div class = "slider">
                        <img src="${img}">
                    </div>

                    
                    <div class="cta">
                        <h5 class= "title"> ${corte} </h5>
                        <p class="price">$ ${price} kg </p>
                    </div>

                    <div class="card-buttons">
                                <div class="menos-mas">
                                    <p>Cantidad (kg)</p>
                                </div>
                                <div>
                                    <button class="btn" id = "boton${id}" >Agregar al Carrito</button>
                                </div>
                           
                    </div>`;
            // <button id="disminuir">-<button>
            // <span>${cantidad}</span>
            // <button id="aumentar">+</button>
                                
            //agregar al productos al carrito
            contenedorProductos.appendChild(card);

            const btn = document.getElementById(`boton${id}`);
            btn.addEventListener("click", () => {
                addToCart(id);
            });

        });
    };
    showProductos();
}


//FUNCION AGREGAR AL CARRITO

const addToCart = (id) => {
    const productoEnCarrito = carrito.find((prod) => prod.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        Toastify({
            text: "Se agreggo al carrito",
            gravity: "bottom",
            duration: 2000,
        }).showToast();
    } 
    else {
        const producto = arrayProductos.find((prod) => prod.id === id);
        carrito.push(producto);
        Toastify({
            text: "Se agreggo al carrito",
            gravity: "bottom",
            duration: 2000,
        }).showToast();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    calculateTotal();
};

//MOSTRAR CARRITO
const verCarrito = document.getElementById("verCarrito");

if (verCarrito) {
    verCarrito.addEventListener("click", () => {
        showCarrito();
    });
} 


const showCarrito = () => {
    carritoContenedor.innerHTML = "";
    carrito.forEach((producto) => {
        const { id, corte, price, img, cantidad } = producto;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        
                        <td>
                            <img class="img-fluid img-carrito" src="${img}"/>
                        </td>
                        <td>${corte}</td>
                        <td>${price}</td>
                        <td>${cantidad} kg</td>
                        <td>
                            <button class="btn btn-danger btnEliminar" id ="eliminar${id}" >Eliminar producto</button>
                        </td>
                        
                    `;
        carritoContenedor.appendChild(tr);
        
        const boton = document.getElementById(`eliminar${id}`);
        boton.addEventListener("click", () => {
            deleteFromCart(id);
            
        });
    });
    
    calculateTotal();
};

const deleteFromCart = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    showCarrito();

    Toastify({
        text: "Producto eliminado",
        className: "info",
        gravity: "bottom",
        position: 'left',
        duration: 2000,
        style: {
          background: "linear-gradient(to right, #FF3100, #ee5151)",
        }
    }).showToast();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    
};

const vaciarCarrito = document.getElementById("vaciarCarrito");
if(vaciarCarrito){
    vaciarCarrito.addEventListener("click", () => {
        emptyCart();
    });
}

const emptyCart = () => {
    carrito.length = [];
    showCarrito();
    Swal.fire({
        title: "¡El carrito esta vacio!",
        icon: "warning",
        confirmButtonText: "Aceptar",
    })

    localStorage.clear();
};

const total = document.getElementById("total");

const calculateTotal = () => {
    let totalCompra = 0;
    carrito.forEach((producto) => {
        totalCompra += producto.price * producto.cantidad;
    });
    total.innerHTML = `: $${totalCompra}`;
};



