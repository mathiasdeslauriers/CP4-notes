function Background() {
var x = document.getElementById("classes").value;
switch (x){
  case "science":
	var x = "science"
    break;
  case "french":
	var x = "french"
    break;
  case "math":
	var x = "math"
    break;
  case "computerprogram":
	var x = "computerprogram"
	break;
  case "religion":
	var x = "religion"
    break;
  case "english":
	var x = "english"
	break;
  case "music":
	var x = "music"
	break
  case "gym":
	var x = "gym"
	break;
  case "nothing":
	var x = "nothing"
	break;
  case "speech":
	var x = "speech"
	break;
  case "history":
	var x = "history"
	break;
  case "homeroom":
	var x = "home room"
	break;
  case "LA":
	var x = "level assembly"
	break;
}
var className = document.getElementByClassName(x);
 for (a=0 ; a<className.length ; a++){
	className[a].style.bagroundColor = "black";
	}
 }
 }
