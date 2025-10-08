# 🧠 DSA Practice in JavaScript

A structured collection of my **Data Structures & Algorithms** practice problems written in **JavaScript**.

This repository helps me prepare for **coding interviews**, **logic-based tests**, and **algorithmic thinking** by solving core problems without relying on prebuilt methods.

---

## 📂 Structure

| Folder | Description |
|--------|--------------|
| `01-Basics/` | Simple array and loop-based problems — max, min, sum, even/odd separation |
| `02-Intermediate/` | Problems involving logic and conditions — missing number, rotation, sorting checks |
| `03-Advanced/` | Algorithmic thinking — Kadane’s, pair sums, max differences, and more |

---

## 🧩 Topics Covered
- Array traversal and manipulation  
- Conditional logic and iterations  
- Searching and sorting logic  
- Basic algorithm patterns (max/min, sums, frequency, rotation)
- Problem-solving using pure JavaScript (no libraries)

---

## 🧠 Example Problem

```js
// find-max.js
const arr = [10, 5, 4, 6, 0, 9, 7, 100];
let maxVal = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maxVal) {
    maxVal = arr[i];
  }
}

console.log("Maximum value:", maxVal); // 100
