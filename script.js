// Dichiaro delle variabili per selezionare gli elementi dal DOM
let padNumber = document.getElementsByClassName("pad_number");
let result = document.getElementById("result");
let padOperator = document.getElementsByClassName("pad_operator");

// Dichiaro delle variabili per i numeri e le operazioni che serviranno nelle funzioni
let firstNumber;
let secondNumber;
let currentOp;

// Ciclo attraverso ogni elemento con classe "pad_number" e aggiungo un event listener; ad ogni click eseguo la funzione addNumber
for(let i = 0; i < padNumber.length; i++) {
    padNumber[i].addEventListener("click", addNumber)
};

// Definisco la funzione che servirà a memorizzare nelle variabili di prima i valori del primo e del secondo numero digitato, scrivendoli al posto dello "0"
function addNumber() {
    result.textContent = this.textContent;
    var parsedNumber = parseInt(result.textContent);
    
    // Verifico se il primo numero è stato già digitato, in caso contrario il valore viene assegnato al secondo numero
    if (!isNaN(parsedNumber)) {
        if (typeof firstNumber === 'undefined') {
            firstNumber = parsedNumber;
        } else {
            secondNumber = parsedNumber;
        }
    }

    console.log(firstNumber, secondNumber);
    // Tramite return, ottengo un array contenenti i due valori digitati
    return [firstNumber, secondNumber];
}







