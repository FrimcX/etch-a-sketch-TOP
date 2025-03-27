const container = document.querySelector('.container');
const containerSize = window.innerWidth > window.innerHeight ? '90vh' : '90vw';
container.setAttribute('style', `width: ${containerSize}; height: ${containerSize};`);
//Is it okay? I feel like was hardcode the 90vh or 90vw????


let rows = 16;
let columns = 16;

//Creating the GRID
for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < columns; j++) {
        const pixelDiv = document.createElement('div');
        pixelDiv.setAttribute('class', 'pixel');
        pixelDiv.setAttribute('style', `width: ${ (100/ rows) }%; height: ${(100 / columns)}%`);
        container.appendChild(pixelDiv);
        pixelDiv.addEventListener('mouseenter', ()=> {
            let pixelDivClass = pixelDiv.getAttribute('class');
            pixelDiv.setAttribute('class', (pixelDivClass + ' mouse-enter'));
        });
        pixelDiv.addEventListener('mouseleave', ()=> {
            let pixelDivClass = pixelDiv.getAttribute('class');
            pixelDiv.setAttribute('class', (pixelDivClass + ' mouse-leave'));
        });
    }
}