const nbaPlayer1 = {
  name: "Lebron James",
  team: "Los Angeles Lakers",
  height: "6 ft 8 in",
  age: 37,
  signatureScoringStyle: "tomahawk dunk",
  score() {
    return `${nbaPlayer1.name} scores with a ${nbaPlayer1.signatureScoringStyle}`;
  },
};
const nbaPlayer2 = {
  name: "Kevin Durant",
  team: "Brooklyn Nets",
  height: "6 ft 10 in",
  age: 33,
  signatureScoringStyle: "midrange jumper",
  score() {
    return `${nbaPlayer2.name} scores with a ${nbaPlayer2.signatureScoringStyle}`;
  },
};
const nbaPlayer3 = {
  name: "Stephen Curry",
  team: "Golden State Warriors",
  height: "6 ft 3 in",
  age: 34,
  signatureScoringStyle: "pull up three",
  score() {
    return `${nbaPlayer3.name} scores with a ${nbaPlayer3.signatureScoringStyle}`;
  },
};
const nbaPlayer4 = {
  name: "James Harden",
  team: "Philadelphia 76ers",
  height: "6 ft 5 in",
  age: 32,
  signatureScoringStyle: "step-back three ",
  score() {
    return `${nbaPlayer4.name} scores with a ${nbaPlayer4.signatureScoringStyle}`;
  },
};

console.log(nbaPlayer1);
console.log(nbaPlayer1.name);
console.log(nbaPlayer1.team);
console.log(nbaPlayer1.height);
console.log(nbaPlayer1.age);
console.log(nbaPlayer1.signatureScoringStyle);
console.log(nbaPlayer1.score());

console.log(nbaPlayer2);
console.log(nbaPlayer2.name);
console.log(nbaPlayer2.team);
console.log(nbaPlayer2.height);
console.log(nbaPlayer2.age);
console.log(nbaPlayer2.signatureScoringStyle);
console.log(nbaPlayer2.score());

console.log(nbaPlayer3);
console.log(nbaPlayer3.name);
console.log(nbaPlayer3.team);
console.log(nbaPlayer3.height);
console.log(nbaPlayer3.age);
console.log(nbaPlayer3.signatureScoringStyle);
console.log(nbaPlayer3.score());

console.log(nbaPlayer4);
console.log(nbaPlayer4.name);
console.log(nbaPlayer4.team);
console.log(nbaPlayer4.height);
console.log(nbaPlayer4.age);
console.log(nbaPlayer4.signatureScoringStyle);
console.log(nbaPlayer4.score());
