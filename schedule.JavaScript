function Background() {
	var x = document.getElementById("classes").value;
	switch (x){
		case "science":
			x = "science";
			break;
		case "french":
			x = "french";
			break;
		case "math":
			var x = "math";
			break;
		case "computerprogram":
			var x = "computerprogram";
			break;
		case "religion":
			var x = "religion";
			break;
		case "english":
			var x = "english";
			break;
		case "music":
			var x = "music";
			break
		case "gym":
			var x = "gym";
			break;
		case "nothing":
			var x = "nothing";
			break;
		case "speech":
			var x = "speech";
			break;
		case "history":
			var x = "history";
			break;
		case "homeroom":
			var x = "homeroom";
			break;
		case "LA":
			var x = "LA";
			break;
	}
	var className = document.getElementsByClassName(x);
	var className = document.getElementsByClassName(x);
	for (i=0 ; i<className.length ; i++){
		className[i].style.backgroundColor = "black";
		className[i].style.color = "white";
	}
 }
