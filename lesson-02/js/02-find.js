// !find поэлементно проходит и возвращяет ПЕРВЫЙ результат

const numbers = [5, 10, 15, 20, 25];
let result = undefined; //если прошли и ничего не нашли
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log("element:", element);
  if (element === 11) {
    result = element;
    break;
  }
}
console.log(result);

// сделаем это с помощью find
const number = numbers.find((item, index, array) => {
  return item === 11;
});
console.log(number);

// -------------------------------------
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
console.table(allCars);
// ищем машину по модели
// вариант 1
// const getCarByModel = (cars, model) => {
//   return cars.find((item, index, array) => {
//     return item.model === model;
//   });
// };
// рефакторинг вариант 2
const getCarByModel = (cars, model) =>
  cars.find((item) => item.model === model);

console.log(getCarByModel(allCars, "f150"));
console.log(getCarByModel(allCars, "cx9"));
console.log(getCarByModel(allCars, "cayenne"));

// ищем по типу кузова
const getCarByType = (cars, type) => {
  return cars.find((item, index, array) => {
    return item.type === type;
  });
};
console.log(getCarByType(allCars, "sedan"));
console.log(getCarByType(allCars, "truck"));
