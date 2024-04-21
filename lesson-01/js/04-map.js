// создает новый массив
const newArr = [1, 2, 3].map((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
  return item ** 2;
});
console.log("степень:", newArr);

// !машины
const allCars = [
  { make: "honda", model: "cr-v", amount: "14", price: "28845" },
  { make: "honda", model: "accord", amount: "2", price: "24455" },
  { make: "mazda", model: "mazda6", amount: "8", price: "24195" },
  { make: "mazda", model: "cx-9", amount: "7", price: "31520" },
  { make: "toyota", model: "4runner", amount: "19", price: "34210" },
  { make: "toyota", model: "sequoia", amount: "16", price: "45560" },
  { make: "toyota", model: "tacoma", amount: "4", price: "24320" },
  { make: "ford", model: "f-150", amount: "11", price: "27110" },
  { make: "ford", model: "fusion", amount: "13", price: "22120" },
  { make: "ford", model: "explorer", amount: "6", price: "31660" },
];
//пусть функция getModels возвращает массив моделей всех авто
const getModels = (cars) => {
  return cars.map((item, index, array) => {
    return item.model;
  });
};
console.table(getModels(allCars));
// пусть функция makeCarsWithDiscount возвращает новый массив объектов с переменными
// ,значение свойств price в зависимости от переданной скидки
const makeCarsWithDiscount = (cars, discount) => {
  const carsWithDiscount = cars.map((item, index, array) => {
    return {
      ...item, //указали все пункты массива/объекта
      price: item.price - item.price * discount, //этой строкой перезаписали измененное свойство
    };
  });
  return carsWithDiscount;
};

console.table(makeCarsWithDiscount(allCars, 0.2));
console.table(makeCarsWithDiscount(allCars, 0.4));

//! используя метод map увеличить количество часов игрока по id
const players = [
  {
    id: "player1",
    name: "mango",
    timePlayed: 310,
    points: 54,
    online: "false",
  },
  {
    id: "player2",
    name: "poly",
    timePlayed: 470,
    points: 92,
    online: "true",
  },
  {
    id: "player3",
    name: "kiwi",
    timePlayed: 230,
    points: 48,
    online: "true",
  },
  {
    id: "player4",
    name: "ajax",
    timePlayed: 150,
    points: 71,
    online: "true",
  },
  {
    id: "player5",
    name: "chelsy",
    timePlayed: 80,
    points: 48,
    online: "false",
  },
];

console.table(players);

// увеличиваем количество часов по id
const playerIdToUpdate = "player3";
const playerIdFour = "player4";
const updatedPlayers = players.map((player, index, array) => {
  // console.log(player.id === playerIdToUpdate);
  if (player.id === playerIdToUpdate) {
    // return player.timePlayed + 100;
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
      points: player.points + 10,
    };
  }
  if (player.id === playerIdFour) {
    return { ...player, timePlayed: player.timePlayed + 50 };
  }
  return player;
});

console.log(updatedPlayers);
console.table(updatedPlayers);
