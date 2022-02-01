/*
- due input con valore
- giocatore1.input.value
- giocatore2.input.value

- onclick "verifica" numero generato random (Math.random())
- assegnato a una variabile tipo "randomNum = ..."

- SE giocatore1.input.value == randomNum
- printa "ha vinto Giocatore1"
- SE giocatore2.input.value == randomNum
- printa "ha vinto Giocatore2"

*/

let randNumb;

window.addEventListener('load', (event) => {
    randNumb = (Math.floor(Math.random() * 100)) });

let player1guess = document.getElementById('bet1').value;
let player2guess = document.getElementById('bet2').value;
    
document.getElementById("check").addEventListener("click", checkFun);

function checkFun() {
  document.getElementById("randomNum").innerHTML = randNumb;
}

let vicino1 = randNumb - player1guess;
let vicino2 = randNumb - player2guess;

if (player1guess == randNumb) {
    document.getElementById("betOutcome").innerHTML = "Ha vinto il giocatore 1! Daje"
} else if (player2guess == randNumb) 
    {
    document.getElementById("betOutcome").innerHTML = "Ha vinto il giocatore 2! Daje"
    } 
    else {
        if (vicino1 < vicino2) {
            document.getElementById("betOutcome").innerHTML = "Non vince nessuno, ma il giocatore 1 ci è andato più vicino!"
        }
        if (vicino1 > vicino2) {
            document.getElementById("betOutcome").innerHTML = "Non vince nessuno, ma il giocatore 2 ci è andato più vicino!"
        }

    }

    document.getElementById("playAgain").addEventListener("click", clearBtn);

    function clearBtn() {
       window.location.reload();
   }
    
/*    document.getElementById("playAgain").addEventListener("click", refreshGame);
    
    function refreshGame {
    return window.location.reload()
    } */

// qui la funzione di controllo dei due guess