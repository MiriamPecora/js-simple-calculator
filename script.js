// Dichiaro delle variabili per i numeri
let padNumber = document.getElementsByClassName("pad_number");
let result = document.getElementById("result");
let currentOp;
let firstNumber;
let secondNumber;

// **** FUNZIONE PER VISUALIZZARE I NUMERI DIGITATI ****

// Ciclo attraverso ogni elemento con classe "pad_number" e aggiungo un event listener; ad ogni click eseguo la funzione addNumber
for(let i = 0; i < padNumber.length; i++) {
    padNumber[i].addEventListener("click", addNumber)
};

function addNumber() {
    result.textContent = this.textContent;
}

// **** FUNZIONI PER LE OPERAZIONI ****

// Aggiungo gli event listener ai vari operatori
document.getElementById("sum_symbol").addEventListener("click", getFirstNumberAndOperator);
document.getElementById("substract_symbol").addEventListener("click", getFirstNumberAndOperator);
document.getElementById("multiplication_symbol").addEventListener("click", getFirstNumberAndOperator);
document.getElementById("divide_symbol").addEventListener("click", getFirstNumberAndOperator);
document.getElementById("equals_symbol").addEventListener("click", getResult);

// Creo una funzione per salvare il primo numero digitato e l'operatore corrente, resettando il valore visualizzato a 0
function getFirstNumberAndOperator(){
    firstNumber = parseInt(result.textContent);
    currentOp = this.textContent;
    result.textContent = 0;
}

// Creo una funzione per ottenere il risultato e visualizzarlo sulla calcolatrice
function getResult(){
    secondNumber = parseInt(result.textContent);

    // Anziché creare diverse funzioni da eseguire ad ogni switch case, eseguo le operazioni direttamente in questa funzione per non fare ripetizioni eccessive
    switch (currentOp) {
        case "+":
            result.textContent = firstNumber + secondNumber;
            break;
        case "-":
            result.textContent = firstNumber - secondNumber;
            break;
        case "×":
            result.textContent = firstNumber * secondNumber;
            break;
        case "÷":
            result.textContent = firstNumber / secondNumber;
                //Aggiungo la condizione per cui verifico se uno dei due numeri è == a 0, in quel caso non continuo l'operazione e mostro un messaggio di errore 
                if (firstNumber == 0 || secondNumber == 0) {
                    result.textContent = "error";
                    // console.log("Stai cercando di dividere per 0!")
                }
            break;
    
        default:
            console.log("Errore nel controller dell'operatore: ", currentOp);
            break;
    }
}

// **** FUNZIONE PER RESETTARE IL CALCOLO ****

// Al click del bottone "C", eseguo la funzione resetCalc
document.getElementById("canc_btn").addEventListener("click", resetCalc);

// All'interno della funzione, riporto a 0 i valori numerici e a " " l'operatore corrente
function resetCalc() {
    // Inserisco "canc" per debug
    result.textContent = "canc";
    firstNumber = 0;
    secondNumber = 0;
    currentOp = "";
    console.log(firstNumber, secondNumber, currentOp)
    // console.log("voglio resettare");
}

