# 🔥 Técnicas para la Suma de Subarrays en JavaScript

Este repositorio contiene implementaciones en **JavaScript** de las técnicas más eficientes para resolver problemas relacionados con **operaciones de subarrays**.  
Cada técnica se explica con su **caso de uso**, y **ejemplo en código**.

---

## 📌 1️⃣ Sliding Window (Ventana Deslizante) – `O(n)`

La técnica de ventana deslizante es un enfoque algorítmico utilizado en informática y procesamiento de señales. Implica seleccionar un subconjunto de tamaño fijo, o ***ventana***,
de un conjunto de datos más grande y mover esta ventana a través del conjunto de datos de manera gradual.

La ventana se desliza sobre los datos, normalmente un elemento a la vez, y realiza alguna operación en los elementos dentro de la ventana en cada paso.

### 🤔 Cómo identificar problemas en ventanas corredizas:
- Estos problemas generalmente requieren encontrar  subconjuntos máximos/mínimos y  subcadenas  que satisfagan alguna condición específica.
- En algunos de los problemas se proporcionará el tamaño de la submatriz o subcadena ' K' .
- Estos problemas se pueden resolver fácilmente en una complejidad de tiempo O(N 2 ) usando bucles anidados, y usando una ventana deslizante podemos resolverlos en   una complejidad de tiempo O(n) .
- Complejidad temporal requerida:  O(N) o O(Nlog(N))
- Restricciones:  ***N <= 10 6  , si N*** es el tamaño de la matriz/cadena.

 ### Ejemplo 📚
Dado un array de números enteros nums y un número entero k, escribe una función maximumSum(nums, k) que devuelva la suma máxima de cualquier subarray contiguo de longitud k  

```js
function maximumSum(nums, k) {
    let sum = 0, maxSum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxSum = sum;
    for (let j = k; j < nums.length; j++) {
        sum += nums[j] - nums[j - k]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}

maximumSum([2, 3, 4, 1, 5, 6, 2, 8], 3)
