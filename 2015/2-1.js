const input = require('./2-data');


const boxes = input.split("\n");

const calcBox = (box) => {
  const [l, w, h] = box.split("x").map(Number);
  const sides = [l * w, w * h, h * l];
  const smallestSide = Math.min(...sides);
  return sides.reduce((a, b) => a + b, 0) * 2 + smallestSide;
};

const totalArea = boxes.reduce((a, b) => a + calcBox(b), 0);
console.log(totalArea);
