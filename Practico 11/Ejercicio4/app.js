// Seleccionar los elementos del DOM
const showMoneyButton = document.getElementById('showMoneyButton');
const showMiamiButton = document.getElementById('showMiamiButton');
const showMaiameeeButton = document.getElementById('showMaiameeeButton');
const moneyImage = document.getElementById('moneyImage');
const miamiImage = document.getElementById('miamiImage');
const maiameeeImage = document.getElementById('maiameeeImage');

// Agregar event listeners a los botones
showMoneyButton.addEventListener('click', () => {
    moneyImage.classList.toggle('oculto');
});

showMiamiButton.addEventListener('click', () => {
    miamiImage.classList.toggle('oculto');
});

showMaiameeeButton.addEventListener('click', () => {
    maiameeeImage.classList.toggle('oculto');
});

// Agregar event listeners a las imágenes para ocultarlas al hacer clic
moneyImage.addEventListener('click', () => {
    moneyImage.classList.add('oculto');
});

miamiImage.addEventListener('click', () => {
    miamiImage.classList.add('oculto');
});

maiameeeImage.addEventListener('click', () => {
    maiameeeImage.classList.add('oculto');
});
