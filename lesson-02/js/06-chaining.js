// !цепочки
const numbers = [1, 5, 2, 4, 3];

const greaterThanTwo = numbers.filter((item) => item > 2);
console.log("greaterThanTwo:", greaterThanTwo);

const multByThree = greaterThanTwo.map((item) => item * 3);
console.log("multByThree:", multByThree);

const sorted = multByThree.toSorted((a, b) => a - b);
console.log("sorted:", sorted);

//  а можно все в длинный паровоз, без переменных
const sortedByChaining = numbers
  .filter((item) => item > 2)
  .map((item) => item * 3)
  .toSorted((a, b) => a - b);
console.log("sortedByChaining:", sortedByChaining);

// !задача
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

// пусть функция getAvailableCarNames возвращает массив моделей авто, которые на распродаже
const getModelOnSale = (cars) => {
  return cars.filter((car) => car.onSale).map((car) => car.model);
};
console.table(getModelOnSale(allCars));

// пусть getSortedCarsOnSale возвращает массив
// авто на распродаже, отсортированных по возрастанию цены

const getSortedCarsOnSale = (cars) =>
  cars
    .filter((car) => car.onSale)
    .toSorted((prevCar, nextCar) => prevCar.price - nextCar.price);

console.table(getSortedCarsOnSale(allCars));
