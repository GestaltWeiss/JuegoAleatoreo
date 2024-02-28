

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;
function AsisgnarTextoElemento(elemento, texto){
    let ElementoHTML= document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}
function VerificarIntento(){
    console.log(intentos);
    let numeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        AsisgnarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario > numeroSecreto){
            AsisgnarTextoElemento('p', 'El numero es menor');
        }else{
            AsisgnarTextoElemento('p','El numero es mayor');
        }
    }
    intentos++;
    LimpiarCaja();
}
function CondicionesInciales(){
    AsisgnarTextoElemento('h1', 'El maravillozo juego del numero secreto');
    AsisgnarTextoElemento('p', `Introduce un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroAleatorio();
    console.log(numeroSecreto);
    intentos = 1;
}
function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    //Si ya sorteamos todos los numero 
    if (listaNumerosSorteados.length == numeroMaximo){
        AsisgnarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else {
        //Si el numero generado esta incluido en la lista
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function LimpiarCaja(){
   document.querySelector('#ValorUsuario').value='';
}
function reiniciarJuego(){
    //limpiar caja
    LimpiarCaja();
    //indicar intervalo de los numeros
    CondicionesInciales();
    //deshabilitar el boton de reinicio 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
CondicionesInciales();