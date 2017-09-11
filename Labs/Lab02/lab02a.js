/*********************************************************************************
*  INT222 – Lab 02
*  I declare that this lab is my own work in accordance with Seneca  Academic Policy.  
*  No part of this lab has been copied manually or electronically from any other 
*  source (including web sites) or distributed to other students.
* 
*  Name: ___Nahal_Esmaeili___  Student ID: ___106152150___  Date: ___12 Oct, 2016___
*
********************************************************************************/

/*****************************
* Step 1
*****************************/
var e1, e2, e3, e4, e5, e6, e7, str;


/*****************************
* Step 2
*****************************/
var e1 = prompt("Please enter your string:", 'Nahal');
var e1 = capFirstLetter(e1);
function capFirstLetter(str){
  var str = str.toLowerCase();
  var str = (((str.substring(0,1)).toUpperCase()) + (str.substr(1, (str.lengt))));
  return str;
}


/*****************************
* Step 3
*****************************/
var e2 = parseInt(prompt("Enter the year of your birthday:", 1985));
var age = function getAge(e2){ 
    var e2 = (new Date()).getFullYear() - e2;
    return e2;   
}
var e2 = age(e2);


/*****************************
* Step 4
*****************************/
var e3 = prompt("Which college are you attending?", "Seneca College");
var e3 = e3.split(/ /);
for(i=0; i < (e3.length); i++){
    
    e3[i] = capFirstLetter(e3[i]);   
}
var e3 = e3.join(' ');


/*****************************
* Step 5
*****************************/
var e4 = prompt("Enter your 5 favorite sports:", 'hockey,football,basketball,tennis,golf');
var e4 = e4.replace(/football/, "soccer");
var e4 = e4.split(/,/);
var e5 = prompt("Enter an extra favorite sport", 'formula1');
e4.push(e5)


/*****************************
* Step 6
*****************************/
for(i=0; i < (e4.length); i++){
    e4[i] = '\t' + (e4[i].toUpperCase());
}
e4.sort();  
var e4 = e4.join('\n');


/*****************************
* Step 7
*****************************/
var e6 = new Date();
function getDateString(d){   
    var d = (d.getFullYear()+'-' + (d.getMonth()+1) + '-'+d.getDate());
    return d;    
}
var e7 = getDateString(e6);


/*****************************
* Step 8
*****************************/
console.log("User info:\n\nname (e1): "+e1+"\nage (e2): "+e2+"\nschool (e3): "+e3);
console.log("favorite sports (e4):\n"+e4+"\ncurrent date (e7): "+e7);


