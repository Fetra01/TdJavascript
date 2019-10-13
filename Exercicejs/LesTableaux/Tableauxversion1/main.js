/*var tableau = ["Bob", "Julien", "Roger"];*/
/*alert(tableau);*/
/*-------affiche <<Bob, Julien, Roger>>--------*/

/*alert(tableau[0]);
alert(tableau[1]);
alert(tableau[2]);*/
/*--------PArcourir un tableau à la main---------*/

/*var i;
for (var i = 0; i < tableau.length; i++) {
	alert(tableau[i]);
}*/
/*---------Parcourir un tableau automatiquement----------*/

/*alert(tableau.pop());
alert(tableau);*/
/*--------Supprimer le dernier élément----------*/

/*tableau.push("Toto");
alert(tableau);*/
/*---------affiche <<Bob, Julien, Toto>>----------*/

/*------------------------------------Fonction pour tableau------------------------------------------------------*/

var Prenom = ["Bob", "Julien", "Roger"];
	for (var i = 0; i < Prenom.length; i++) {
		var myliste = document.createElement("li");
		myliste.innerHTML = Prenom[i];
		document.getElementById("liste").appendChild(myliste);
	}
function ajouterElement(){
    let newNom=document.getElementById("myliste").value;
    Prenom.push(newNom);
    document.createElement('li').innerHTML = newNom;
    document.getElementById('liste').appendChild(myliste);
};

function supprimer() {
    const dernierPrenom = document.getElementById("liste").lastChild;
    document.getElementById('liste').removeChild(dernierPrenom);
    tabNom.pop();
};

