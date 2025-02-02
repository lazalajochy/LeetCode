# 🔥 Técnicas para la Suma de Subarrays en JavaScript

Este repositorio contiene implementaciones en **JavaScript** de las técnicas más eficientes para resolver problemas relacionados con **operaciones de subarrays**.  
Cada técnica se explica con su **caso de uso**, y **ejemplo en código**.

---

## 📌 1️⃣ Sliding Window (Ventana Deslizante) – `O(n)`

### ✅ **Casos de Uso:**  
- Encontrar **subarrays contiguos** con una suma mayor/mínima.  
- Subarrays con **tamaño fijo (`k`)** o con una suma **≥ target**.  
- Problemas donde **todos los números son positivos** (o la suma siempre crece).  

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
