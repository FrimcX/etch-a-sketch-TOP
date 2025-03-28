const container = document.querySelector('.container');
const containerSize = window.innerWidth > window.innerHeight ? '90vh' : '90vw';
container.setAttribute('style', `width: ${containerSize}; height: ${containerSize};`);

function createGrid(rows = 16,columns = 16) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 0; j < columns; j++) {
            const pixelDiv = document.createElement('div');
            pixelDiv.setAttribute('class', 'pixel');
            pixelDiv.setAttribute('style', `width: ${ (100/ rows) }%; height: ${(100 / columns)}%`);
            container.appendChild(pixelDiv);
        }
    }
}

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
        case ((numberUser > 100) || (numberUser <= 0) ): {
            alert('The number needs to be greater than 0 and less than 100');
            break;
        }
        default: {
            deleteGrid();
            createGrid(numberUser,numberUser);
        }
    }
})

container.addEventListener('mouseover', (e)=> {
    let pixelDivClass = e.target.classList;

    if (!e.target.classList.contains('container')) {

        if (!e.target.classList.contains('mouse-enter')
            && !e.target.classList.contains('mouse-leave')) {

                e.target.setAttribute('class', (pixelDivClass + ' mouse-enter'));

        }
    }
});

container.addEventListener('mouseout', (e)=> {
    let pixelDivClass = e.target.classList;
    
    if (!e.target.classList.contains('container')) {
        
        if (!e.target.classList.contains('mouse-leave')) {
            e.target.setAttribute('class', (pixelDivClass + ' mouse-leave'));
            e.target.style.backgroundColor = `rgb(${randomClr()},${randomClr()},${randomClr()})`;
            e.target.style.opacity = '1';
        }
        else if (e.target.classList.contains('mouse-leave') &&
            e.target.classList.contains('pixel')) {
                
            e.target.style.opacity = `${e.target.style.opacity - 0.1}`; 
        }
    }
});


createGrid();