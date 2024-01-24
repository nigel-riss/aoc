const instructions = require('./1-data');

let floor = 0;

for (let char of instructions) {
  floor += (char === '(') ? 1 : -1;
}

console.log(floor);
