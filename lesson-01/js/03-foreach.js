console.log("---------------foreach----------");
//  нечистая функция, так как меняет исходное данные
const numbers = [5, 10, 15, 20, 25];
let total = 0;
function sum() {
  for (const number of numbers) {
    total += number;
  }
}
sum();
console.log(total);
// другая реализация с помощью forEach
numbers.forEach((item) => (total += item));
const result = numbers.forEach(() => {});
console.log(result);
console.log("total:", total);

numbers.forEach((item, index, arr) => {
  console.log(item); //значение
  console.log(index); //номер
  console.log(arr); //массив
});
// !выпоолнить рефакторинг с помощью метода forEach и стрелочной ф-ции
function logItems(items) {
  console.log(items);
  // это перепишем
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  const callback = (item, index) => {
    console.log(`${index + 1} - ${item}`);
  };
  items.forEach(callback);
}
logItems(["mango", "poly", "ajax"]);
logItems(["apple", "lemon", "strawberry", "banana"]);
// !выпоолнить рефакторинг с помощью метода forEach и стрелочной ф-ции
function printContactInfo({ names, phones }) {
  const nameList = names.split(","); //получение масссива именб тф
  const phoneList = phones.split(",");
  // заменяем
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
  nameList.forEach((item, index, array) => {
    console.log(`${item}:${phoneList[index]}`);
    // console.log(item);//это подготовка для строки выше
    // console.log(phoneList[index]);
  });
}
printContactInfo({
  names: "jacob,william,solomon,artemis",
  phones: "123,456,789,159",
});
// !выпоолнить рефакторинг с помощью метода forEach и стрелочной ф-ции
function caclulateAverage(...args) {
  let total = 0;
  console.log(args); //выведем массив
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  args.forEach((item, index, array) => (total += item));

  return total / args.length;
}
console.log(caclulateAverage(1, 2, 3, 4));
console.log(caclulateAverage(14, 8, 2));
console.log(caclulateAverage(27, 43, 2, 8, 36));
