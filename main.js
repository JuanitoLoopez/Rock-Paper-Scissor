var pcEleccion;
var tuEleccion;

function pcChooseAgain () {
    var aleatorio = Math.floor(Math.random() * 2.999999999999999);
    if (aleatorio == 0){
     pcEleccion = "Rock";
    }
    else if (aleatorio == 1){
        pcEleccion = "Paper";
    }
    else if (aleatorio == 2){
        pcEleccion = "Scissors";
    }
}

var aleatorio = Math.floor(Math.random() * 2.999999999999999);
    
if (aleatorio == 0){
     pcEleccion = "Rock";
}
else if (aleatorio == 1){
    pcEleccion = "Paper";
}
else if (aleatorio == 2){
    pcEleccion = "Scissors";
}

var x = document.getElementById("piedra");
var y = document.getElementById("papel");
var z = document.getElementById("tijera");
x.addEventListener("click", elegirPiedra);
y.addEventListener("click", elegirPapel);
z.addEventListener("click", elegirTijera);

function elegirPiedra () {
    tuEleccion = "Rock";
    jugar (tuEleccion, pcEleccion);
    pcChooseAgain();
}
function elegirPapel () {
    tuEleccion = "Paper";
    jugar (tuEleccion, pcEleccion);
    pcChooseAgain();
}
function elegirTijera () {
    tuEleccion = "Scissors";
    jugar (tuEleccion, pcEleccion);
    pcChooseAgain();
}

function jugar (tuEleccion, pcEleccion) {
    if (tuEleccion == "Rock" && pcEleccion == "Scissors"){
        document.getElementById("result").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion + " You Win!";
    }
    else if (tuEleccion == "Paper" && pcEleccion == "Rock"){
        document.getElementById("result").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion + " You Win!";
    }
    else if (tuEleccion == "Scissors" && pcEleccion == "Paper"){
        document.getElementById("result").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion + " You Win!";
    }
    else if (tuEleccion == pcEleccion){
        document.getElementById("result").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion + " Tie!";
    }
    else {
        document.getElementById("result").innerHTML = "The PC choose " + pcEleccion + " and you choose " + tuEleccion + " You Lose!";
    }
}