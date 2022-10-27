'use strict';

const resultButton = document.getElementById("calculate");

resultButton.addEventListener("click", (event) => {
  event.preventDefault();
  let result;
  const firstNumeral = document.getElementById("first-numeral").value;
  const secondNumeral = document.getElementById("second-numeral").value;
  const operator = document.getElementById("operator").value;

  if (firstNumeral === "") {
    result = "Первое число не указано";
  } 
  
  else if (secondNumeral === "") {
    result = "Второе число не указано";
  } 
  
  else if (isNaN(firstNumeral) || isNaN(secondNumeral)) {
    result = "Некорректный ввод чисел";
  }
  
  else if (operator === "/" && secondNumeral === "0") {
    result = "Операция некорректна";
  } 
  
  else {
    switch (operator) {
      case "":
        result = "Не введён знак";
        break;
      case "+":
        result = Number(firstNumeral) + Number(secondNumeral);
        break;
      case "-":
        result = Number(firstNumeral) - Number(secondNumeral);
        break;
      case "*":
        result = Number(firstNumeral) * Number(secondNumeral);
        break;
      case "/":
        result = Number(firstNumeral) / Number(secondNumeral);
        break;
      default:
        result = "Программа не поддерживает такую операцию";
        break;
    }
  }
  console.log(result);
});
