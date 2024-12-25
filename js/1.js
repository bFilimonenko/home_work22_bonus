// #1
// Функція defUpperStr('My text') повертає текст, перетворений у верхній регістр, тобто: defUpperStr('My text') → 'MY TEXT'.
// Якщо функція викликається без параметра defUpperStr(), вона не повинна повертати undefined, у цьому випадку
// потрібно повернути рядок тексту за замовчуванням у верхньому регістрі, тобто defUpperStr() → 'DEFAULT TEXT'.
// При виконанні завдання не використовуйте оператор if, потрібен розв'язок із логічним оператором || або параметром за замовчуванням.


function defUpperStr(someText = 'DEFAULT TEXT') {
 return someText.toUpperCase();
}

console.log(defUpperStr('My text'))
console.log(defUpperStr());