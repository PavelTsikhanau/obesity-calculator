let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let button = document.querySelector(".input-button");
let popUp = document.querySelector(".popup");
let popUpContent = document.querySelector(".popup-content");

function ObesityCalculation() {
  let res = weight.value / Math.pow(height.value, 2)
  res = res.toFixed(2);
  let flaw = (18.5 - res) * Math.pow(height.value, 2)
  let excess = (res - 25) * Math.pow(height.value, 2)

  popUp.style.visibility = "visible";
  if (res < 18.5) {
    popUpContent.innerText = `У вас недостаток массы тела. Ваш ИМТ ${res}! Вам нужно набрать минимум ${flaw.toFixed(2)} кг.`;
  } else if (res > 18.5 && res < 25) {
    popUpContent.innerText = `Вы в прекрасной форме, ваш ИМТ ${res}!`;
  } else {
    popUpContent.innerText = `У вас избыточный вес. Ваш ИМТ ${res}! Вам нужно сбросить минимум ${excess.toFixed(2)} кг.`;
  }
};

popUp.addEventListener("click", function (e) {
  popUp.style.visibility = "hidden";
});

button.addEventListener("click", ObesityCalculation);
