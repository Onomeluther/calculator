const equation = document.querySelector("#equationDisplay");
const solution = document.querySelector("#solutionDisplay");
const btnAC = document.querySelector("#clrAll");
const percent = document.querySelector("#percentage");
const power = document.querySelector("#raiseToPwr");
const divide = document.querySelector("#division");
const one = document.querySelector("#num-one");
const two = document.querySelector("#num-two");
const three = document.querySelector("#num-three");
const four = document.querySelector("#num-four");
const five = document.querySelector("#num-five");
const six = document.querySelector("#num-six");
const seven = document.querySelector("#num-seven");
const eight = document.querySelector("#num-eight");
const nine = document.querySelector("#num-nine");
const zero = document.querySelector("#num-zero");
const minus = document.querySelector("#subtraction");
const sum = document.querySelector("#summation");
const pin = document.querySelector("#dot");
const btnC = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const times = document.querySelector("#multiply");

let emptyArray = [];

function addValueToScreen(value) {
  emptyArray.push(value);
  equation.innerHTML = emptyArray.join("");
}

function calculateResult() {
  const arrayConvertedToString = emptyArray.join("");
  const result = eval(arrayConvertedToString);
  solution.innerHTML = result;
}

function clearScreen() {
  emptyArray = []
  equation.innerHTML = 0;
  solution.innerHTML = 0;
}


function deleteValue() {
  emptyArray.pop();
  equation.innerHTML = emptyArray.join("")
}

document.addEventListener("DOMContentLoaded",() => {
  zero.addEventListener("click", () => addValueToScreen(0));
  one.addEventListener("click", () => addValueToScreen(1));
  two.addEventListener("click", () => addValueToScreen(2));
  three.addEventListener("click", () => addValueToScreen(3));
  four.addEventListener("click", () => addValueToScreen(4));
  five.addEventListener("click", () => addValueToScreen(5));
  six.addEventListener("click", () => addValueToScreen(6));
  seven.addEventListener("click", () => addValueToScreen(7));
  eight.addEventListener("click", () => addValueToScreen(8));
  nine.addEventListener("click", () => addValueToScreen(9));
  sum.addEventListener("click", () => addValueToScreen("+"));
  pin.addEventListener("click", () => addValueToScreen("."));
  percent.addEventListener("click", () => addValueToScreen("%"));
  power.addEventListener("click", () => addValueToScreen("**"));
  times.addEventListener("click", () => addValueToScreen("*"));
  divide.addEventListener("click", () => addValueToScreen("/"));
  minus.addEventListener("click", () => addValueToScreen("-"));
  equal.addEventListener("click", () => calculateResult());
  btnAC.addEventListener("click", () => clearScreen());
  btnC.addEventListener("click", () => deleteValue());
})