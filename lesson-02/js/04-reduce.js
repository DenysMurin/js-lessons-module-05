const numbers = [5, 10, 15, 20, 25];
let result = 0;
for (let index = 0; index < numbers.length; index++) {
  const item = numbers[index];
  console.log("item:", item);
  result += item;
}
console.log("result is:", result);

// ---------используем reduce - НИЖЕ
function callback(accumulator, item, index, array) {
  console.log(
    `start value ${accumulator}:, array item ${item}, with index ${index}, in array [${array}]`
  );
  return undefined;
}
// const total = numbers.reduce(callback, 0);

const total = numbers.reduce((prevValue, currValue, index, array) => {
  return prevValue + currValue;
}, 0);
// рефакторинг
// const total = numbers.reduce((prevValue, currValue) => prevValue + currValue, 0);//вместо выше
console.log("total с помощью reduce :", total);

// !считаем общую зарплату
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salaries = Object.values(salary);
console.log("salaries:", salaries);
const totalSalary = salaries.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(totalSalary);

// !cxbnftv общее число часов
const players = [
  { id: "player1", name: "mango", timePlayed: 310, points: 54, online: true },
  { id: "player2", name: "poly", timePlayed: 470, points: 92, online: false },
  { id: "player3", name: "kiwi", timePlayed: 130, points: 48, online: true },
  { id: "player4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];
let totalTime = 0;
for (let index = 0; index < players.length; index++) {
  const item = players[index];
  console.log("item:", item.timePlayed);
  totalTime += item.timePlayed;
}
console.log(totalTime);
const totalTimePlayed = players.reduce((acc, item) => {
  return acc + item.timePlayed;
}, 0);
console.log("totalTimePlayed:", totalTimePlayed);
// ! считаем общую сумму в корзине
const cart = [
  { label: "apples", price: "100", quantity: "2" },
  { label: "bananas", price: "120", quantity: "3" },
  { label: "lemons", price: "70", quantity: "5" },
];
const totalAmount = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0); //0 - стартовая точка итераций
console.log(totalAmount);
