// COMPRA DE ENTRADAS DE EVENTO

let evento = 0
let cantidadAdulto = 0
let cantidadMenor = 0
let precioAdulto = 0
let precioMenor = 0
let totalAdulto = 0
let totalMenor = 0
let totalCompra = 0
let seguirComprando = true

alert("Aquí podrás adquirir las entradas al evento que quieras asistir.")

const compra = () => {

    do {
       evento = parseInt(prompt("¿A cuál evento deseas asistir: 1, 2 o 3?\n 1 - Evento A\n 2 - Evento B\n 3 - Evento C"))
 
        switch (evento) {
            case 1: 
                alert("Elegiste el evento A. El precio por adulto es de $1000 y por menor es de $500")
                precioAdulto = 1000
                precioMenor = 500
                break;
            case 2:
                alert("Elegiste el evento B. El precio por adulto es de $1500 y por menor es de $700")
                precioAdulto = 1500
                precioMenor = 700
                 break

            case 3: 
            alert("Elegiste el evento C. El precio por adulto es de $2000 y por menor es de $1000")
                precioAdulto = 2000
                precioMenor = 1000        
                break

            default: 
                alert("Este evento no existe")
                seguirComprando = false
                break;
        }
    
    
    } while (!seguirComprando);
}

compra()

cantidadAdulto = parseInt(prompt("¿Cuántos adultos asistirán?"))
cantidadMenor = parseInt(prompt("¿Cuántos menores asistirán?"))

if (cantidadAdulto > 0) {
    totalAdulto = cantidadAdulto * precioAdulto
    alert("El total por adultos es: $" + totalAdulto)
}

if(cantidadMenor > 0){
    totalMenor = cantidadMenor * precioMenor
    alert("El total por menores es: $" + totalMenor)
}

totalCompra = totalAdulto + totalMenor
alert("El total por las entradas es: $" + totalCompra)






