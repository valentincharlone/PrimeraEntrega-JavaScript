class Productos {
  constructor(id, corte, price, img) {
        this.id = id,
        this.corte = corte,
        this.price = price,
        this.img = img,
        this.cantidad = 1
  }
}

const pedido1 = new Productos(1, "Vacio", 1500, "img/vacio.jpg");
const pedido2 = new Productos(2, "Tapa de asado", 1450, "img/tapaDeAsado.jpg");
const pedido3 = new Productos(3, "Toma Hawk", 1650, "img/tomahawk.jpg");
const pedido4 = new Productos(4, "Picaña", 1800, "img/picaña.jpg");

const arrayProductos = [];

arrayProductos.push(pedido1);
arrayProductos.push(pedido2);
arrayProductos.push(pedido3);
arrayProductos.push(pedido4);


let carrito = [];


const productos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById('carritoContenedor')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const precioTotal = document.getElementById("precioTotal");
const activarFuncion = document.getElementById('activarFuncion')
const procesarCompra = document.getElementById('procesarCompra')

if(activarFuncion) {
    activarFuncion.addEventListener('click', compraCarrito)
}

document.addEventListener("DOMContentLoaded", () => {
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    

    mostrarCarrito()
    if(activarFuncion){
        document.getElementById("activarFuncion").click(compraCarrito);
    }
    
})

if (vaciarCarrito) {
    vaciarCarrito.addEventListener("click", () => {
      carrito.length = [];
      mostrarCarrito();
    });
  }

if(procesarCompra){
    procesarCompra.addEventListener("click", () => {
        if (carrito.length === 0) {
          Swal.fire({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar con la compra",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        } else {
          location.href = "carrito.html";
        }
    });
}

//CONTENEDOR PRODUCTOS

arrayProductos.forEach((producto) => {
    const { id, corte, price, img, cantidad } = producto;
    if(productos){
        productos.innerHTML += `
                <div class = "shop-card">
                    <h5> ${corte} </h5>
                    <div class = "slider">
                        <img src="${img}">
                    </div>
                    <div class="cta">
                        <p class="price">$ ${price} </p>
                        <p class="card-text">Cantidad: ${cantidad}</p>
                        <button class="btn" id = "boton${id}" >Agregar al Carrito</button>
                    </div>
                </div>`;
    
            const boton = document.getElementById(`boton${id}`);
            boton.addEventListener("click", () => {
                addToCart(id);
            })
    }
})


//AGREGAR PRODUCTOS CARRITO 

const addToCart = (id) => {
    const productInCard = carrito.find((producto) => producto.id === id);
    if(productInCard){
        productInCard.cantidad++
    } else {
        const producto = arrayProductos.find((producto) => producto.id === id);
        carrito.push(producto);
        
    }
    mostrarCarrito()
};
const mostrarCarrito = () => {
    const body = document.querySelector(".modal #modal-body");
    if (body) {
        body.innerHTML = "";
        carrito.forEach((prod) => {
        const { id, corte, price, cantidad } = prod;
        body.innerHTML += `
            <div class="modal-contenedor">
                <div>
                    <p>Producto: ${corte}</p>
                    <p>Precio: ${price}</p>
                    <p>Cantidad :${cantidad}</p>
                    <button class="btn btn-danger" id = "boton${id}">Eliminar producto</button>
                </div>
            </div>
    
        `;
        const boton = document.getElementById(`boton${id}`)
        boton.addEventListener('click', () => {
            eliminarDelCarrito(id)
        })
      });
    }
  
    // if (carrito.length === 0) {
    //   console.log("Nada");
    //   body.innerHTML = `
    //   <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    //   `;
    // } else {
    //   console.log("Algo");
    // }
    contenedorCarrito.textContent = carrito.length;
  
    // if (precioTotal) {
    //   precioTotal.innerText = carrito.reduce(
    //     (acc, prod) => acc + prod.cantidad * prod.precio,
    //     0
    //   );
    // }
    guardarStorage()
    
}
//Función que elimina el producto del carrito: 

const eliminarDelCarrito = (id) => {
    // const producto = carrito.find( producto => producto.id === id);
    // const indice = carrito.indexOf(producto);
    // carrito.splice(indice, 1);
    const juegoId = id;
    carrito = carrito.filter((juego) => juego.id !== juegoId);
    //localStorage: 
    mostrarCarrito()
    
}

const guardarStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}




const compraCarrito = () => {
    
    const listaCompra = document.querySelector("#lista-compra tbody");
    
    carrito.forEach((prod) => {
            const { id, corte, price, img, cantidad } = prod;
            if (listaCompra) {
              const tr = document.createElement("tr");
              row.innerHTML += `
                        <td>
                        <img class="img-fluid img-carrito" src="${img}"/>
                        </td>
                        <td>${corte}</td>
                        <td>${price}</td>
                        <td>${cantidad}</td>
                        <td>${price * cantidad}</td>
                    `;
              listaCompra.appendChild(tr);
            }
          });
    guardarStorage()
}



