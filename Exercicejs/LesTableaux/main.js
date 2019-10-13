/*var tableau = ["Bob", "Julien", "Roger"];*/
/*alert(tableau);*/
/*affiche << Bob, julien, ROger >>*/

/*alert(tableau[0]); //affiche << Bob >>
alert(tableau[1]); // affiche << Julien >>
alert(tableau[2]);*/	//affiche << Roger >>
/* Parcourir le tableau à la main*/

/*var i;
for (var i = 0; i < tableau.length; i++) {
	alert(tableau[i]);
}*/
/*Parcourir un tableau automatiquement*/

/*alert(tableau.pop()); // affiche << Roger>>
alert(tableau); */// affiche << Bob, Julien >>
/*Supprimer le dernir élément*/

/*tableau.push("Toto");
alert(tableau); */ // affiche << Bob, Julien, Toto >>
/*Ajouter un élément à la fin du tableau*/


/*------------------------------------- Exercice d'application--------------------------------------------------------------*/


/*function EntrerLaListe(){
	var myliste = document.createElement("li");
	console.log("je rentre dans li");
	var mylisteAp =  document.createTextNode("Bob", "Julien", "Roger");
	myliste.appendChild(mylisteAp);
	
} */
var Nom=["Bob", "Julien", "Roger"];
var ajout =document.getElementById('valid');

function afficher(){
	for (var i = 0; i < Nom.length; i++) {
		var myliste=document.createElement("li");
		myliste.innerHTML = Nom[i];
		console.log(myliste);
		document.getElementById('liste').appendChild(myliste);
	}
}

function rajouter(){
    var user=document.getElementById('prenom').value;
            Nom.push(user);
            
        }


