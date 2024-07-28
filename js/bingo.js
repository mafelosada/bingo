/**
 * Maria Fernanda Losada Silva
 * Bingo
 * 23/07/2024
 */

let bingo = [];
let iteracion1;
let iteracion2;
let acumulador = 0;

//Generar Bingo
let tabla = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  let interno = [];
  tabla += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    acumulador = acumulador + 1; 
    interno[iteracion2] = acumulador * 3;
    tabla += '<td>' + interno[iteracion2] + '</td>'; 
  }
  bingo[iteracion1] = interno;
  tabla += '</tr>'; 
}
tabla += '</table>';

document.getElementById('resultado').innerHTML = tabla;  


//Letra B
let tabla2 = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  tabla2 += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (iteracion2 == 0) {
      tabla2 += '<td class="filaB">' + bingo[iteracion1][iteracion2] + '</td>';
    }
    else{
      tabla2 += '<td>' + bingo[iteracion1][iteracion2] + '</td>'; 
    }
  }
  tabla2 += '</tr>'; 
}
tabla2 += '</table>';

document.getElementById('resultado2').innerHTML = tabla2;


//Letra I
let tabla3 = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  tabla3 += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (iteracion2 == 1) {
      tabla3 += '<td class="filaI">' + bingo[iteracion1][iteracion2] + '</td>';
    }
    else{
      tabla3 += '<td>' + bingo[iteracion1][iteracion2] + '</td>'; 
    }
  }
  tabla3 += '</tr>'; 
}
tabla3 += '</table>';

document.getElementById('resultado3').innerHTML = tabla3;


//Letra N
let tabla4 = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  tabla4 += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (iteracion2 == 2) {
      tabla4 += '<td class="filaN">' + bingo[iteracion1][iteracion2] + '</td>';
    }
    else{
      tabla4 += '<td>' + bingo[iteracion1][iteracion2] + '</td>'; 
    }
  }
  tabla4 += '</tr>'; 
}
tabla4 += '</table>';

document.getElementById('resultado4').innerHTML = tabla4;



//Letra G
let tabla5 = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  tabla5 += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (iteracion2 == 3) {
      tabla5 += '<td class="filaG">' + bingo[iteracion1][iteracion2] + '</td>';
    }
    else{
      tabla5 += '<td>' + bingo[iteracion1][iteracion2] + '</td>'; 
    }
  }
  tabla5 += '</tr>'; 
}
tabla5 += '</table>';

document.getElementById('resultado5').innerHTML = tabla5;



//Letra O
let tabla6 = '<table>';
for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
  tabla6 += '<tr>';  
  for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
    if (iteracion2 == 4) {
      tabla6 += '<td class="filaO">' + bingo[iteracion1][iteracion2] + '</td>';
    }
    else{
      tabla6 += '<td>' + bingo[iteracion1][iteracion2] + '</td>'; 
    }
  }
  tabla6 += '</tr>'; 
}
tabla6 += '</table>';

document.getElementById('resultado6').innerHTML = tabla6;



//Generar Triple X
let tabla7 = '<table>';
    for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        tabla7 += '<tr>';
        for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
          if (iteracion2 === 0 - iteracion1 || iteracion1 + iteracion2 === 2 || iteracion1 + iteracion2 === 4 ||  iteracion1 - iteracion2 === 2 || iteracion2 === 2 + iteracion1  ) {
            tabla7 += '<td class="x">'+bingo[iteracion1][iteracion2] + " "+'</td>';
          } else {
            tabla7 += '<td>' + bingo[iteracion1][iteracion2] + '</td>';
          }
        }
        tabla7 += '</tr>';
      }
      tabla7 += '</table>';

document.getElementById('resultado7').innerHTML = tabla7;



//Generar X 
  let tabla8 = '<table>';
  for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    tabla8 += '<tr>';
      for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
        if (iteracion1 === iteracion2 || iteracion1 + iteracion2 === 4) {
          tabla8 += '<td class="x">'+bingo[iteracion1][iteracion2] + " "+'</td>';
        } else {
          tabla8 += '<td>' + bingo[iteracion1][iteracion2] + '</td>';
        }
      }
      tabla8 += '</tr>';
    }
    tabla8 += '</table>';
  
document.getElementById('resultado8').innerHTML = tabla8;

  





 
