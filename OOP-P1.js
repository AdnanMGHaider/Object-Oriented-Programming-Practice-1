class NBAplayer {
  constructor(name, team, height, age, signatureScoringStyle) {
    this.name = name;
    this.team = team;
    this.height = height;
    this.age = age;
    this.signatureScoringStyle = signatureScoringStyle;
  }
  score() {
    return `${this.name} scores with a ${this.signatureScoringStyle}`;
  }
}

/*****************************************************************************/

class LebronJames extends NBAplayer {
  block() {
    return `${this.name} blocks the shot with a chase down block`;
  }
}

const lebronJames = new LebronJames("Lebron James", "Los Angeles Lakers", "6 ft 8 in", 37, "tomahawk dunk");

console.log(lebronJames);
console.log(lebronJames.name);
console.log(lebronJames.team);
console.log(lebronJames.height);
console.log(lebronJames.age);
console.log(lebronJames.signatureScoringStyle);
console.log(lebronJames.score());
console.log(lebronJames.block());

/*****************************************************************************/

const kevinDurant = new NBAplayer("Kevin Durant", "Brooklyn Nets", "6 ft 10 in", 33, "midrange jumper");

console.log(kevinDurant);
console.log(kevinDurant.name);
console.log(kevinDurant.team);
console.log(kevinDurant.height);
console.log(kevinDurant.age);
console.log(kevinDurant.signatureScoringStyle);
console.log(kevinDurant.score());

/*****************************************************************************/

class StephenCurry extends NBAplayer {
  celebration() {
    return `${this.name} celebrates with a shoulder shimmy after scoring with a ${this.signatureScoringStyle}`;
  }
}

const stephenCurry = new StephenCurry("Stephen Curry", "Golden State Warriors", "6 ft 3 in", 34, "pull up three");

console.log(stephenCurry);
console.log(stephenCurry.name);
console.log(stephenCurry.team);
console.log(stephenCurry.height);
console.log(stephenCurry.age);
console.log(stephenCurry.signatureScoringStyle);
console.log(stephenCurry.score());
console.log(stephenCurry.celebration());

/*****************************************************************************/

class JamesHarden extends NBAplayer {
  constructor(name, nickName, team, height, age, signatureScoringStyle) {
    super(name, team, height, age, signatureScoringStyle);
    this.nickName = nickName;
  }
}

const jamesHarden = new JamesHarden("James Harden", "The Beard", "Philadelphia 76ers", "6 ft 5 in", 32, "step-back three");

console.log(jamesHarden);
console.log(jamesHarden.name);
console.log(jamesHarden.nickName);
console.log(jamesHarden.team);
console.log(jamesHarden.height);
console.log(jamesHarden.age);
console.log(jamesHarden.signatureScoringStyle);
console.log(jamesHarden.score());
