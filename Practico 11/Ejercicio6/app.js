const colorInput = document.getElementById('colorInput');
const body = document.body;

// Diccionario de colores primarios en español
const colores = {
    rojo: 'red',
    azul: 'blue',
    verde: 'green',
    blanco: 'white'
};

// Escuchar el evento keyup en el input
colorInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const colorIngresado = event.target.value.toLowerCase().trim();

        // Verificar si el color ingresado está en el diccionario
        const colorFondo = colores[colorIngresado];
        if (colorFondo) {
            body.style.backgroundColor = colorFondo;
        } else {
            // Si no se encuentra el color, dejar el fondo blanco
            body.style.backgroundColor = 'white';
        }
    } else if (event.key === 'Backspace') {
        // Si se presiona la tecla de borrar, el fondo vuelve a ser blanco
        body.style.backgroundColor = 'white';
    }
});
