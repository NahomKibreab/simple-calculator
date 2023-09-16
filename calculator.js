let resultHeader = document.querySelector("span");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addButton = document.getElementById("add");

function addition(a, b) {
  return a + b;
}

addButton.onclick = () => {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);

  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = addition(convertedNum1, convertedNum2);

    resultHeader.innerText = result;
  }
};
