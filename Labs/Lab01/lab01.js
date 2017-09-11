
/*********************************************************************************
*                     INT222 – Lab 01 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students.
*
*  Name: Nahal_Esmaeili    Student ID: 106152150     Date: 25 Sep, 2016
*
**********************************************************************************/   


/*****************************
*    Task 1  
*****************************/

var stdName = 'Nahal';
var nCourses = 5;
var program = 'CPA';
var job = false;
var jobString = job ? "have" : "dont't have";

console.log("My name is "+stdName+ " and I'm in "+program+ " program.");
console.log("I'm enrolled in "+nCourses+ " courses and I "+jobString+" a part-time job now.");



/*****************************
*    Task 2  
*****************************/


var currYear = 2016;
var age = parseInt(prompt("Enter your age:"));

var birthYear = currYear - age;

console.log("You were born in " + bYear()+ ".");

var studyYears = parseInt(prompt("Enter the number of years you expect to study in the college?"));

var gradYear = currYear + studyYears;

console.log("You will graduate from Seneca college in the year of " +gradYear+ ".");



/*****************************
*    Task 3  
*****************************/


var celTemp = 20;
var fahTemp = celTemp * 9 / 5 + 32;
console.log(+celTemp+ " °C is " +fahTemp+ " °F.");
var fahTemp = 73;
celTemp = parseInt((fahTemp -32) * 5 / 9);
console.log(+fahTemp+ " °F is " +celTemp+ " °C.");



/*****************************
*    Task 4  
*****************************/


var num;

for (num=0; num<=10; num++){
  if(num%2 == 0)
    console.log(+num+ " is even.");
  else
    console.log(+num+ " is odd.");
  
}


/*****************************
*    Task 5  
*****************************/


var num1, num2;
function largerNum(num1, num2){
  if (num1 > num2)
    larger = num1;
  else
    larger = num2;
  
 return larger;
}


console.log("The larger number of 12 and 15 is " +largerNum(12,15)+ ".");
console.log("The larger number of 11 and 6 is " +largerNum(11,6)+ ".");


greaterParam = function greatererNum(num1, num2){
  if (num1 > num2)
    greater = num1;
  else
    greater = num2;
  
 return greater;
}


console.log("The greater number of 7 and 9 is " +greaterParam(7,9)+ ".");
console.log("The greater number of 16 and 3 is " +greaterParam(16,3)+ ".");



/*****************************
*    Task 6  
*****************************/



function evaluator(){
  
  var sum=0;
  
  for(i=0; i<arguments.length; i++){
    
    sum += arguments[i];
   
  }
  var eval = ((sum / (i))>= 50) ? " is greater than 50." : " is less than 50.";
  return eval;
}

console.log("The average of the numbers 44, 12, 112 " +evaluator(44, 12, 112));
console.log("The average of the numbers 13, 52, 8 " +evaluator(13, 52, 8));
console.log("The average of the numbers 76, 3, 27 " +evaluator(76, 3, 27));


/*****************************
*    Task 7  
*****************************/


var mark = function grader(score){
  var result;
  if(score >= 90)
    result = 'A+';
  else if(score >= 80)
    result = 'A';
  else if(score >= 70)
    result = 'B';
  else if(score >=60)
    result = 'C';
  else if(score >=50)
    result = 'D';
  else
    result = 'F';
  
  return result;
}

console.log("You have earned " +mark(79)+ " with mark 79.");
console.log("You have earned " +mark(48)+ " with mark 48.");
console.log("You have earned " +mark(93)+ " with mark 93.");

/*****************************
*    Task 8  
*****************************/

var num, numMultiples;
function showMultiples(num, numMultiples){
  
  for(var i=1; i <= numMultiples; i++){
    
    console.log(+num+ "*" +i+ "=" +(num*i));
  }
}

showMultiples(4,3);
showMultiples(5,4);
showMultiples(17,2);































































































/*
Exception: SyntaxError: unterminated string literal
@Scratchpad/1:161
*/