//* Creo una funzione per generare una cella
function generateCell() {
    const cell = document.createElement('li');
    cell.className = 'cell';
    //* Evento al click sulla cella
    cell.addEventListener('click', function () {
        this.classList.toggle('color_cells')
        console.log(this.innerText)
    });
    return cell;
}

//* Recupero dal DOM gli elementi di interesse

//* Recupero l'elemento grid
const grid = document.getElementById('grid');

//* Recupero l'elemento button
const button = document.getElementById('button');

//* Numero delle celle totali
const rows = 10;
const cells = 10;
const totalCells = rows * cells;

//* Evento button per generare la griglia al click
button.addEventListener('click', function() {
    grid.innerHTML = "";

    //* Ciclo FOR
    for (let i = 1; i <= totalCells; i++) {
        const cell = generateCell();
        grid.appendChild(cell);
        cell.innerHTML = i;
    }
})
