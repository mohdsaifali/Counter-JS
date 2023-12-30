const mainTitle = document.querySelector("#title");

const btnincrement = document.querySelector("#increment");
const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");

let currentVal = 0;

btnincrement.addEventListener("click", () => {
  currentVal++;
  mainTitle.textContent = currentVal;
});

btnDecrement.addEventListener("click", () => {
  if (currentVal > 0) {
    currentVal--;
    mainTitle.textContent = currentVal;
  }
});

btnReset.addEventListener("click", () => {
  currentVal = 0;
  mainTitle.textContent = currentVal;
});
