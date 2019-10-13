let tabNom=["Bob","Julien","Roger"];


for (let i=0; i<tabNom.length; i++){
	document.createElement('li').innerHTML = tabNom[i];
	document.getElementById("liste").appendChild(li);
};

function ajouterElement(){
    let newNom=document.getElementById("prenom").value;
    tabNom.push(newNom);
    document.createElement('li').innerHTML = newNom;
    document.getElementById('liste').appendChild(li);
};

function supprimer() {
    const dernierPrenom = document.getElementById("liste").lastChild;
    document.getElementById('liste').removeChild(dernierPrenom);
    tabNom.pop();
};