# 🔥 Técnicas para la Suma de Subarrays en JavaScript

Este repositorio contiene implementaciones en **JavaScript** de las técnicas más eficientes para resolver problemas relacionados con **operaciones de subarrays**.  
Cada técnica se explica con su **caso de uso**, y **ejemplo en código**.

---

## 📌 1️⃣ Sliding Window (Ventana Deslizante) – `O(n)`

### ✅ **Casos de Uso:**  
- Encontrar **subarrays contiguos** con una suma mayor/mínima.  
- Subarrays con **tamaño fijo (`k`)** o con una suma **≥ target**.  
- Problemas donde **todos los números son positivos** (o la suma siempre crece).  

### 🚨 **Requerimientos:**  
- El array debe contener **solo números positivos**.  
- No funciona bien con **números negativos**, ya que pueden invalidar la técnica.  

### **Ejemplo: Subarray con Suma Mínima ≥ Target**
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
