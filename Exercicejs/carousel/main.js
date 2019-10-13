$carousel = document.getElementById("carousel");
$suivant = document.getElementById("suivant");
$precedent = document.getElementById("precedent");
$carousel.style.borderColor = "#f00";
var liste = document.getElementById("carousel").children;
position = 0;

function suivant(){
	console.log(position);
	if(position < liste.length-1){

		liste[position].style.display = "none";
		position++;
	}
	else{
		position = 0;
		for (var i = 0; i < liste.length-1; i++) {
			liste[i].style.display = null;
		

		}
	}
}
$suivant.onclick = suivant;

function precedent(){
	if(position >= 0){
		console.log("coucou if");
		console.log("position=" +position);
		liste[position].style.display = null;
		position--;	
	}
	else{
		position = 0;
		
		console.log("position=" +position);
		for (var i = 0; i <liste.length-1; i++) {
			console.log("i=" +i);
			liste[i].style.display = "none";
			position++;
			console.log("position=" +position);
		}
	}
}
$precedent.onclick = precedent;