// Increment by 10
for (let i = 5; i < 120; i += 10) {
  console.log( i );
}

// Decrement by division
for(let i = 4096; i >= 1; i /= 2) {
  console.log( i );
}

// Array iteration
let presidents = [
  "1 was George Washington",
  "2 was John Adams",
  "3 was Thomas Jefferson"
];

for (let i = 0; i < presidents.length; i++) {
  console.log("President #" + presidents[i] + ".");
}

let antSpecies = [
  "argentine",
  "army",
  "bigHeaded",
  "black",
  "bull",
  "carpenter",
  "crazy",
  "fire",
  "glider",
  "honeyPot",
  "jackJumper"
];

for (let i = 0; i < antSpecies.length; i++) {
  console.log( "Ant Species" + " is " + antSpecies[i] + ".");
}

// Object iteration
let antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (let prop in antSpecies) {
  console.log();

