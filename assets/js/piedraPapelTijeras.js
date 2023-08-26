// variables: 
let cantGanadaComputadora=0;
let cantGanadaUsuario=0;
const opcinesJuego=["piedra","papel","tijeras"];
const posibleJugada=["Empate","Gana la computadora","Gana el usuario"];
const nombreJugador=document.getElementById("nombre");

let eleccionPiedra=document.getElementById("piedra");
let eleccionPapel=document.getElementById("papel");
let eleccionTijera=document.getElementById("tijera");

// Funcion de la Computadora
function obtenerJugadaComputadora(){
    let jugadaObtenida;
    jugadaObtenida=Math.floor(Math.random()*3);
    return opcinesJuego[jugadaObtenida];
}
// Fución Ganador
function determinarGanador(jugadaComputadora,jugadaUsuario){
    let resultado;
    if((jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[0])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[1])){
        resultado=posibleJugada[1];
    }else if((jugadaComputadora===opcinesJuego[1]&&jugadaUsuario===opcinesJuego[2])||
             (jugadaComputadora===opcinesJuego[0]&&jugadaUsuario===opcinesJuego[1])||
             (jugadaComputadora===opcinesJuego[2]&&jugadaUsuario===opcinesJuego[0])){
        resultado=posibleJugada[2];
    }else {
        resultado=posibleJugada[0];
    }
    return resultado;
}
// Función jugar Piedra Papel o Tijera()
function jugarPiedraPapelTijera(jugadaUsuario){
    
    //Validación de Campo Nombre del usuario
    if(nombreJugador.value==""){
        alert("Error Debe ingresar un nombre al usuario");
        return;
    }
    //Variables locales de la Fución
    let ganadorPrevio;
    let jugadaComputadora= obtenerJugadaComputadora();       
    //imprimir la jugada
    document.getElementById("jugadaPC").innerHTML="La computadora eligio: "+jugadaComputadora;
    document.getElementById("jugadaUsuario").innerHTML="El usuario eligio: "+jugadaUsuario;
   //variable de quien gano
   ganadorPrevio=determinarGanador(jugadaComputadora,jugadaUsuario);
   if(ganadorPrevio===posibleJugada[1]){
       cantGanadaComputadora+=1;
   }else if(ganadorPrevio===posibleJugada[2]){
       cantGanadaUsuario+=1;
   }
   document.getElementById("jugada").innerHTML="La computadora: "+cantGanadaComputadora+" y el usuario: "+cantGanadaUsuario;
   if(cantGanadaComputadora===3){
   
        document.getElementById("resultado").innerHTML="Perdiste el juego "+ nombreJugador.value +" Para la proxima";
    } 
    if(cantGanadaUsuario===3){
        
        document.getElementById("resultado").innerHTML="Ganaste "+ nombreJugador.value +" Felicitaciones...!!!"
    }
}

function reinicioJuego(){
    document.getElementById("jugadaPC").innerHTML="";
    document.getElementById("jugadaUsuario").innerHTML="";
    document.getElementById("jugada").innerHTML="";
    document.getElementById("resultado").innerHTML="";
}

    // Eleccion del Usuario

    eleccionPiedra.addEventListener("click",()=>{
         jugarPiedraPapelTijera(opcinesJuego[0]);
    })
    eleccionPapel.addEventListener("click",()=>{
        jugarPiedraPapelTijera(opcinesJuego[1]);
    })
    eleccionTijera.addEventListener("click",()=>{
        jugarPiedraPapelTijera(opcinesJuego[2]);
    })
    