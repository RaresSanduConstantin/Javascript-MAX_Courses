const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforecalc, calcNumber) {
  const calcDesc = `${resultBeforecalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDesc);
}

function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries);
}

function addTwoNumbers() {
  const enterNumber = getUserInput();
  const initlaResult = currentResult;
  currentResult += enterNumber;
  createAndWriteOutput("+", initlaResult, enterNumber);

  writeToLog("Add", initlaResult, enterNumber, currentResult);
}

function substract() {
  const enterNumber = getUserInput();
  const initlaResult = currentResult;
  currentResult = currentResult - enterNumber;
  createAndWriteOutput("-", initlaResult, enterNumber);

  writeToLog("Substract", initlaResult, enterNumber, currentResult);
}

function multiply() {
  const enterNumber = getUserInput();
  const initlaResult = currentResult;
  currentResult = currentResult * enterNumber;
  createAndWriteOutput("*", initlaResult, enterNumber);

  writeToLog("multiply", initlaResult, enterNumber, currentResult);
}

function divide() {
  const enterNumber = getUserInput();
  const initlaResult = currentResult;
  currentResult = currentResult / enterNumber;
  createAndWriteOutput("/", initlaResult, enterNumber);

  writeToLog("divide", initlaResult, enterNumber, currentResult);
}

function calculate(operation) {
  const enterNumber = getUserInput();
  const initlaResult = currentResult;
  let operator;
  if (operation === "ADD") {
    currentResult += enterNumber;
    operator = "+";
  } else if (operation === "SUBSTRACT") {
    currentResult = currentResult - enterNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult = currentResult * enterNumber;
    operator = "*";
  } else {
    currentResult = currentResult / enterNumber;
    operator = "/";
  }
  createAndWriteOutput(operator, initlaResult, enterNumber);

  writeToLog(operation, initlaResult, enterNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBSTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
