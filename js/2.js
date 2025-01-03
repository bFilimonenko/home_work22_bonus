// #2
//
// Створіть функцію evenFn(n), яка приймає параметром число - кількість ітерацій циклу, тобто for 0..n.
// Функція повинна повернути масив, що складається тільки з парних значень, які генеруються в циклі.
//
// Причому:
// 0 не повинен потрапляти до результуючого масиву,
// цикл має працювати до n включно,
// дозволено тільки оператор for.
//
// Наприклад:
// evenFn(10) → [2, 4, 6, 8, 10]
// evenFn(15) → [2, 4, 6, 8, 10, 12, 14]
// evenFn(20) → [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

function evenFn(n) {
  const evenDigitsArray = [];

  for (let i = 2; i <= n; i += 2) {
    evenDigitsArray.push(i);
  }

  return evenDigitsArray;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));