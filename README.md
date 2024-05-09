<!-- CONSEGNA: -->

<!-- La nostra calcolatrice deve fare dei semplici calcoli tra due numeri interi. Quindi l'utente inserisce le cifre del primo numero, dopo dovrà cliccare sull'operazione, poi inserirà le cifre del secondo numero e infine dovrà cliccare sul tasto = per vedere il risultato. Non si può applicare più di un'operazione alla volta.
MILESTONE 1
Aggiungere event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
MILESTONE 2
aggiungere event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
MILESTONE 3
aggiungere event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
MILESTONE 4
pulsante canc: cliccando il pulsante si resetta il calcolo
:stella2: BONUS
verificare che non si stia cercando di dividere per 0 -->

<!-- RISOLUZIONE DEL PROBLEMA: -->

Milestone 1: 
    -Dichiaro delle variabili per selezionare gli elementi dal DOM
    -Dichiaro delle variabili per i numeri e le operazioni che serviranno nelle funzioni
    -Ciclo attraverso ogni elemento con classe "pad_number" e aggiungo un event listener; ad ogni click eseguo la funzione addNumber
    -Definisco la funzione che servirà a memorizzare nelle variabili di prima i valori del primo e del secondo numero digitato, scrivendoli al posto dello "0"
    -Verifico se il primo numero è stato già digitato, in caso contrario il valore viene assegnato al secondo numero
    -Tramite return, ottengo un array contenenti i due valori digitati
Milestone 2: 
    