//1 задание
const strCount = (str, letter) =>
  str.split("").reduce((n, m) => n + (m === letter), 0);

//2 задание

function squareSum(numbers) {
  const roots = numbers.map((num) => num ** 2);
  const sum = roots.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

//3 задание

const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;

//4 задание

const solution = (str) => str.split("").reverse().join("");

//5 задание

const addLength = (str) =>
  str.split(" ").map((item) => item + " " + item.length);

//6 задание

function mango(quantity, pricePerMango) {
  const freeMangoes = Math.floor(quantity / 3);
  const cost = (quantity - freeMangoes) * pricePerMango;
  return cost;
}

//7 задание

const litres = (t) => Math.floor(t * 0.5);

//8 задание

const invert = (a) => a.map((n) => (n === n ? -n : n));

//9 задание

const powersOfTwo = (n) => {
  const arr = [];
  if (n >= 0) {
    for (let i = 0; n >= i; i++) {
      arr.push(i);
    }
    const result = arr.map((n) => 2 ** n);
    return result;
  }
};

//   10 задание

const grow = (x) => x.reduce((a, c) => a * c);
