// definies the message that lucky users will be prompted with but does not include the combination
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// uses subtraction to calculate the right first number in the combination
let num1 = 15 - 5;

// uses addition to calculate the right second number in the combination
let num2 = 30 + 10;

// uses multiplication to calculate the right third number in the combination
let num3 = 13 * 3;

// displays an alert showing the secret message and secret combination, using template literals
alert(`${message} ${num1}-${num2}-${num3}`);