//1 es piedra, 2 es papel, 3 es tijera 

let jugador = 0
let pc = 2
jugador = prompt("Elige:1 para piedra, 2 para pepele, 3 para tijera")
//alert("Elegistes " + jugador)
if(jugador == 1){
    alert("Elegistes piedra" )
} else if(jugador == 2){
    alert("Elegistes papel")
} else if(jugador == 3){
    alert("Elegistes  tijera")
} else{
    alert("Elegistes  perder")
}