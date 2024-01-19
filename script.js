const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
const numbers = ["0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
let output = "";
let temp = "";
let check = 0;

const calculate = (btnValue) => {
  if (numbers.includes(btnValue)) {
    temp += btnValue;
    display.value = temp;
  }

  if (btnValue === "=" && output !== "") {
    check = 0;
    output += temp;
    temp = "";
    output = eval(output.replace("%", "/100"));
    display.value = output;
  } else if (btnValue === "AC") {
    output = "";
    display.value = output;
    temp = "";
    check = 0;
  } else if (btnValue === "DEL") {
    temp = temp.toString().slice(0, -1);
    display.value = temp;
  } else if (specialChars.includes(btnValue)) {
    output += temp;
    temp = "";
    if (check === 1) {
      console.log("check2");
      output = eval(output);
      display.value = output;
      output += btnValue;
    } else {
      console.log("check");
      check = 1;
      output += btnValue;
      display.value = btnValue;
    }
  }
  console.log(output);
  console.log(check);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
