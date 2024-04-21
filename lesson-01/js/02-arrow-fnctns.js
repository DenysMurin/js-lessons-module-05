console.log("------------JS 2 - стрлелочные функции");
// обычное представление
function add(a, b, c) {
  return a + b + c;
}
console.log(add(5, 10, 15));
// стрелочное представление
const addArrow = (a, b, c) => a + b + c; //return a+b+c неявное возвращение
console.log(add(10, 15, 20));
// самовзывающаяся функция
((number, base) => {
  console.log("число в степени:", number ** base);
})(5, 3);

// !псевдомасси arguments
const fn1 = function () {
  console.log(arguments);
};
const fn2 = (a, ...args) => {
  console.log(a); //первый
  console.log(args); //все остальное
};
fn1("man", "poly", "ajax");
fn2("man", "poly", "ajax"); //d стрелочной ф-ции аргументы не существуют? только с тремя точками
// !инлайн стрелочные
function calc(a, b, callback) {
  const result = callback(a, b);
  console.log("result:", result);
}
calc(2, 3, function (x, y) {
  return x + y;
});
calc(10, 8, function (x, y) {
  return x - y;
});
// а можно в одну строку, компактнее
calc(2, 3, (x, y) => x + y);
calc(10, 8, (x, y) => x - y);
