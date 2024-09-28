class StringBuilder {
  #value; // Оголошуємо приватну властивість value

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізуємо значення через конструктор
  }

  // Метод для отримання значення value
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і в кінець
  padBoth(str) {
    this.padStart(str); // Використовуємо метод padStart
    this.padEnd(str);   // Використовуємо метод padEnd
  }
}


// Код для перевірки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

