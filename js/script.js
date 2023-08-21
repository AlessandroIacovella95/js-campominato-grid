// //* Creo una funzione per generare una cella
// function generateCell() {
//     const cell = document.createElement('li');
//     cell.className = 'cell';
//     //* Evento al click sulla cella
//     cell.addEventListener('click', function () {
//         this.classList.toggle('color_cells')
//         console.log(this.innerText)
//     });
//     return cell;
// }

// //* Recupero dal DOM gli elementi di interesse

// //* Recupero l'elemento grid
// const grid = document.getElementById('grid');

// //* Recupero l'elemento button
// const button = document.getElementById('button');

// //* Numero delle celle totali
// const rows = 10;
// const cells = 10;
// const totalCells = rows * cells;

// //* Evento button per generare la griglia al click
// button.addEventListener('click', function() {
//     grid.innerHTML = "";

//     //* Ciclo FOR
//     for (let i = 1; i <= totalCells; i++) {
//         const cell = generateCell();
//         grid.appendChild(cell);
//         cell.innerHTML = i;
//     }
// })

//* BONUS
//* Recupero l'elemento grid
const grid = document.getElementById('grid');

//* Recupero l'elemento button
const button = document.getElementById('button');
//* Evento button per generare la griglia al click
button.addEventListener('click', function(){
    generateGrid()
})

//* Recupero elemento dal DOM con id floatingSelect
const difficultyEl = document.getElementById('floatingSelect');
//*Funzione Griglia
function generateGrid() {
    const difficulty = difficultyEl.value
    let size;
    //* Dimensioni della griglia in base alla difficoltà scelta
    switch (difficulty) {
        case 'easy':
            size = 10;
            break;
        case 'medium':
            size = 9;
            break;
        case 'hard':
            size = 7;
            break;
    }

    grid.innerHTML = '';
    //* Ciclo FOR per creazione delle celle della griglia
    for (let i = 1; i <= (size * size); i++) {
        const cell = document.createElement('li');
        cell.className = 'cell';
        cell.innerText = i;
        //* Controllo per le dimensioni della griglia
        cell.style.width = (100 / size) + '%';
        cell.style.height = (100 / size) + '%';
        //* Evento sul click della cella
        cell.addEventListener('click', function () {
            this.classList.toggle('color_cells')
            console.log(this.innerText)
        });

        grid.appendChild(cell);
    }
}



