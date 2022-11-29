class Productos {

    constructor(order, achura, corte, total){

        this.order = order,
        this.achura = achura,
        this.corte = corte,
        this.total = total
        
    }
  
}

const pedido1 = new Productos(1, 'Chorizo','Vacio', 1500)
const pedido2 = new Productos(2, 'Chinchulin', 'Tapa de asado', 1450)
const pedido3 = new Productos(3, 'Morcilla y Riñon', 'Asado', 1650)
const pedido4 = new Productos(4, 'Mollejas', 'Lomo', 1800)

const arrayPedidos = []

arrayPedidos.push(pedido1)
arrayPedidos.push(pedido2)
arrayPedidos.push(pedido3)
arrayPedidos.push(pedido4)


const precioAchura = 500
const precioCarne = 1000

function showMenu() {
    alert("Bienvenido a Carnes Premiun")
    let pregunta = parseInt(prompt(`
        Elija una opcion!
        1) Realizar un pedido
        2) Modificar un pedido
        3) Seleccionar pedido exitente
        4) Salir
    `))
    return pregunta
}

function makeAnOrder() {
    let achura = prompt('Ingrese achura que desee consumir')
    let corte = prompt('Ingrese el corte de carne que desee consumir')
    let total = parseInt(alert(`El total es ` + (precioAchura + precioCarne)))
    let pedidoNuevo = new Productos(achura, corte, total)
    arrayPedidos.push(pedidoNuevo)
    console.log(arrayPedidos)
}

function updateOrder() {
    let order = parseInt(prompt('Ingrese el numero de orden'))
    let indice = arrayPedidos.find(indice => indice.order === order)
    let index = arrayPedidos.indexOf(indice)
    let achura = prompt('Ingrese achura nueva')
    let corte = prompt('Ingrese corte nuevo')
    let total = parseInt (alert(`El total es ` + (precioAchura + precioCarne)))
    let pedidoModificado = new Productos(order, achura, corte, total)
    arrayPedidos.splice(index, 1, pedidoModificado)
    console.log(arrayPedidos)
}

function showOrders() {
    let newArray = arrayPedidos
    for (let index = 0; index < newArray.length; index++) {
        const element = newArray[index];
        console.log(element)
    }
    let order = parseInt(prompt('Ingrese el numero de orden'))
    let indice = arrayPedidos.find(indice => indice.order === order)
    console.log(indice)
}

function leave(){
    alert('Gracias por probar esta simulacion')
}


let menu = showMenu()

if(menu === 1){
    makeAnOrder()

} else if( menu === 2){
    updateOrder()

}
else if(menu === 3){
    showOrders()
}
else{
    leave()
}



