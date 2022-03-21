const playerFunctions = {
  score() {
    return `${this.name} scores with a ${this.signatureScoringStyle}`;
  },
};

function createNBAplayer(name, team, height, age, signatureScoringStyle) {
  let newNBAplayer = Object.create(playerFunctions);
  newNBAplayer.name = name;
  newNBAplayer.team = team;
  newNBAplayer.height = height;
  newNBAplayer.age = age;
  newNBAplayer.signatureScoringStyle = signatureScoringStyle;
  return newNBAplayer;
}

const lebronJames = createNBAplayer("Lebron James", "Los Angeles Lakers", "6 ft 8 in", 37, "tomahawk dunk");
console.log(lebronJames);
console.log(lebronJames.name);
console.log(lebronJames.team);
console.log(lebronJames.height);
console.log(lebronJames.age);
console.log(lebronJames.signatureScoringStyle);
console.log(lebronJames.score());

const kevinDurant = createNBAplayer("Kevin Durant", "Brooklyn Nets", "6 ft 10 in", 33, "midrange jumper");
console.log(kevinDurant);
console.log(kevinDurant.name);
console.log(kevinDurant.team);
console.log(kevinDurant.height);
console.log(kevinDurant.age);
console.log(kevinDurant.signatureScoringStyle);
console.log(kevinDurant.score());

const stephenCurry = createNBAplayer("Stephen Curry", "Golden State Warriors", "6 ft 3 in", 34, "pull up three");
console.log(stephenCurry);
console.log(stephenCurry.name);
console.log(stephenCurry.team);
console.log(stephenCurry.height);
console.log(stephenCurry.age);
console.log(stephenCurry.signatureScoringStyle);
console.log(stephenCurry.score());

const jamesHarden = createNBAplayer("James Harden", "Philadelphia 76ers", "6 ft 5 in", 32, "step-back three");
console.log(jamesHarden);
console.log(jamesHarden.name);
console.log(jamesHarden.team);
console.log(jamesHarden.height);
console.log(jamesHarden.age);
console.log(jamesHarden.signatureScoringStyle);
console.log(jamesHarden.score());
