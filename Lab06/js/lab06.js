// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1


window.onload = makeRequest(1);



function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "http://reqres.in/api/users?page=1" // for page 1
	// "http://reqres.in/api/users?page=2" // for page 2
	// etc...
	
	var url = "http://reqres.in/api/users?page=" + pageNum;
		
	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();
	
	// show an alert if we were unable to make an XMLHttpRequest object
	
	if (!httpRequest) {
		alert('Cannot create an XMLHTTP instance');
		return false;
	}

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var tbody = document.querySelector("#data");
			var nodata = document.querySelector("#nodata");
            var pgnum = jsData.page;

            if (document.querySelector("#nodata")) {
                tbody.removeChild(nodata); // remove empty table row
            } else {
                tbody.removeChild(document.querySelector("#row1"));
                tbody.removeChild(document.querySelector("#row2"));
                tbody.removeChild(document.querySelector("#row3"));
            }
			
			for (var i = 0; i < jsData.data.length; i++){
				
				var row = document.createElement("tr");
				
				var id = document.createElement("td");
				var fName = document.createElement("td");
				var lName = document.createElement("td");
				var avatar = document.createElement("td");
				var pic = document.createElement("img");
				
				var idText = document.createTextNode(jsData.data[i].id);
				var fNameText = document.createTextNode(jsData.data[i].first_name);
				var lNameText = document.createTextNode(jsData.data[i].last_name);
				
				id.appendChild(idText);
				fName.appendChild(fNameText);
				lName.appendChild(lNameText);
				pic.setAttribute("src", jsData.data[i].avatar);
				avatar.appendChild(pic);
								
				row.appendChild(id);
				row.appendChild(fName);
				row.appendChild(lName);
				row.appendChild(avatar);
				row.setAttribute("id", "row" + (i + 1));

				tbody.appendChild(row);
			}
									
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			var pageButton = document.getElementsByClassName("pgbtn");
            for (var j = 0 ; j < pageButton.length ; j++) {
                pageButton[j].classList.remove("active");
            }
		        
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			activePage = document.querySelector("#pgbtn" + pgnum);
            activePage.classList.add("active");
			

		} else {
			alert('There was a problem with the request.');
		}
	}
}	