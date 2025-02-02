# 🔥 Técnicas o patrones para la resolucion de problemas

Este repositorio contiene implementaciones en **JavaScript** de las técnicas más eficientes para resolver problemas.  
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
```


## 🔥 Técnica Prefix Sum (Suma Acumulativa)

La técnica Prefix Sum se usa para calcular sumas de subrangos de un array de manera eficiente. En lugar de recorrer el array en cada consulta, precomputamos un array auxiliar con sumas acumulativas,
lo que nos permite responder consultas en O(1) tras un preprocesamiento en O(n).

***❌ Problema 1: Cálculo de suma de un subrango sin usar Prefix Sum***

### Ejemplo
Dado un array de números, implementa una función rangeSum(arr, L, R) que calcule la suma de los elementos entre los índices L y R de forma directa, iterando sobre el array.

- Código sin Prefix Sum (O(n) por consulta):

```js
  function rangeSum(arr, L, R) {
    let sum = 0;
    for (let i = L; i <= R; i++) {
        sum += arr[i];
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5];
console.log(rangeSum(arr, 1, 3)); // 2 + 3 + 4 = 9
console.log(rangeSum(arr, 0, 4)); // 1 + 2 + 3 + 4 + 5 = 15
```

***🔴 Problema:*** Cada consulta requiere recorrer los elementos en el rango [L, R], lo que cuesta O(n) por consulta. Si hay muchas consultas, el tiempo de ejecución será muy alto.

***✅ Problema 2: Cálculo de suma de un subrango usando Prefix Sum***

```js

 function prefixSumArray(arr) {
    let prefixSum = new Array(arr.length).fill(0);
    prefixSum[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    return prefixSum;
}

function rangeSum(prefixSum, L, R) {
    if (L === 0) return prefixSum[R];
    return prefixSum[R] - prefixSum[L - 1];
}

const arr = [1, 2, 3, 4, 5];
const prefixSum = prefixSumArray(arr);

console.log(rangeSum(prefixSum, 1, 3)); // 2 + 3 + 4 = 9
console.log(rangeSum(prefixSum, 0, 4)); // 1 + 2 + 3 + 4 + 5 = 15
```
***🟢 Ventaja:***

- Precomputamos prefixSum en O(n).
- Cada consulta de suma de subrango se resuelve en O(1) en lugar de O(n).

