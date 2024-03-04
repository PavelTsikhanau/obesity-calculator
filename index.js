let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let button = document.querySelector(".input-button");
let popUp = document.querySelector('.popup');
let popUpContent = document.querySelector('.popup-content')

function ObesityCalculation() {
  let res = weight.value / Math.pow(height.value, 2);
  function popUpFunc() {
    popUp.style.visibility = 'visible';
    if (res < 18.5) {
      popUpContent.innerText = `You are a winner! Your total score is ${score + 5}!`;
    }
    
  }
};

popUp.addEventListener('click', function(e) {
  popUp.style.visibility = 'hidden';
});

button.addEventListener("click", ObesityCalculation)
