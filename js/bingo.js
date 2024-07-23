/**
 * Maria Fernanda Losada Silva
 * Bingo
 * 9/07/2024
 */

// Generar números aleatorios
function generarNumerosBingo(cantidad, maximo) {
    let numeros = new Set();

    while (numeros.size < cantidad) {
        let numeroAleatorio = Math.floor(Math.random() * maximo) + 1;
        numeros.add(numeroAleatorio);
    }
    return Array.from(numeros);
}
let numerosBingo1 = generarNumerosBingo(25, 75);



// Generar bingo
function generarBingo(numeros) {
    let bingo = [];
    let acumulador = 0;

    for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        let interno = [];
        for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            interno[iteracion2] = numeros[acumulador++];
        }
        bingo[iteracion1] = interno;
    }
    return bingo;
}
let bingo1 = generarBingo(numerosBingo1);
let bingo2 = generarBingo(numerosBingo1);
let bingo3 = generarBingo(numerosBingo1);
let bingo4 = generarBingo(numerosBingo1);
let bingo5 = generarBingo(numerosBingo1);
let bingo6 = generarBingo(numerosBingo1);
let bingo7 = generarBingo(numerosBingo1);
let bingo8 = generarBingo(numerosBingo1);



// Crear Bingos con colores en las filas
function crearTabla(bingo, columna1, columna2, columna3, columna4, columna5) {
    let tabla = '<table>';
    for (let fila = 0; fila < bingo.length; fila++) {
        tabla += '<tr>';
        for (let iteraFila = 0; iteraFila < bingo[fila].length; iteraFila++) {
            if (columna1 && iteraFila === 0) {
                tabla += '<td class="filaB">'+bingo2[fila][iteraFila]+'</td>';
            }
            else if (columna2 && iteraFila === 1) {
                tabla += '<td class="filaI">'+bingo3[fila][iteraFila]+'</td>';
            }
            else if (columna3 && iteraFila === 2) {
                tabla += '<td class="filaN">'+bingo4[fila][iteraFila]+'</td>';
            }
            else if (columna4 && iteraFila === 3) {
                tabla += '<td class="filaG">'+bingo5[fila][iteraFila]+'</td>';
            }
            else if (columna5 && iteraFila === 4) {
                tabla += '<td class="filaO">'+bingo6[fila][iteraFila]+'</td>';
            }
            else {
                tabla += '<td>' + bingo1[fila][iteraFila] + '</td>';
            } 
        }
        tabla += '</tr>';
    }
    tabla += '</table>';
    return tabla;
}
document.getElementById('resultado').innerHTML = crearTabla(bingo1);
document.getElementById('resultado2').innerHTML = crearTabla(bingo2, true);
document.getElementById('resultado3').innerHTML = crearTabla(bingo3, false, true);
document.getElementById('resultado4').innerHTML = crearTabla(bingo4, false, false, true);
document.getElementById('resultado5').innerHTML = crearTabla(bingo5, false, false, false, true);
document.getElementById('resultado6').innerHTML = crearTabla(bingo6, false, false, false, false, true);



function crearXXX(bingo){
    let tabla = '<table>';
    for (let fila = 0; fila < bingo.length; fila++) {
        tabla += '<tr>';
        for (let columna = 0; columna < bingo.length; columna++) {
          if (columna === 0 - fila || fila + columna === 3 - 1 || fila + columna === 4 ||  fila - columna === 3 - 1 || columna === 2 + fila  ) {
            tabla += '<td class="x">'+bingo7[fila][columna] + " "+'</td>';
          } else {
            tabla += '<td>' + bingo1[fila][columna] + '</td>';
          }
        }
        tabla += '</tr>';
      }
      tabla += '</table>';
      return tabla;
}
document.getElementById('resultado7').innerHTML = crearXXX(bingo7);



function crearXGrande(bingo){
    let tabla = '<table>';
    for (let fila = 0; fila < bingo.length; fila++) {
        tabla += '<tr>';
        for (let columna = 0; columna < bingo.length; columna++) {
          if (fila === columna || fila + columna === 5 - 1) {
            tabla += '<td class="x">'+bingo8[fila][columna] + " "+'</td>';
          } else {
            tabla += '<td>' + bingo1[fila][columna] + '</td>';
          }
        }
        tabla += '</tr>';
      }
      tabla += '</table>';
      return tabla;
}  
document.getElementById('resultado8').innerHTML = crearXGrande(bingo8);

