// !функция как значение
function fnA(message, callback) {
  callback(13);
  console.log(callback);
  console.log(callback === fnB);
  console.log(message);
  callback(5);
}
function fnB(number) {
  console.log("log during fnB execution:", number);
}
const fnC = function () {};
fnA("a message", fnB);
// полчается, что callback ===fnB

// !удобство callback
function calc(a, b, callback) {
  // a=2
  // b=3
  // callback =
  console.log(callback);
  const result = callback(a, b);
  console.log("result:", result);
}

calc(2, 3, function (param1, param2) {
  return param1 + param2;
});

calc(8, 10, function (param1, param2) {
  return param1 * param2;
});
// ! задача
console.log("---------------задача-----------------");

// напишите функцию each(array, callback), которая первым параметром ожидает массив
// а вторым - функцию, которая применяется к каждому элементу массива.
// функция each должна возвратить новый массив, элементами которого будут результаты вызова коллбека
function each(array, callback) {
  const numbers = [];
  for (const item of array) {
    console.log("item:", item);

    const res = callback(item);
    console.log("callback res:", res);
    numbers.push(res);
  }
  return numbers;
}
const result1 = each([64, 49, 36, 25, 16], function (value) {
  return value * 2;
});
console.log(result1);
const result2 = each([64, 49, 36, 25, 16], function (value) {
  return value - 100;
});
console.log("-100:", result2);
const result3 = each([64, 49, 36, 25, 16], function (value) {
  return Math.sqrt(value);
});
console.log("корень:", result3);
const result4 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.ceil(value);
});
console.log("округленные наверх:", result4);
const result5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
  return Math.floor(value);
});
// console.log("округленные вниз:", result5);
