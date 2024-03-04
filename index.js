let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let button = document.querySelector(".input-button");

function ObesityCalculation() {
  let res = weight.value / Math.pow(height.value, 2);
  console.log(res)
};

button.addEventListener("click", ObesityCalculation)
