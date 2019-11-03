# Ejercicio - Array 3

1. Escribir una función ‘filtrarPositivos’ que reciba por parámetro un array de números y devuelva cuántos de ellos son positivos.

> var array = [-2, -1, 0, 1, 2]
> filtrarPositivos(array) // 2

2. Escribir la función ‘estaEnArray’ que reciba un array y un elemento, y devuelve si el elemento está o no en el array.

> var array = [1, 2, 3]
> estaEnArray(array, 3) // true
> estaEnArray(array, 4) // false

3. Escribir una función que reciba por parámetro un array de números y devuelva un array de tres posiciones, en la primer posición un array con los números positivos, en la segunda un array con los que son cero y en la tercera un array con los negativos.

> var array = [-2, -1, 0, 1, 2]
> miFuncion(array) // [[-2, -1], [0], [1, 2]]

4. Escribir una función ‘maximoEIndice’  que reciba un array como parámetro. El resultado de esta función debería ser un array de dos posiciones. En la primera posición, devuelve el valor máximo del array, y en la segunda, el índice de dicho valor.

> var array = [-2, -1, 0, 1, 2]
> maximoElIndice(array) // [2, 4]

5. Escribir una función ‘intercambiar’ que reciba un array y dos índices y devuelva el mismo array con los elementos de los índices intercambiados. NO MODIFICAR EL ARRAY ORIGINAL

> var array = [-2, -1, 0, 1, 2]
> intercambiar(array, [4, 2]) // [-2, -1, 2, 1, 0]
> intercambiar(array, [1, 8]) // [-2, -1, 0, 1, 2]

