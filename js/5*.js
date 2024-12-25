// #5 Задачка на подумать)
// створіть функцію processSequences(arr)
// на вхід функції - масив натуральних чисел(лише додатні, не сортовані, цілі)
// функція має вирахувати масив неприривних інтервалів які містяться у вхідному масиві.
// Наприклад
// [0, 1, 2, 3] => ['0-3']
// [0, 1, 2, 5, 7, 8, 11] => ['0-2', '5', '7-8', '11']
//

function processSequences(arr) {
  arr.sort((a, b) => a - b);

  const intervalArr = [];
  let firstDigits = arr[0];
  let lastDigits = "";

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    }
    if (arr[i] - 1 === arr[i - 1]) {
      lastDigits = `-${arr[i]}`;
    } else {
      intervalArr.push(`${firstDigits}${lastDigits}`);
      lastDigits = "";
      firstDigits = arr[i];
    }

  }
  return intervalArr;
}

const a = [4, 5, 2, 3, 9, 8, 11, 0];
const b = [16, 54, 72, 47, 14, 25, 46, 26, 4, 27, 4, 76, 15, 12, 4, 47];
console.log(processSequences(a));
console.log(processSequences(b));
