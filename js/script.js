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

//* Recupero elemento dal DOM con id floatingSelect
const difficultyEl = document.getElementById('floatingSelect');

//* Funzione per generare una cella
function generateCell(cellSize) {
    for (let i = 1; i <= (cellSize * cellSize); i++) {
        const cell = document.createElement('li');
        cell.setAttribute('data-index', i)
        cell.className = 'cell';
        //* Controllo per le dimensioni della griglia
        cell.style.width = (100 / cellSize) + '%';
        cell.style.height = (100 / cellSize) + '%';
        //* Evento sul click della cella
        cell.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'))
            this.innerText = index
            this.classList.add('color_cells')
            console.log(this.innerText)
            this.innerText = ''
        });
        
        grid.appendChild(cell);
    }  
}

//*Funzione per generare una griglia
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
    //* Invoco la funzione per creare una cella
    generateCell(size)
}

//* Evento button per generare la griglia al click
button.addEventListener('click', function(){
    generateGrid()
})




