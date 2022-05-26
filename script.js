var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

const pesoA = 2
const pesoB = 3
const pesoC = 5
const pesos = pesoA + pesoB + pesoC

let media = ((A * pesoA ) + (B * pesoB) + (C * pesoC)) / pesos;

console.log("MEDIA=" +media.toFixed(1));
