// #4
//
// створіть функцію ageClassification(n), яка буде як параметр приймати будь-які
// числа і повертатиме рядок згідно з такими умовами, n:
// менше 0   - null (зверніть увагу, що це саме null, а не рядок)
// 0..24     - 'Дитинство'
// 24+...44  - 'Молодість'
// 44+..65   - 'Зрілість'
// 65+..75   - 'Старість'
// 75+..90   - 'Довголіття'
// 90+..122  - 'Рекорд'
// понад 122 - null (зверніть увагу, що це саме null, а не рядок)

function ageClassification(n) {
  if (n > 0 && n <= 24) {
    return "Дитинство";
  }
  if (n > 24 && n <= 44) {
    return "Молодість";
  }
  if (n > 44 && n <= 65) {
    return "Зрілість";
  }
  if (n > 65 && n <= 75) {
    return "Старість";
  }
  if (n > 75 && n <= 90) {
    return "Довголіття";
  }
  if (n > 90 && n <= 122) {
    return "Рекорд";
  }
  return null;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     0 :", ageClassification(0)); // 0 : null
console.log("     1 :", ageClassification(1)); // 1 : Дитинство
console.log("    24 :", ageClassification(24)); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("    44 :", ageClassification(44)); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65)); // 65 : Зрілість
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : Старість
console.log("    75 :", ageClassification(75)); // 75 : Старість
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : Довголіття
console.log("    90 :", ageClassification(90)); // 90 : Довголіття
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
console.log("   122 :", ageClassification(122)); // 122 : Рекорд
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null
