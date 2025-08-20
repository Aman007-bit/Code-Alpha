const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === "") return;
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) return; 
  display.value += operator;
}

function appendDot() {
  const lastChar = display.value.slice(-1);
  if (lastChar === "." || "+-*/%".includes(lastChar)) return;
  display.value += ".";
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = new Function("return " + display.value)();
  } catch {
    display.value = "Error";
  }
}
