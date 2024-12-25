// #3
//
// Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
// Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
//
// Наприклад:
// 1   → 'Понеділок'
// 2   → 'Вівторок'
// ...
// 7   → 'Неділя'
// 9   → null
// 1.5 → null
// '2' → null
// У реалізації функції обов'язково мають бути використані оператори switch / case / default.

function weekFn(n) {
  switch (n) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return null;
  }
}

console.log(weekFn(1))
console.log(weekFn(3))
console.log(weekFn(7))
console.log(weekFn(9))
console.log(weekFn(1.5))
console.log(weekFn('2'))