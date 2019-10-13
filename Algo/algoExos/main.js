/*--------http://pise.info/algo/enonces5.html--------*/
/*var n;
var Pg = 0;
var IPg;*/
/*-------------Exo 5.8------------*/
/*for (var i = 0; i < 10; i++) {
	n = prompt("entrer un nombre");
	if(n >= Pg){
		Pg = n;
		IPg = i;
	}
	console.log("i = " +n);
}
console.log( +Pg);
console.log("Les plus grand nombre est entrer au i " +IPg);*/


/*----------Exo 5.9-----------*/
/*var i = 0;
while(n!= 0){
	
	n = prompt('Entrer un nombre');
	if (n>Pg) {
		Pg = n;
		IPg = i;
	}
	console.log("i["+i+"] = " +n);
	i++;
}
console.log('le plus grand est ' +Pg);
console.log('le plus grand a été entrer au i['+IPg+']');
*/


/*-------------Exo 5.10------------------*/

/*var Prix, Montant;
var reste = 0;
var som = 0;
var NB10 = 0, NB5 = 0, NB1 = 0;

while(Prix != 0){
	Prix = prompt('Entrer le Prix')
	console.log('Prix = ' +Prix);
	som = parseInt(som) + parseInt(Prix);
	console.log('som = ' +som);
}
console.log('La somme est de  ' +som);
Montant = prompt('Entrer le Montant');
console.log('Le Montant est de ' +Montant);
reste = parseInt(Montant) - parseInt(som);
console.log('Le reste a rendre est de ' +reste);
while(reste !=0){
	if (reste >= 10) {
		NB10++;
		console.log('NB10 = ' +NB10);
		reste = parseInt(reste) - 10;
	} else if (reste >= 5) {
		NB5++;
		console.log('NB5 = ' +NB5);
		reste = parseInt(reste) - 5;
	} else if (reste >= 1) {
		NB1++;
		console.log('NB1 = ' +NB1);
		reste = parseInt(reste)-1;
	}
}
console.log('Le reste à rendre est '+NB10+' 10euro, '+NB5+' 5euro et ' +NB1+' 1euro');*/

/*------------------Exo 6.4----------------------*/
/*var s = prompt('Entrer un chiffre'); 
var N = new Array(s);

for (var i = 0; i < s; i++) {
	N[i]= i*i;
	console.log('N['+i+'] = ' +N[i]); 
}*/

/*--------------Exo 6.5---------------*/
/*var s = prompt('Entrer un chiffre');
var N =  new Array(s);
N[0]=1;
console.log('N[0] = 1');
for (var i = 1; i < s; i++) {
	
	N[i] = N[i-1] + 2;
	console.log('N['+i+'] = ' +N[i]);
}
*/
/*-------------------Exo 6.6--------------------------*/
/*var s = prompt('Entrer un chiffre');
var suite = new Array(s);
suite[0]=1;
suite[1]=1;
console.log('suite[0] = 1');
console.log('suite[1] = 1');
for (var i = 2; i < s; i++) {
	suite[i] = suite[i-1] + suite[i-2];
	console.log('suite['+i+'] = ' +suite[i]);
}
*/
/*------------------Exo 6.7-----------------------*/
/*var n;
var s = prompt('Entrer un chiffre');
var tab = new Array(9);
var add = 0;
var moy = 0;
for (var i = 0; i < s; i++) {
	n = prompt('Entrer un chiffre');
	tab[i] = n;
	add =  parseInt(add) + parseInt(tab[i]);
	console.log('add = ' +add);
	console.log('tab['+i+'] = ' +tab[i]);
}
moy = parseInt(add)/parseInt(s);
console.log('La moyenne est de ' +moy);*/

/*--------------Exo 8--------------------*/
/*var s = prompt('Entrer un chiffre');
var tab = new Array(s);
var n;
var pos = 0;
var neg = 0;

for (var i = 0; i < s; i++) {
	n = prompt('Entrer un chiffre');
	tab[i]=n;
	if (tab[i] > 0) {
		pos++;
	}
	else{
		neg++;
	}
	console.log('tab['+i+'] = ' +tab[i]);
}
console.log('Les nombres Positives sont ' +pos+ ' et Les nombres Negatives sont ' +neg );*/
/*----------------Insertion das un tableau trié-----------------------*/
/*function insertion(){
	var t = [1,2,5,6,9,10];
	var nb = 7;
	var i = t.length-1;

	while(t[i] > nb && i > 0){
		
		t[i+1] = t[i];
		i--
	}
	t[i+1]=nb;

	for (var j = 0; j < t.length-1; j++) {
		console.log('t['+j+'] = ' + t[j] );
	}
}
console.log(insertion());*/
/*--------------------Echange---------------------------------*/

/*function echange(a,b){
	a = 5;
	b = 9;
	var c;
	console.log('a = ' +a+ ' et b = ' +b);
	c=a;
	a=b;
	b=c;
	console.log('a = ' +a+ ' et b = ' +b);
}
console.log(echange());
*/