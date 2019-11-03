// Ejercicio 1
function ejercicioUno() {
  var valores = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];

  // A
  // valores.forEach(valor => {
  //   if (valor % 7 === 0) console.log(valor);
  // });

  // B
  // for (let i = 0; i < valores.length; i++) {
  //   var valor = valores[i];
  //   if (valor % 7 === 0) console.log(valor);
  // }

  // C
  var contador = 0;
  while (contador < valores.length) {
    var valor = valores[contador];
    if (valor % 7 === 0) console.log(valor);
    contador++;
  }
}

// Ejercicio 2
function ejercicioDos() {
  var valores = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];

  var arrayResultado = valores.map(function (valor) {
    return Math.sqrt(valor);
  });

  return arrayResultado;
}

// Ejercicio 3
function ejercicioTres() {
  var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];

  return enigma.filter(function (valor) {
    return typeof valor === "string";
  })
}

// Ejercicio 4
function ejercicioCuatro() {
  var VERDE = 'V'

  function generarArbolDeNavidad(filas) {
    var arbol = [];
    var fila = [];

    for (var i = 0; i < filas; i++) {
      fila = [];
      var ultimoColor = 'R';
      if (i % 2 == 0) {
        ultimoColor = VERDE
      }
      for (var j = 0; j <= i; j++) {
        if (ultimoColor === 'V') {
          ultimoColor = 'R';
        } else {
          ultimoColor = 'V';
        }
        fila.push(ultimoColor);
      }
      arbol.push(fila);
    }
    return arbol;
  }

  function mostrarArbol(arbol) {
    console.log(arbol);
    arbol.forEach(function (fila, i) {
      var espacios = '_'.repeat(arbol.length - i - 1);
      var filaAImprimir = fila.join(' ')
      console.log(espacios + filaAImprimir)
    })
  }

  mostrarArbol(generarArbolDeNavidad(5));
}
