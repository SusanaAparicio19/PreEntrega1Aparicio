
alert('Hola, Bienvenido a 46 Soles!!!');

let pregunta = prompt('Deseas comprar un producto ? (s-si)');
let total = 0;
let cantidad = 0;
let cantidadIngresada
let costoEnvio = 200;


while(pregunta.toLowerCase() == 's'){
    let menu = prompt('Macetas:\n1 - Macetas Face\n2 - Macetas Lady\n3 - Macetas Black&White\nColgantes:\n4 - Colgante ArcoIris\n5 - Colgante Arbol\n6 - Colgante Mariposa\nCuadros:\n7 - Cuadro Triptico Arbol\n8 - Cuadro Abstracto');

    //condicional switch para ver producto y cantidad
    switch(menu){
        case '1':
            alert('Seleccionaste "Macetas Face"\nValor por unidad $1000');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(1000);
            break;
        case '2':
            alert('Seleccionaste "Macetas Lady"\nValor por unidad $1500');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(1500);
            break;
        case '3':
            alert('Seleccionaste "Macetas Black&White"\nValor por unidad $2000');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(2000);
            break;
        case '4':
            alert('Seleccionaste "Colgante ArcoIris"\nValor por unidad $1100');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(1100);
            break;
        case '5':
            alert('Seleccionaste "Colgante Arbol"\nValor por unidad $1200');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(1200);
            break;
        case '6':
            alert('Seleccionaste "Colgante Mariposa"\nValor por unidad $1300');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(1300);
            break;
        case '7':
            alert('Seleccionaste "Cuadro Triptico Arbol"\nValor por unidad $5000');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(5000);
            break;
        case '8':
            alert('Seleccionaste "Cuadro Abstracto"\nValor por unidad $6000');
            cantidadIngresada = parseInt(prompt('Cuantas necesitas?'));
            sumarCantidad(cantidadIngresada);
            sumarAlTotal(6000);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
    
    pregunta = prompt('Deseas comprar otro producto ? (s-si n-no)');
}

let envioSinCargo = (total > 6000);

let resumen = prompt('Resumen de tu Compra\n- Cantidad de Articulos: ' +cantidad+'\n- Total Sin IVA: $' +total+'\n- Total Con IVA: $' +(total*1.21)+'\n- Envio Gratis: '+envioSinCargo+ '\n  (Costo Envio $200 - Envio Sin Cargo en compras superiores a $6000)\n\n Deseas comprarlo ?? (s-si n-no)');

// saludo de cierre
if (resumen.toLowerCase() == 's'){
        alert('Gracias Por tu Compra!!');
}else{
    alert('Gracias por visitar nuestra página!!');
}

//uso funcion para calcular cantidad
function sumarCantidad(cantidadIngresada){
    cantidad = cantidad + cantidadIngresada;
}    

//uso una funcion para calcular el total de la compra
function sumarAlTotal(precio){
    total = total + (precio*cantidadIngresada);
    alert('Articulos Seleccionados ' +cantidad+'\nSubtotal hasta el momento $'+total);
}
