

var numOne = document.querySelector("#num_one");
var numTwo = document.querySelector("#num_two");
var numThree = document.querySelector("#calculateBtn");
var numAns = document.querySelector("answer");

function mult(){
var inputOne = Number(numOne.value);
var inputTwo = Number(numTwo.value);
var result = inputOne * inputTwo;
answer.innerHTML = result.toString();
}
numThree.addEventListener("click", mult);





