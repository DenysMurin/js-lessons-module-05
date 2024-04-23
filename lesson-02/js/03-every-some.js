// !every
// возвращает true? если все  удовлеторяет условию
const players = [
  { id: "player1", name: "mango", timePlayed: 310, points: 54, online: true },
  { id: "player2", name: "poly", timePlayed: 470, points: 92, online: false },
  { id: "player3", name: "kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player5", name: "chelsy", timePlayed: 280, points: 48, online: true },
];
console.table(players);
const isAllOnline = players.every((item, index, array) => {
  return item.online;
});
console.log("isAllOnline:", isAllOnline);

// !some
// возвращает true? еслихотя бы один  удовлеторяет условию
const isAnyOnline = players.some((item, index, array) => {
  return item.online;
});
console.log("isAnyOnline:", isAnyOnline);

// найдем игрока, который наиграл больше всего
const anyHardcorePlayers = players.some((item, index, array) => {
  return item.timePlayed > 400;
});
console.log("anyHardcorePlayers:", anyHardcorePlayers);
