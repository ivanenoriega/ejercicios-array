// Ejercicio 1
function ejercicioUno() {
  var array = [1, 2, 3, 4, 5];
  return array.length;
}

// Ejercicio 2
function ejercicioDos() {
  var array = [2, 4, 6, 8, 10];
  var sumatoria = 0;

  array.forEach(function(valor) {
    sumatoria += valor;
  });

  return sumatoria;
}

// Ejercicio 3
function ejercicioTres() {
  var numeroMes = prompt("Ingrese el numero del mes:");
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
  return meses[numeroMes - 1];
}

// Ejercicio 4
function ejercicioCuatro() {
  var notas = [3, 8, 9, 4, 7];
  var aprobados = [];

  for (let index = 0; index < notas.length; index++) {
    var nota = notas[index];
    if (nota >= 7) {
      aprobados.push(nota);
    }
  }

  return aprobados.length;
}

// Ejercicio 5
function ejercicioCinco() {
  var notas = [];
  var aprobados = [];

  for (let index = 0; index < 5; index++) {
    notas.push(prompt("Ingrese el valor de la nota:"));
  }

  for (let index = 0; index < notas.length; index++) {
    var nota = notas[index];
    if (nota >= 7) {
      aprobados.push(nota);
    }
  }

  return aprobados.length;
}

// Ejercicio 6
function ejercicioSeis() {
  var cantNotas = prompt("Ingrese la cantidad de notas:");
  var notas = [];
  var aprobados = [];

  for (let index = 0; index < cantNotas; index++) {
    notas.push(prompt("Ingrese el valor de la nota:"));
  }

  for (let index = 0; index < notas.length; index++) {
    var nota = notas[index];
    if (nota >= 7) {
      aprobados.push(nota);
    }
  }

  return aprobados.length;
}
