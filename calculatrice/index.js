let scren = document.getElementById("screen");
let num;

let result = "";
let curchar;
let opera1;
let operaT = [];
let op;

let opera2;
let operation = ["+", "-", "*", "/"];

function opera(b) {
  opera1 = scren.value.substring(0, num);
  op = opera1.length;
  operaT += b;
 


  
}
  
function display(x) {
  scren.value += x;
  num = scren.value.length;
  curchar = x;

  precedNum();
}

function clearScreen() {
  scren.value = "";
}

function calcolator() {
  let opera2 = scren.value.substring(op + 1, num);

  switch (operaT) {
    case "--":
      result = parseInt(opera1) + parseInt(opera2);
      break;
    case "//":
      result = parseInt(opera1) + parseInt(opera2);
      break;

    case "+":
      result = parseInt(opera1) + parseInt(opera2);
      break;

    case "*":
      result = opera1 * opera2;
      break;

    case "-":
      result = opera1 - opera2;
      break;

    case "/":
      result = opera1 / opera2;
      break;
  }


  scren.value = result;
  operaT = "";
}

function precedNum() {
  prechar = scren.value.substring(num - 2, num - 1);
  checkNum();
}

function checkNum() {
  if (operation.includes(prechar) && operation.includes(curchar)) {
    if (prechar == curchar) {
      // deletChar();
      opera1 = scren.value.substring(0, num - 2);
      console.log(opera1);
    } else {
      scren.value = scren.value.slice(0, num - 2) + scren.value.slice(num - 1);
    }
  }
 
}


