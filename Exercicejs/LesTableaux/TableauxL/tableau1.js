
$bouton=document.getElementById('bouton');
$text=document.getElementById('text');
tableau=['bob','julien', 'roger'];
length=tableau.length;
var i=0;
	
for(i=0; i<tableau.length; i++){
	ligne=document.createElement("li");
	ligne.appendChild(document.createTextNode(tableau[i]));
	document.getElementById("liste").appendChild(ligne);
}
function ajouter(){
	bobi1Elt=document.getElementById('text').value
	var bobiElt = document.createElement("li"); 
bobiElt.appendChild(document.createTextNode(bobi1Elt)); 
document.getElementById("liste").appendChild(bobiElt);
tableau.push(bobi1Elt);
afficherliste()
}
$bouton.addEventListener("click", ajouter)
function afficherliste(){
var	bool;
	if(bootrue){
	for(i=length; i<tableau.length-1; i++){
	
	ligne=document.createElement("li");
	ligne.appendChild(document.createTextNode(tableau[i]));
	document.getElementById("liste").appendChild(ligne);

}
}else iffalse){
	alert("déja saisi")
}


length=tableau.length
false;
	console.log(bool)
}
