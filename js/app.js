const carrito = [
    {id: 198752, name: "Tinta DJ27 Color", price: 52.95, count: 3, premium: true},
    {id: 75621, name: "Impresora ticketera PRO-201", price: 32.75, count: 2, premium: true},
    {id: 54657, name: "Caja de rollos de papel para ticketera", price: 5.95, count: 3, premium: false},
    {id: 3143, name: "Caja de folios DIN-A4 80gr", price: 9.95, count: 2, premium: true}
];

console.log("*******************************************************************************")
console.log("******* EJERCICIO 1: LISTAR TODOS LOS PRODUCTOS (SOLUCION 1) ******************")
console.log("*******************************************************************************")
for (cartItem of carrito)  
    imprimirItem(cartItem);

function imprimirItem(item) {
    for (dataItem in item)
        console.log (dataItem.toUpperCase() + ": " + item[dataItem]);
    console.log("================================================")
}



console.log("*******************************************************************************")
console.log("******* EJERCICIO 1: LISTAR TODOS LOS PRODUCTOS (SOLUCION 2) ******************")
console.log("*******************************************************************************")
for (cartItem of carrito) { 
    for (dataItem in cartItem)
        console.log (dataItem.toUpperCase() + ": " + cartItem[dataItem]);1
    console.log("================================================")
}



console.log("*******************************************************************************")
console.log("******* EJERCICIO 2: ELIMINAR UN PRODUCTO DEL CARRITO DE LA COMPRA ************")
console.log("*******************************************************************************")

let searchItem = (id, products) => {
    let itemFound = false;
    let itemIndex = -1;
    for (j = 0; j < products.length && !itemFound; j++) {
        if (products[j].id == id) {
            itemFound = true;
            itemIndex = j;
        } 
    }
    return itemIndex;
}

let idDelete = window.prompt("Introduzca el ID del item a eliminar del carrito");
let itemIndex = searchItem(idDelete, carrito);

if(itemIndex >= 0) {
    carrito.splice(itemIndex, 1);
    console.log("Se ha eliminado el producto con id " + idDelete);
} else {
    console.log("No existe ningun producto en el carrito con id " + idDelete);
}

console.log("============= CONTENIDO CARRITO ACTUAL TRAS OPERACION ELIMINACION =============");
for (cartItem of carrito) { 
    imprimirItem(cartItem);
}



console.log("*******************************************************************************")
console.log("******* EJERCICIO 3: CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA ***************")
console.log("*******************************************************************************")
let cartTotal = 0;

for (item of carrito) {
    console.log ("Importe producto " + item.id + ":  " + item.price * item.count);
    cartTotal += item.price * item.count;
}

console.log("------------------------------------------")
console.log("Importe Total Carrito: " + cartTotal);



console.log("*******************************************************************************")
console.log("******* EJERCICIO 4: FILTRAR POR PRODUCTOS PREMIUM SOLUCION 1 *****************")
console.log("*******************************************************************************")

for (item of carrito)
    if (item.premium) imprimirItem(item);



console.log("*******************************************************************************")
console.log("******* EJERCICIO 4: FILTRAR POR PRODUCTOS PREMIUM SOLUCION 2 *****************")
console.log("*******************************************************************************")
let premiumItems = [];
for (item of carrito)
    if (item.premium) premiumItems.push(item);

for (item of premiumItems)
    imprimirItem(item);



console.log("*******************************************************************************")
console.log("******* EJERCICIO 5: SI TODOS LOS PRODUCTOS SON PREMIUM MOSTRAR MENSAJE *******")
console.log("*******************************************************************************")
let allPremium = true;

for (k = 0; k < carrito.length && allPremium; k++) {
    allPremium = allPremium && carrito[k].premium;
}

if (allPremium)
    console.log("PEDIDO SIN GASTOS DE ENVIO");
else
    console.log("ESTE PEDIDO TIENE GASTOS DE ENVIO");



console.log("*******************************************************************************")
console.log("******* EJERCICIO 6: MOSTRAR EL CARRITO EN UN HTML BASICO   *******************")
console.log("*******************************************************************************")
let body = document.getElementsByTagName("body")[0];

let cartTitle = document.createElement("h2");
cartTitle.innerText = "CONTENIDO DEL CARRITO";

let cartList = document.createElement("table");

for (product of carrito) {
    let rowProduct = document.createElement("tr");
    for (data in product) {
        let cell = document.createElement("td");
        cell.innerText = product[data];
        rowProduct.appendChild(cell); 
    }
    cartList.appendChild(rowProduct);
}

body.appendChild(cartTitle);
body.appendChild(cartList);



console.log("*******************************************************************************")
console.log("******* EJERCICIO 7: APLICAR 5% DE DESCUENTO SI LA COMPRA ES MAYOR DE 100€ ****")
console.log("*******************************************************************************")
let cartAmount = cartItems => {
    let cartPrice = 0;
    for (item of cartItems)
        cartPrice += item.price * item.count;
    return cartPrice;
}

if (cartAmount(carrito) > 100) {
    applyDiscount(carrito);
    console.log("SE HA APLICADO UN DESCUENTO DEL 5%");
}

console.log("============= CONTENIDO CARRITO ACTUAL TRAS OPERACION =============");
for (cartItem of carrito) { 
    imprimirItem(cartItem);
}

function applyDiscount(cartItems) {
    for (item of cartItems) {
        item.price = item.price * 0.95;
    }
}