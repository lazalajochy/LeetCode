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
function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLength = Infinity;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 
        
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left]; 
            left++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}

// 🔹 Ejemplo de uso:
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Output: 2 (subarray [4,3])
