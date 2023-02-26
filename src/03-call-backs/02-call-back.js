function getTwoNumbers(param1, param2, callBack) {
  console.log(param1, param2);
  if (typeof param1 === "number" && typeof param2 === "number") {
    callBack(param1, param2);
  } else {
    console.log("wrong data type");
  }
}

function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}

// getTwoNumbers(4, "4", addTwoNumber);
getTwoNumbers(4, 4, (num1, num2) => console.log(num1 + num2));
