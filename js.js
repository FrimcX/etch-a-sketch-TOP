const container = document.querySelector('.container');
const containerSize = window.innerWidth > window.innerHeight ? '90vh' : '90vw';
container.setAttribute('style', `width: ${containerSize}; height: ${containerSize};`);
//Is it okay? I feel like was hardcode the 90vh or 90vw????


let rows = 16;
let columns = 16;

function deleteGrid() {
    const divsToDelete = document.querySelectorAll('.container div');
    for (let i = 0; i < divsToDelete.length; i++) {
        divsToDelete[i].remove();
    }
}

function randomClr() {
    return Math.floor(Math.random() * 255);
}

const button = document.querySelector('#button-number');
button.addEventListener('click', () =>{
    let numberUser = Number(prompt('How many rows/columns you want?'));
    switch (true) {
        case (numberUser == ''): {
            alert('Please input a valid number!');
            break;
        }
        case (numberUser > 100): {
            alert('The number needs to be 100 or less');
            break;
        } 
        case (numberUser <= 0): {
            alert('The number needs to be greater than 0')
            break;
        }
        default: {
            rows = numberUser; 
            columns = rows;
            console.log('rows: ' + rows);
            console.log('columns: ' + columns);
            deleteGrid();
            createGrid(rows,columns);
        }
    }
})

//Creating the GRID
function createGrid(rows = 16,columns = 16) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < columns; j++) {
            const pixelDiv = document.createElement('div');
            pixelDiv.setAttribute('class', 'pixel');
            pixelDiv.setAttribute('style', `width: ${ (100/ rows) }%; height: ${(100 / columns)}%`);
            container.appendChild(pixelDiv);
            pixelDiv.addEventListener('mouseenter', ()=> {
                let pixelDivClass = pixelDiv.getAttribute('class');
                if ((pixelDivClass !== 'pixel mouse-enter') && 
                    (pixelDivClass !== 'pixel mouse-enter mouse-leave')) {
                        pixelDiv.setAttribute('class', (pixelDivClass + ' mouse-enter'));
                }
            });
            pixelDiv.addEventListener('mouseleave', ()=> {
                let pixelDivClass = pixelDiv.getAttribute('class');
                if (pixelDivClass !== 'pixel mouse-enter mouse-leave') {
                    pixelDiv.setAttribute('class', (pixelDivClass + ' mouse-leave'));
                    pixelDiv.style.backgroundColor = `rgb(${randomClr()},${randomClr()},${randomClr()})`;
                    pixelDiv.style.opacity = '1';
                }
                if (pixelDivClass === 'pixel mouse-enter mouse-leave') {
                    let opacity = pixelDiv.style.opacity;
                    pixelDiv.style.opacity = `${opacity - 0.1}`; 
                }
            });
        }
    }
}

createGrid();