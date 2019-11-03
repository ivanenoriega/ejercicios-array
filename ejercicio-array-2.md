# Ejercicios - Array 2.

> Sigue las indicaciones para completar los ejercicios.

1. Dado el siguiente array: `[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]` completa los siguientes ejercicios.

- Utilizando el método forEach, imprimir en consola sólo aquellos que sean múltiplos de 7.
- Realizar el ejercicio 1 con un for.
- Realizar el ejercicio 1 con un while.

2. Utilizando el array del ejercicio 1 implementar la función map de tal forma de obtener un arrayResultado con la raíz cuadrada de c/u de los números. Utilizar la función Math.sqrt para esto. [Link al método sqtr de Math:](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/sqrt)

3. Un detective recibió un código anónimo cuyo mensaje quiere descifrar. Acudió a vos por ayuda; las únicas pistas que recibió fueron: filter y typeof. ¿Podrás ayudarlo?

```
var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
```

- Recordando typeof: typeof operando || typeof (operando)

4. El siguiente codigo nos ayudara a dibujar un arbol de navidad por consola. Revisa lo logica en detalle y crea una funcion que use los metodos `generarArbolDeNavidad` y `mostrarArbol` para cumplir con los siguientes casos de uso:

- Crea un arbol con 3 filas.
- Crea un arbol con 10 filas.
- Crea un arbol con 25 filas.

```
var VERDE = 'V'

function generarArbolDeNavidad(filas) {
   var arbol = [];
   var fila = [];

   for (var i=0; i < filas; i++){
      fila = [];
      var ultimoColor = 'R';
      if(i%2==0){
        ultimoColor = VERDE
      }
       for (var j=0; j <= i; j++){
         if (ultimoColor === 'V'){
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
  arbol.forEach(function(fila, i){
    var espacios = '_'.repeat(arbol.length-i-1);
    var filaAImprimir = fila.join(' ')
    console.log(espacios+filaAImprimir)
  })
}
```
