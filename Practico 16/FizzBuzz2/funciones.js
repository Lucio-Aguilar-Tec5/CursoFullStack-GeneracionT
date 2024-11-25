

document.getElementById('fizzbuzz-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener los valores del formulario

            const palabra1 = document.getElementById('palabra1').value;
            const palabra2 = document.getElementById('palabra2').value;
            const contar_hasta = parseInt(document.getElementById('contar_hasta').value);
            const fizz_num = parseInt(document.getElementById('fizz_num').value);
            const buzz_num = parseInt(document.getElementById('buzz_num').value);
            
            // Ejecutar la función fizzBuzz2

            const resultado = fizzBuzz2(palabra1, palabra2, contar_hasta, fizz_num, buzz_num);
            
            // Mostrar el resultado
            
            document.getElementById('resultado').textContent = resultado;
        });

        function fizzBuzz2(palabra1, palabra2, contar_hasta, fizz_num, buzz_num) {
            let resultado = [];
            
            for (let i = 1; i <= contar_hasta; i++) {
                if (i % fizz_num === 0 && i % buzz_num === 0) {
                    resultado.push(palabra1 + palabra2);
                } else if (i % fizz_num === 0) {
                    resultado.push(palabra1);
                } else if (i % buzz_num === 0) {
                    resultado.push(palabra2);
                } else {
                    resultado.push(i);
                }
            }
            
            return resultado.join(", ");
        }