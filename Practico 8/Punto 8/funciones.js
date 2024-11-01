let dias = 30;
let presupuesto = 800000;

let comida; 
let diaComida = 3;

let total = dias * diaComida;
let presComida = presupuesto / total;

alert("podes gastar " + presComida.toFixed(2) + " en cada comida para aguantar los " + dias + " dias")