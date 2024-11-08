// Seleccionar el div secreto y la imagen
const magia = document.getElementById('magia');
const imagenMagica = document.getElementById('imagenMagica');

// Agregar event listener al div secreto
magia.addEventListener('mouseover', () => {
    // Ocultar la imagen
    imagenMagica.style.display = 'none';
});

magia.addEventListener('mouseout', () => {
    // Mostrar la imagen cuando el mouse sale del div secreto
    imagenMagica.style.display = 'inline'; // o 'block' dependiendo del tipo de display original de la imagen
});
