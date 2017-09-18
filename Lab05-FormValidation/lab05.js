//*******************
//INT222 - Lab05
//Nahal Esmaeili
//*******************

//Form Validation with no Regex
function validateForm(frm){
	var ret = true;
	var errorHTML = "";

	if(ret == true){
		ret = validatePassword(frm.pass.value);
		if (ret == true){
			ret = validateRePassword(frm.pass2.value);
			if (ret == true){
				ret = validateName(frm.name.value);
				if (ret == true){
					ret = validateLname(frm.lname.value);
					if (ret == true){
						ret = validatePhoneNumber(frm.phone.value);
						if (ret == true){
							ret = validateEduStatus(frm);
						}
					}
				}
			}
		}
	}	
		if (ret == false){
		errorHTML = "Please correct the fields with errors and try again!"
		document.querySelector("fieldErrors").innerHTML = errorHTML;
	}
	
	return ret;
}

function validatePassword(password){
	var errorHTML = "";
	
	var pass = false;
	var pass2 = false;
	var pass3 = false;
	var lLetter = "abcdefghijklmnopqrstuvwxyz"
	var uLetter= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var num= "1234567890";
	var input = password.trim();
   
    for (var i = 0; i < input.length; i++) {
          //Checks password contains at least one lower case letter
          if (lLetter.indexOf(input.substr(i,1))>= 0)   { 
			pass = true; 
		  }
    }
	
	for (var j = 0; j < input.length; j++) {
          //Checks password contains at least one upper case letter
          if (uLetter.indexOf(input.substr(j,1))>= 0)   { 
			pass2 = true; 
		  }
    }
	if (pass == false || pass2 == false){
		errorHTML = "<p>Password must contain both lower and upper case letters</p>";
	} 
	
	for (var k = 0; k < input.length; k++) {
          //Checks password contains at least one number
          if (num.indexOf(input.substr(k,1))>= 0)   { 
			pass3 = true; 
		  }
    }
	if (pass3 == false){
		errorHTML = "<p>Password must contain a number!</p>";
	}
	
	if (input.length < 8){
		errorHTML = "<p>Password must be at least 8 characters long!</p>";
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#passErr").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#passErr").innerHTML = "";
		return true;
	}
}

//Repeat password valiation
function validateRePassword(password){
	var errorHTML = "";
	
	var pass1 = document.getElementById('pass');
	var pass2 = document.getElementById('pass2');
	
	if(pass1.value != pass2.value){
		errorHTML = "<p>Passwords must match!</p>";
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#pass2Err").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#pass2Err").innerHTML = "";
		return true;
	}
}


function validateName(name){
	var errorHTML = "";
	
	//name cannot be empty
	if (name.trim().length != 0){
	
		//Checks name input contains at least one alphabetic letter
		var pass = false;
		var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		var input = name.trim();
		
		var inputUpper = input.toUpperCase();
		for (var i = 0; i < inputUpper.length; i++){
			if(inputUpper.charAt(i) < "A" || inputUpper.charAt(i) > "Z"){
				pass = false;
			}	
		}
		
		if(!pass){
		for (var j = 0; j < inputUpper.length; j++){
			if(inputUpper.charAt(j) == "-" || inputUpper.charAt(j) == "'"){
				pass = true;	
			}
		}
		}
		
		for (var k = 0; k < input.length; k++) {
			  //Checks name input contains at least one letter
			  if (str.indexOf(input.substr(k,1))>= 0)   { 
				pass = true;
			  }
			  else{
				  pass = false;
			  }
		}
		
		if (!pass){
			errorHTML = "<p>Name must contain alphabetical letters and - or '</p>";
		} 
	
	}
	else{
		errorHTML = "<p>Name cannot be empty!</p>";
	}

	if (errorHTML.length > 0){
		document.querySelector("#nameErr").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#nameErr").innerHTML = "";
		return true;
	}
}

function validateLname(lname){
	var errorHTML = "";
	
	//Last name cannot be empty
	if (lname.trim().length != 0){
	
	//Checks last name input contains at least one alphabetic letter
	var pass = false;
	var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var input = lname.trim(); 
	
	var inputUpper = input.toUpperCase();
	for (var x = 0; x < inputUpper.length; x++){
		if(inputUpper.charAt(x) < "A" || inputUpper.charAt(x) > "Z"){
			pass = false;
		}
	}
	
	
	if (!pass){
		for (var z = 0; z < inputUpper.length; z++){
			if(inputUpper.charAt(z) == "-" || inputUpper.charAt(z) == "'"){
			pass = true;
		}
		}
	}
	
	for (var i = 0; i < input.length; i++) {
          //Checks last name input contains at least one letter
          if (str.indexOf(input.substr(i,1))>= 0)   { 
			pass = true; 
		  }
		  else{
			pass = false;
		  }
    } 
	
    if (!pass){
		errorHTML = "<p>Last name must contain at least one alphabetic letter, -, or '</p>";
	} 
	
	}
	else{
		errorHTML = "<p>Last name cannot be empty!</p>";
	}
	
	
	if (errorHTML.length > 0){
		document.querySelector("#lnameErr").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#lnameErr").innerHTML = "";
		return true;
	}
}

function validatePhoneNumber(phone){
	var errorHTML = "";
	var input = phone.trim();
	var digit = "0123456789";
	
	if(input.length == 0){
		errorHTML = "<p>Phone number cannot be empty!</p>";
	}
	
	if(input.length > 0){
	
	for (var i = 0; i < input.length; i++){
		if(digit.indexOf(input.substr(i,1))>= 0){
			errorHTML = "";
		}
		else if(i != 3 && i != 7){
			errorHTML = "<p>Phone number must contain digits only!</p>";
			i = input.length + 10;
		}
	}

	if(input.charAt(3) != "-" || input.charAt(7) != "-"){
			errorHTML = "<p>Phone number must be in the following format: 999-999-9999</p>";
	}
	
	if (input[0] == '0' && input[1] == '0' && input[2] == '0'){
		errorHTML = "<p>First three digits cannot be all zeros!</p>";
	}

	if (input[4] == '0' && input[5] == '0' && input[6] == '0' && input[8] == '0' && input[9] == '0' && input[10] == '0' && input[11] == '0'){
		errorHTML = "<p>Phone number cannot be all zeros!</p>";
	}
	
	}
	
	if (errorHTML.length > 0){
		document.querySelector("#phoneErr").innerHTML = errorHTML;
		return false;
	}else{
		document.querySelector("#phoneErr").innerHTML = "";
		return true;
	}
}

function validateEduStatus(frm){
	var required = false;
	for (var i = 0; i < 3; i++){
		if(form.edustatus[i].required){
			required = true;
		}
	}

	if(!required){
		document.querySelector("#eduErr").innerHTML = "One of the options of Education Status must be selected!";
		return false;
	}
	else{
		document.querySelector("#eduErr").innerHTML = "";
		return true;
	}
	
}