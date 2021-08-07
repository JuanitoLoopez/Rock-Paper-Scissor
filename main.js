var pcEleccion;
var playerEleccion;
var amountPC = 0;
var amountPlayer = 0;
var active2of3Mode = false;
var active3of5Mode = false;

var x = document.getElementById("piedra");
var y = document.getElementById("papel");
var z = document.getElementById("tijera");
x.addEventListener("click", elegirPiedra);
y.addEventListener("click", elegirPapel);
z.addEventListener("click", elegirTijera);

// La PC elige su respuesta / The PC choose its election  
function pcChoose () {
    var random = Math.floor(Math.random() * 2.999999999999999);  
    switch (random) {
        case 0:
        pcEleccion = "Rock";
        break;

        case 1: 
        pcEleccion = "Paper";
        break;

        default:
        pcEleccion = "Scissors";
    }
}
pcChoose();

function elegirPiedra () {
    playerEleccion = "Rock";
    jugar (playerEleccion, pcEleccion);
    pcChoose();
}
function elegirPapel () {
    playerEleccion = "Paper";
    jugar (playerEleccion, pcEleccion);
    pcChoose();
}
function elegirTijera () {
    playerEleccion = "Scissors";
    jugar (playerEleccion, pcEleccion);
    pcChoose();
}

// Se determina quien Gana / Who wins is determined
document.getElementById("result").innerHTML = "PLAY NOW!!!";
function jugar (playerEleccion, pcEleccion) {
    if (playerEleccion == "Rock" && pcEleccion == "Scissors") {
        document.getElementById("comment").innerHTML = "You choose " + playerEleccion + " and PC choose "  + pcEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        removeText();
        if (active2of3Mode) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
                removeModeText();
            }
        }
        if (active3of5Mode) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
                removeModeText();
            }
        }
    }
    else if (playerEleccion == "Paper" && pcEleccion == "Rock"){
        document.getElementById("comment").innerHTML = "You choose " + playerEleccion + " and PC choose "  + pcEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        removeText();
        if (active2of3Mode) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
                removeModeText();
            }
        }
        if (active3of5Mode) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
                removeModeText();
            }
        }
    }
    else if (playerEleccion == "Scissors" && pcEleccion == "Paper"){
        document.getElementById("comment").innerHTML = "You choose " + playerEleccion + " and PC choose "  + pcEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        removeText();
        if (active2of3Mode) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
                removeModeText();
            }
        }
        if (active3of5Mode) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
                removeModeText();
            }
        }
    }
    else if (playerEleccion == pcEleccion){
        document.getElementById("comment").innerHTML = "You choose " + playerEleccion + " and PC choose "  + pcEleccion;
        document.getElementById("result").innerHTML = "TIE!"
        removeText();
    }
    else {
        document.getElementById("comment").innerHTML = "You choose " + playerEleccion + " and PC choose "  + pcEleccion;
        document.getElementById("result").innerHTML = "YOU LOSE!"
        amountPC++;
        counting(amountPC, amountPlayer);    
        removeText();
        
        if (active2of3Mode) {
            if (amountPC > 1 ) {
                document.getElementById("mode").innerHTML = "PC WIN 2 of 3!";
                reset();
                removeModeText();
            }
        }
        else if (active3of5Mode) {
            if (amountPC > 2 ) {
                document.getElementById("mode").innerHTML = "PC WIN 3 of 5!";
                reset();
                removeModeText();
            }
        }

    }
}

// Remueve el texto despues de ganar / Remove the text after win
function removeText () {
    setTimeout( function (){
        document.getElementById("comment").innerHTML = "";
        document.getElementById("result").innerHTML = "";
    }, 5000);
}
function removeModeText () {
    setTimeout(function(){
        document.getElementById("mode").innerHTML = "";
    }, 3000)
}

//Se determina el conteo. / The count is determined
function counting (amountPC, amountPlayer) {
    document.getElementById("countingPCid").innerHTML = amountPC;
    document.getElementById("countingPlayerid").innerHTML = amountPlayer;
}
counting(amountPC, amountPlayer);

//Se resetea el conteo / Reset the count 
var buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", reset); 
function reset () {
    amountPC = 0;
    amountPlayer = 0;
    counting(amountPC, amountPlayer);
}

// Modos de Juego 2of3 y 3of5 / Modes Games 2of3 and 3of5
var infinitive = document.getElementById("infinitiveMode");
infinitive.addEventListener("click", infinitiveMode);
var twoOfThree = document.getElementById("2of3Mode");
twoOfThree.addEventListener("click", twoOfThreeMode);
var threeOfFive = document.getElementById("3of5Mode");
threeOfFive.addEventListener("click", threeOfFiveMode);

document.getElementById("chooseMode").innerHTML = "Infinitive Mode";
function infinitiveMode () {
    document.getElementById("chooseMode").innerHTML = "Infinitive Mode";
    active2of3Mode = false;
    active3of5Mode = false;
    reset();
}
function twoOfThreeMode () {
    document.getElementById("chooseMode").innerHTML = "2 of 3 Mode";
    active2of3Mode = true;
    active3of5Mode = false;
    reset();
}
function threeOfFiveMode () {
    document.getElementById("chooseMode").innerHTML = "3 of 5 Mode";
    active3of5Mode = true;
    active2of3Mode = false;
    reset();
}
