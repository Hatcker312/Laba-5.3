document.addEventListener("DOMContentLoaded", function() {
  // КОНСТАНТИ
  const constants = [
      { name: "Значення константи е", value: Math.E },
      { name: "Значення константи π", value: Math.PI },
      { name: "Десятковий логарифм постійної Ейлера (е)", value: Math.log10(Math.E) },
      { name: "Двійковий логарифм постійної Ейлера (е)", value: Math.log2(Math.E) },
      { name: "Натуральний логарифм числа 10", value: Math.log(10) },
      { name: "Натуральний логарифм числа 2", value: Math.log(2) },
      { name: "Корінь квадратний із двох", value: Math.sqrt(2) },
      { name: "Корінь квадратний з однієї другий", value: Math.sqrt(0.5) }
  ];

  // ФУНКЦІЇ
  const functions = [
      { name: "Результат зведення в ступінь: 4^2", value: Math.pow(4, 2) },
      { name: "Результат добування квадратного кореня з 4", value: Math.sqrt(4) },
      { name: "Результат добування квадратного кореня з -9", value: Math.sqrt(-9) },
      { name: "Результат обчислення абсолютного значення -9", value: Math.abs(-9) },
      { name: "Результат обчислення косинуса нуля радіан", value: Math.cos(0) },
      { name: "Косинус 180 градусів (π радіан)", value: Math.cos(Math.PI) },
      { name: "Результат обчислення арккосинуса нуля", value: Math.acos(0) },
      { name: "Результат обчислення синуса нуля радіан", value: Math.sin(0) },
      { name: "Синус 90 градусів (π /2 радіан)", value: Math.sin(Math.PI / 2) },
      { name: "Результат обчислення арксинуса одиниці", value: Math.asin(1) },
      { name: "Тангенс 45 градусів (π /4 радіан)", value: Math.tan(Math.PI / 4) },
      { name: "Результат обчислення арктангенса одиниці", value: Math.atan(1) },
      { name: "Результат зведення е в ступінь 2", value: Math.exp(2) },
      { name: "Натуральний логарифм від e^2", value: Math.log(Math.exp(2)) },
      { name: "Результат обчислення десяткового логарифма від числа 100", value: Math.log10(100) },
      { name: "Результат обчислення двійкового логарифма від числа 8", value: Math.log2(8) },
      { name: "Тангенс 45 градусів (з округленням)", value: Math.round(Math.tan(Math.PI / 4)) },
      { name: "Результат округлення числа 1,00123 у більшу сторону", value: Math.ceil(1.00123) },
      { name: "Результат округлення числа -3.1234 у більшу сторону", value: Math.ceil(-3.1234) },
      { name: "Результат округлення числа 1,00123 у меншу сторону", value: Math.floor(1.00123) },
      { name: "Результат округлення числа -3.1234 у меншу сторону", value: Math.floor(-3.1234) },
      { name: "Результат округлення числа 1,44 за правилами арифметики", value: Math.round(1.44) },
      { name: "Результат округлення числа 1,54 за правилами арифметики", value: Math.round(1.54) },
      { name: "Вибір найбільшого із двох чисел 4 і 2", value: Math.max(4, 2) },
      { name: "Вибір найменшого із двох чисел 4 і 2", value: Math.min(4, 2) }
  ];

  // ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ
  const random = Math.random();

  // Вивід даних на сторінку
  const constantsContainer = document.getElementById("constants");
  constants.forEach(constant => {
      constantsContainer.innerHTML += `<p>${constant.name}: ${constant.value}</p>`;
  });

  const functionsContainer = document.getElementById("functions");
  functions.forEach(func => {
      functionsContainer.innerHTML += `<p>${func.name}: ${func.value}</p>`;
  });

  const randomContainer = document.getElementById("random");
  randomContainer.innerHTML += `<p>Формування випадкових чисел в інтервалі [0;1]: ${random}</p>`;
});
