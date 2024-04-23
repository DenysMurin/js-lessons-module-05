const numbers = [5, 10, 15, 20, 25];
const callback = function (item, index, array) {
  // найдем числа. которые более 12
  return item > 12;
};
const filteredNunbers = numbers.filter((element) => element < 12); //неявное возвращение

console.log("filter:", filteredNunbers);

// 2 метод
const result = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 12) {
    result.push(element);
  }
}
console.log("for:", result);

// !задача allCars
const allCars = [
  {
    make: "honda",
    model: "crv",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "honda",
    model: "accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "mazda",
    model: "mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "mazda",
    model: "cx9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "toyota",
    model: "4runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "toyota",
    model: "sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "toyota",
    model: "tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "ford",
    model: "f150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "ford",
    model: "fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "ford",
    model: "explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
// пусть функция filterByPrice возвращает массив авто, цена которых меньше чем параметр threshold
console.table(allCars);
// const filterByPrice = (cars, threshold) => {
//   return cars.filter((item, index, array) => {
//     console.log(item.price <= threshold);
//     return item.price < threshold;
//   });
// };
// рефакторинг:
const filterByPrice = (cars, threshold) =>
  cars.filter((item) => item.price <= threshold);
// console.table(filterByPrice(allCars, 30000));
console.table(filterByPrice(allCars, 25000));

// пусть функция getCarsWithoutDiscount возвращает массив авто, если onSale = true
const getCarsWithoutDiscount = (cars) => cars.filter((item) => item.onSale);
console.table(getCarsWithoutDiscount(allCars));

// пусть функция getCarsWithoutDiscount возвращает массив авто, тип которых совпадает со значением параметра type
const getCarsWithType = (cars, type) =>
  cars.filter((item) => item.type === type);

console.table(getCarsWithType(allCars, "suv"));
console.table(getCarsWithType(allCars, "sedan"));
