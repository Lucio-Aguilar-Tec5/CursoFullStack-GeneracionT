// Seleccionar el botón
const beepButton = document.getElementById('beepButton');

// Definir la función callback
function seEjecutaEnEvento() {
    // Seleccionar el body
    const body = document.body;

    // Agregar un párrafo <p> al final del body
    body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');

    // Alternar la clase "color" en el body
    body.classList.toggle('color');
}

// Agregar un event listener al botón
beepButton.addEventListener('click', seEjecutaEnEvento);
