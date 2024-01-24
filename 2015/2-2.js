const input = require('./2-data');


const boxes = input.split("\n");

const calcBox = (box) => {
  const dimensions = box.split("x").map(Number).sort((a, b) => a - b);
  const smallestPerimeter = 2 * (dimensions[0] + dimensions[1]);
  const volume = dimensions[0] * dimensions[1] * dimensions[2];
  return smallestPerimeter + volume;
};


const totalLength = boxes.reduce((a, b) => a + calcBox(b), 0);
console.log(totalLength);
