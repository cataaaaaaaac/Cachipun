
function mostrarNombre(){

    let nombre = document.querySelector("#nombreUsuario").value;
    document.querySelector("#jugador1Nombre").textContent=nombre;
}



function jugadaUsuario(jugada){
    const Jusuario = document.getElementById("Jusuario");
    if (jugada === 1 ){
        Jusuario.src = "img/piedra.png";
    }else if ( jugada === 2){
        Jusuario.src = "img/papel.png";
    }else if (jugada === 3){
        Jusuario.src = "img/tijera.png";
    }

    let bot = Jugadabot()
    Puntaje(jugada,bot);
}

function Jugadabot(){
    let azar = Math.floor(Math.random()*3) +1
    
    if(azar== 1){
        document.querySelector("#Jbot").src = "img/piedra.png"
    }
    if(azar == 2){
        document.querySelector("#Jbot").src = "img/papel.png"
    }
    if (azar == 3){
         document.querySelector("#Jbot").src = "img/tijera.png"
    }
    return azar;
}

let empates = 0;
let puntosB= 0;
let puntosU = 0;

function Puntaje(a,b){

if((a==1 && b==1) || (a==2 && b==2) || (a==3 && b==3)) {
    empates++;
    document.querySelector("#ptsEmpates").textContent=empates;
} 
if( (a==1 && b==2) ||( a==2 && b==3 )|| (a==3 && b==1) ){
    puntosB++;
    document.querySelector("#ptsJugador2").textContent=puntosB;
}
if( (a==2 && b==1 )||( a==3 && b==2) || (a==1 && b==3)){
puntosU++;
document.querySelector("#ptsJugador1").textContent=puntosU;

 }

}

function Reiniciar(){

empates = 0;
puntosB= 0;
puntosU = 0;

document.querySelector("#ptsEmpates").textContent=empates;
document.querySelector("#ptsJugador2").textContent=puntosB;
document.querySelector("#ptsJugador1").textContent=puntosU;

}








