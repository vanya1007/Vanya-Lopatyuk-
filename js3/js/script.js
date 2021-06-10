let userFirstNumber = Number(prompt('Введіть перше число',''));
let userSecondNumber = Number(prompt('Введіть друге число',''));
let userOperationType = prompt('Введіть оператор','');
function calculate(userFirstNumber, userSecondNumber, userOperationType) {
  switch (userOperationType) {
    case '+':
      return userFirstNumber + userSecondNumber;
    case '-':
      return userFirstNumber - userSecondNumber;
    case '*':
      return userFirstNumber * userSecondNumber;
    case '/':
      return userFirstNumber / userSecondNumber;
  }
}
alert(calculate(userFirstNumber, userSecondNumber, userOperationType));