var affiche = document.getElementById('affichage');
var mult = document.getElementById('Multiplicateur');
var alone = document.getElementById('auto');
var achat = 50;
var achat2= 400;
var compteur = 1;
var compteur2= 0;
var score = 0;
function clique(){
	score = score + compteur;
	console.log('score = ' +score);
	affiche.innerHTML = score;
	if(score >= achat2){
		alone.style.opacity = "1";
	}
}
/*-------------------------------------Fonction clique id <bouton>--------------------------------------------------*/


function incrementer(){
	
	if(score<achat){
		alert('La maison ne fait pas de crédit');
	}else{
		compteur++;
		score = score - achat;
		affiche.innerHTML = score;
		achat = achat *2;
		mult.value= ('Multiplicateur x ' +compteur+ ' | Prix x  ' +(compteur+1)+' = ' +achat);
		console.log('compteur = ' +compteur);
	}

}

/*-------------------------------------Fonction incrementer id <Multiplicateur>--------------------------------------------------*/

function seul(){
	if(score<achat2){
		alert('Pas assez de crédit');
	}
	else{
		compteur2++;
		alone.style.opacity = 1;
		score = score - achat2;
		affiche.innerHTML = score;
		achat2 = achat2 *2;
		setInterval("boost()", 1000);
		alone.value= ('BOOST x ' +compteur2+ ' | Prix x  ' +(compteur2+1)+' = ' +achat2);
		console.log('compteur2 = ' +compteur2);
	}
}

function boost(){
	score++;
	affiche.innerHTML = score;
	console.log('score = ' +score);
}

/*-------------------------------------Fonction seul id <auto>--------------------------------------------------*/