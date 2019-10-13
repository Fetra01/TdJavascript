$liste = document.getElementById("liste");


function selectionne(e){
	e.target.classList.toggle("selected");
}

$liste.onclick = selectionne;

var lisTe = liste.children;

function supprimer(){
	for (var i = 0; i <= lisTe.length; i++) {
	 	if(lisTe[i].classList.contains("selected")){
	 		lisTe[i].classList.add("supprimer");
	 	}
	}
}

function afficher(){
	for (var i = 0; i <= lisTe.length; i++) {
		if(lisTe[i].classList.contains("supprimer")  ){
			lisTe[i].classList.add("afficher");
			lisTe[i].classList.remove("supprimer");
		}
	}
}