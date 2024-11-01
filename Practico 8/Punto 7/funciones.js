let edad = 18;
let edadMaxima = 65;
let snack = "papitas";
let snackDia = 2;

let snackRestantes = (edadMaxima - edad) * 365 * snackDia;
alert("Necesitarás " + snackRestantes + " " + snack + " " +"para que te alcancen hasta los " + edadMaxima + " años.");

// Agregar cálculo de costo
let precioPorUnidad = 500; // Por ejemplo
let costoTotal = snackRestantes * precioPorUnidad;
alert("Gastaras " + costoTotal + " pesos en " + snack + " el resto de tu vida")
