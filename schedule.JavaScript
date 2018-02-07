function myFunction() {
    document.getElementById("demo").style.color= "red";
}
function myFunction() {
 document.getElementById("classes").style.backgroundColor = "black";
 document.getElementById("classes").style.color = "white";
}
var a = "classes"
switch (a) {
  case 'science':
    console.log('Science can be found day 1, 2,3,4,6,7,8,A1,A3,A6 ');
    break;
  case 'french':
    console.log('french can be found day 1,2,4,5,8,A1,A3,A6');
    break;
  case 'math':
    console.log('math can be found day 2,3,4,5,6,7,8');
    break;
  case 'computerprogram':
	console.log('computer program can be found day 1,4,6,A1,A3,A6');
	break;
  case 'religion':
	console.log('religion can be found day 3,5,7,A1,A3,A6');
    break;
  case 'english':
	console.log('english can be found day 1,2,3,5,6,7');
	break;
  case 'music':
	console.log('music can be found day 2,5,6,8');
	break
  case 'gym':
	console.log('gym can be found day 4,8');
	break;
  case 'n/a':
	console.log('N/A can be found day A1,A3,A6');
	break;
  case 'speech':
	console.log('speech can be found day 4,8');
	break;
  case 'history':
	console.log('history can be found day 1,2,3,5,7,8');
	break;
  case 'home room':
	console.log('home room can be found day 3');
	break;
  case 'level assembly':
	console.log('levl assembly can be found day 7');
	break;
  default:
    console.log('enter a valid class no caps'); 
}
