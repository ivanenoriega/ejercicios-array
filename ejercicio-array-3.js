// Ejercicio 1
function filtrarPositivos(array) {
  var positivos = array.filter(function (value) {
    return value > 0;
  });

  return positivos.length;
}

// Ejercicio 2
function estaEnArray(array, valor) {
  var existe = false;

  array.forEach(element => {
    if (element === valor) existe = true;
  });

  return existe;
}

// Ejercicio 3
function miFuncion(array) {
  var resultado = [[], [], []];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element < 0) {
      resultado[0].push(element);
    } else if (element > 0) {
      resultado[2].push(element);
    } else if (element === 0) {
      resultado[1].push(element);
    }
  }

  return resultado;
}

// Ejercicio 4

// Ejercicio 5
