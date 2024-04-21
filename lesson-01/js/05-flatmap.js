// !flatmap
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 9, tags: ["js", "nodejs", "css"] },
];
const tags = tweets.flatMap((item, index, array) => {
  // return item;
  // или весь массив (вверху)
  // или по одиночке внизу
  // return item.id;
  // return item.likes;
  return item.tags;
});
console.log("tags:", tags);
console.table(tags);
