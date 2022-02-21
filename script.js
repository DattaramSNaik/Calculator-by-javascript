//use to viwe data...
let display = document.getElementById("display");
//use to access all buttons
let button = Array.from(document.getElementsByClassName("func"));
//create map or foreach loop for access buttons
button.map((button) => {
  button.addEventListener("click", (e) => {
    //condition wise access data
    switch (e.target.value) {
      case "AC":
        display.value = "";
        break;
      case "←":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      case "e":
        display.value = display.value * 2.71828;
        break;
      case "Π":
        display.value = display.value * 3.14;
        break;
      case "Rad":
        display.value = display.value * (180 / Math.PI);
        break;
      case "Deg":
        display.value = display.value * (Math.PI / 180);
        break;
      case "x²":
        display.value = display.value * display.value;
        break;
      case "x³":
        display.value = display.value * display.value * display.value;
        break;
      case "√":
        display.value = Math.sqrt(display.value);
        break;
      case "sin":
        display.value = Math.sin(display.value);
        break;
      case "cos":
        display.value = Math.cos(display.value);
        break;
      case "tan":
        display.value = Math.tan(display.value);
        break;
      case "!":
        display.value = factorial(display.value);
        break;
      case "log":
        display.value = Math.log(display.value);
        break;
      case "ln":
        display.value = Math.log(display.value);
        break;
      case "1/x":
        display.value = 1 / display.value;
        break;

      case "=":
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Undefind";
        }
        break;

      default:
        display.value += e.target.value;
        break;
    }
  });
});
//find factorial using function...
function factorial(num) {
  if (num < 0) {
    let msg = "error";
    return msg;
  } else if (num === 0) {
    return 0;
  } else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}
