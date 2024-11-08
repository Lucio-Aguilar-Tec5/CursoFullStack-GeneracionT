// Seleccionar todos los párrafos
const parrafos = document.querySelectorAll('p');

// Agregar event listener a cada párrafo
parrafos.forEach(parrafo => {
    parrafo.addEventListener('click', () => {
        // Alternar la clase "resaltado" al párrafo clickeado
        parrafo.classList.toggle('resaltado');
    });
});
