/*********************************************************************************
*  INT222 – Lab 02
*  I declare that this lab is my own work in accordance with Seneca  Academic Policy.  
*  No part of this lab has been copied manually or electronically from any other 
*  source (including web sites) or distributed to other students.
* 
*  Name: ___Nahal_Esmaeili___  Student ID: ___106152150___  Date: ___12 Oct, 2016___
*
********************************************************************************/


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null },
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/******************************************************
 * Start your code here. Do not change the code above.
 ******************************************************/


// task 1

console.log("*** Task 1 ***\n\n");
var last = courses.pop();
console.log("Course " +last.code+" was deleted from the array (courses)");

var ibc233 = {code: 'IBC233',name:'System i Business Computing',hours:4,url:'http://www.senecacollege.ca/~ibc233'};
var oop244 = {code:'OOP244',name:'Object Oriented Programming',hours:4,url:'http://www.senecacollege.ca/~oop244'};
var int222 = {code:'INT222',name:'Internet I - Internet Fundamentals',hours:4,url:'http://www.senecacollege.ca/~int222'};
var dbs201 = {code:'DBS201',name:'Introduction to Database Design and SQL',hours:4,url:'http://www.senecacollege.ca/~dbs201'};
courses.push(ibc233, oop244, int222, dbs201);
console.log("Adding new course objects into the array (courses)\n\n");
console.log("Course objects in the arraye (courses):");

for(var i=0; i<courses.length; i++){
    console.log(courses[i].code+", "+courses[i].name+", "+courses[i].hours+" hours/week, website: "+courses[i].url);
}



// task 2

console.log("\n\n*** Task 2 ***\n\n");

var student = [
    { 
    name: "John Smith", 
    dob: new Date("9/10/1999"),
    sid: "010456101",
    program: "CPA", 
    gpa: 4,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }},
    
    { 
    name: "Jim Carrey", 
    dob: new Date("1/17/1992"),
    sid: "012345678",
    program: "CPD", 
    gpa: 3.5,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }},


    { 
    name: "Justin Bieber", 
    dob: new Date("3/1/1994"),
    sid: "0987654321",
    program: "CAN", 
    gpa: 3.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }},


    { 
    name: "Justin Trudeau", 
    dob: new Date("1/12/1992"),
    sid: "123456789",
    program: "CAN", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }}
];
console.log("Student objects in the array (students):");

for(var j=0; j < student.length; j++){
    
    console.log(j+": "+student[j].toString()+"\n");
}






