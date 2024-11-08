const body = document.body;
const mouseImg = document.querySelector('.mouse-img');

let mouseDown = false;

body.addEventListener('mousemove', (event) => {
    if (mouseDown) {
        mouseImg.style.top = event.clientY + 'px';
        mouseImg.style.left = event.clientX + 'px';
    }
});

body.addEventListener('mousedown', () => {
    mouseDown = true;
    body.classList.add('hide-cursor'); // Oculta el cursor al presionar el mouse
});

body.addEventListener('mouseup', () => {
    mouseDown = false;
    body.classList.remove('hide-cursor'); // Muestra el cursor al soltar el mouse
});
