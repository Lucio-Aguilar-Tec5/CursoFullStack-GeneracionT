const autoRojo = document.getElementById('autoRojo');
const autoAzul = document.getElementById('autoAzul');

let posicionRojo = 0;
let posicionAzul = 0;

window.addEventListener('keyup', (event) => {
    // Tecla 'r' para el auto rojo
    if (event.key === 'r') {
        posicionRojo += 10; // Incrementar la posición del auto rojo
        autoRojo.style.marginLeft = `${posicionRojo}px`;

        // Verificar si el auto rojo ha llegado al final de la pista
        if (posicionRojo >= 700) {
            alert('¡El auto rojo ganó la carrera!');
        }
    }

    // Tecla 'a' para el auto azul
    if (event.key === 'a') {
        posicionAzul += 10; // Incrementar la posición del auto azul
        autoAzul.style.marginLeft = `${posicionAzul}px`;

        // Verificar si el auto azul ha llegado al final de la pista
        if (posicionAzul >= 700) {
            alert('¡El auto azul ganó la carrera!');
        }
    }
});
