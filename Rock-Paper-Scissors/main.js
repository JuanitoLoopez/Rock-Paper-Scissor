var pcEleccion;
var tuEleccion;
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

// La PC elige 
function pcChoose () {
    var aleatorio = Math.floor(Math.random() * 2.999999999999999);
  
    switch (aleatorio) {
        case 0:
        pcEleccion = "Rock";
        break;

        case 1: 
        pcEleccion = "Paper";
        break;

        default:
        pcEleccion = "Scissors";
    }
/*    if (aleatorio == 0){
     pcEleccion = "Rock";
    }
    else if (aleatorio == 1){
        pcEleccion = "Paper";
    }
    else if (aleatorio == 2){
        pcEleccion = "Scissors";
    } */
}
pcChoose();

function elegirPiedra () {
    tuEleccion = "Rock";
    jugar (tuEleccion, pcEleccion);
    pcChoose();
}
function elegirPapel () {
    tuEleccion = "Paper";
    jugar (tuEleccion, pcEleccion);
    pcChoose();
}
function elegirTijera () {
    tuEleccion = "Scissors";
    jugar (tuEleccion, pcEleccion);
    pcChoose();
}

// Se determina quien Gana
document.getElementById("comment").innerHTML = "PLAY NOW!!!"
function jugar (tuEleccion, pcEleccion) {
    if (tuEleccion == "Rock" && pcEleccion == "Scissors") {
        document.getElementById("comment").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        if (active2of3Mode === true) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
            }
        }
        if (active3of5Mode === true) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
            }
        }
    }
    else if (tuEleccion == "Paper" && pcEleccion == "Rock"){
        document.getElementById("comment").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        if (active2of3Mode === true) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
            }
        }
        if (active3of5Mode === true) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
            }
        }
    }
    else if (tuEleccion == "Scissors" && pcEleccion == "Paper"){
        document.getElementById("comment").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion;
        document.getElementById("result").innerHTML = "YOU WIN!"
        amountPlayer++;
        counting(amountPC, amountPlayer);
        if (active2of3Mode === true) {
            if (amountPlayer > 1 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 2 of 3!";
                reset();
            }
        }
        if (active3of5Mode === true) {
            if (amountPlayer > 2 ) {
                document.getElementById("mode").innerHTML = "YOU WIN 3 of 5!";
                reset();
            }
        }
    }
    else if (tuEleccion == pcEleccion){
        document.getElementById("comment").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion;
        document.getElementById("result").innerHTML = "TIE!"
    }
    else {
        document.getElementById("comment").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion;
        document.getElementById("result").innerHTML = "YOU LOSE!"
        amountPC++;
        counting(amountPC, amountPlayer);
        if (active2of3Mode === true) {
            if (amountPC > 1 ) {
                document.getElementById("mode").innerHTML = "PC WIN 2 of 3!";
                reset();
            }
        }
        if (active3of5Mode === true) {
            if (amountPC > 2 ) {
                document.getElementById("mode").innerHTML = "PC WIN 3 of 5!";
                reset();
            }
        }
    }
}

//Se determina el conteo. 
function counting (amountPC, amountPlayer) {
    document.getElementById("countingPCid").innerHTML = amountPC;
    document.getElementById("countingPlayerid").innerHTML = amountPlayer;
}
counting(amountPC, amountPlayer);

//Se resetea el conteo.
var buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", reset); 
function reset () {
    amountPC = 0;
    amountPlayer = 0;
    counting(amountPC, amountPlayer);
}

// modes
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