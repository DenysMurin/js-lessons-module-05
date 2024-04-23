// !toSorted
// сорт сортируре по юникоду, по увеличению, как строка
const numbers = [1, 9, 11, 6, 29, 3];
console.log("numbers:", numbers); // исходник

const sorted = numbers.sort();
console.log("sorted:", sorted); //отсортирован

// изменяет массив - нечистая ф ция
const sorted2 = numbers.toSorted();
console.log("sorted2:", sorted2); // тоже сортировка как строка посимвольно

// -------------------------
const letters = ["b", "B", "a", "A"];
console.log("letters:", letters.toSorted());

// ----------------------------------
// compareFunction - функция сравнения
console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  })
);
const numbers3 = [1, 9, 11, 6, 29, 3];
const sorted3 = numbers3.toSorted((a, b) => a - b);
console.log("sorted:", sorted3);

// для букв другой метод
const letters2 = ["b", "B", "a", "A"];
console.log(
  "letters:",
  letters2.toSorted((a, b) => a.localeCompare(b))
);
// ! сортировка массива объектов
const players = [
  { id: "player1", name: "mango", timePlayed: 310, points: 54, online: true },
  { id: "player2", name: "poly", timePlayed: 470, points: 92, online: false },
  { id: "player3", name: "kiwi", timePlayed: 130, points: 48, online: true },
  { id: "player4", name: "ajax", timePlayed: 150, points: 71, online: false },
  { id: "player5", name: "chelsy", timePlayed: 80, points: 48, online: true },
];
// по игровому времени в порядке увеличения/уменьшения
const sortedByBestPlayers = players.toSorted((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});
console.table(sortedByBestPlayers);

const sortedByWorthPlayers = players.toSorted((prevPlayer, nextPlayer) => {
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});
console.table(sortedByWorthPlayers);

// по первой букве в имени по увеличению
const byName = players.toSorted((prevPlayer, nextPlayer) => {
  //   console.log(prevPlayer.name[0]);
  //   console.log(nextPlayer[0]);
  return prevPlayer.name[0].localeCompare(nextPlayer.name[0]);
});
console.table(byName);
