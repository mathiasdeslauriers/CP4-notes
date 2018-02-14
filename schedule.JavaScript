//this is the javascript for my schedule. it will allow me to search class names and change their background color and their font color. 
//this adds a function so that an action can be played in the schedule.
function Background() {
//this adds a variable which can be applied after to evry class i have made in my HTML.
//the classes will have a value because of the .vaue that was put after the dociment.getElementById.
	var x = document.getElementById("classes").value;
//this switches on the variable.
	switch (x){
//this is the class that is being inspected
		case "science":
//this will be its given name so you can search it up.
			x = "science";
//this ends this case
			break;
		case "french":
			x = "french";
			break;
		case "math":
			x = "math";
			break;
		case "computerprogram":
			x = "computerprogram";
			break;
		case "religion":
			x = "religion";
			break;
		case "english":
			x = "english";
			break;
		case "music":
			x = "music";
			break
		case "gym":
			x = "gym";
			break;
		case "nothing":
			x = "nothing";
			break;
		case "speech":
			x = "speech";
			break;
		case "history":
			x = "history";
			break;
		case "homeroom":
			x = "homeroom";
			break;
		case "LA":
			x = "LA";
			break;
	}
//this is a new variable. it will be relied to the X variable creted earlier.
	var className = document.getElementsByClassName(x);
//this is a second one so it can run the second part of the code
	var className = document.getElementsByClassName(x);
	for (i=0 ; i<className.length ; i++){
//first when searching a class, it will change the background color to black.
		className[i].style.backgroundColor = "black";
//second, it will chane the font color to white.
		className[i].style.color = "white";
	}
 }
