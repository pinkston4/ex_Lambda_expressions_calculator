
//Operators
var add = document.getElementById("addition");
var subtract = document.getElementById("subtraction");
var divide = document.getElementById("division");
var multiply = document.getElementById("multiplication");


//Event Listeners
document.getElementById("clickField").addEventListener("click", function(event) {
  var input1 = parseInt(document.getElementById("inputOne").value);
  var input2 = parseInt(document.getElementById("inputTwo").value);
  if (event.target === add)  {
    calculator(input1, input2, addition);
  } else if (event.target === subtract) {
    calculator(input1, input2, subtraction);
  } else if (event.target === multiply) {
    calculator(input1, input2, multiplication);
  } else {
    calculator(input1, input2, division);

  }
});


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
var multiplication = function (x, y) {
  console.log("running multiplication");
  var product = x * y;
  console.log(product);
  document.getElementById("outPut").innerHTML =  product ;
  return product;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
var addition = function (x, y) {
  console.log("running addition");
  var sum = x + y;
  console.log(sum);
  document.getElementById("outPut").innerHTML = sum;
  return sum;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 var subtraction = function (x, y) {
  console.log("running subtraction");
  var difference = x - y;
  console.log(difference);
  document.getElementById("outPut").innerHTML = difference;
  return difference;
};

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 var division = function (x, y) {
  console.log("running division");
  var quotient = x / y;
  console.log(quotient);
  document.getElementById("outPut").innerHTML = quotient;
  return quotient;
};

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 var calculator = function (x, y, callFunction) {
    console.log("running calculator");
    return callFunction(x,y);
 };



