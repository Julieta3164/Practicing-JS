//1 es piedra, 2 es papel, 3 es tijera 
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}
let jugador = 0
let pc = aleatorio(1,3)
jugador = prompt("Elige:1 para piedra, 2 para pepele, 3 para tijera")
//alert("Elegistes " + jugador)
if(jugador == 1){
    alert("Elegistes 🪨 " )
} else if(jugador == 2){
    alert("Elegistes 📃 ") 
} else if(jugador == 3){
    alert("Elegistes ✂️ ")
} else{
    alert("Elegistes  PERDER")
}

if(pc == 1){
    alert("PC elige 🪨 " )
} else if(pc == 2){
    alert("PC elige📃 ") 
} else if(pc == 3){
    alert("PC elige ✂️ ")
} 
//COMBATE
if(pc == jugador){
    alert("Empate")
}else if(jugador ==1 && pc == 3){
    alert("Ganaste")
}else if(jugador == 2 && pc== 1){
    alert("Ganastes")}
else if(jugador == 3 && pc== 1){
    alert("Ganastes")
} else {
    alert("Perdiste")
}