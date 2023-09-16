let resultHeader = document.querySelector("span");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addButton = document.getElementById("add");
let subButton = document.getElementById("sub");

function addition(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

subButton.onclick = () => {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);

  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = sub(convertedNum1, convertedNum2);

    resultHeader.innerText = result;
  }
};

addButton.onclick = () => {
  let convertedNum1 = parseInt(num1.value);
  let convertedNum2 = parseInt(num2.value);

  if (!isNaN(convertedNum1) && !isNaN(convertedNum2)) {
    let result = addition(convertedNum1, convertedNum2);

    resultHeader.innerText = result;
  }
};
