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
    -Dichiaro delle variabili per i numeri
    -Ciclo attraverso ogni elemento con classe "pad_number" e aggiungo un event listener; ad ogni click eseguo la funzione addNumber
    -La funzione addNumber() si occuperà di far visualizzare il numero digitato in pagina al posto dello 0
Milestone 2: 
    -Aggiungo gli event listener ai vari operatori
    -Creo una funzione per salvare il primo numero digitato e l'operatore corrente, resettando il valore visualizzato a 0
Milestone 3:
    -Creo una funzione per ottenere il risultato e visualizzarlo sulla calcolatrice
Milestone 4:
    -Creo una funzione per resettare i valori dell'operatore corrente e dei due numeri al click di C
Bonus: 
    
