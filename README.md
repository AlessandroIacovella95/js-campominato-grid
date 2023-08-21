# Esercizio di oggi: Griglia Campo Minato

## Traccia:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento:
- Recupero dal DOM gli elementi di interesse
  - Recupero l'elemento grid
  - Recupero l'elemento button
- Dichiaro tramite const il numero totale delle celle della griglia
- Creo una funzione per generare una cella e l'evento al click delle cella stessa
- Creo un addEventListener per generare la griglia al click del button
  - Ciclo **FOR** per generare un numero pari di celle uguale alla variabile totalCells
- Stampo in console il numero della cella cliccata