/*Exercice 3.1*/
/*$nbr=prompt("Entrer un nombre!");
if($nbr>0){
	document.write("Le nombre est Positif");
}
else{
document.write("Le nombre est négatif")
}*/

/*Exercice 3.2*/

/*$nbr1=prompt("Entrer un nombre ");
$nbr2=prompt("entrer un nombre ");
if(($nbr1>0 & $nbr2>0) | ($nbr1<0 & $nbr2<0)){
	document.write("Le produit de nbr1 et nbr2 est positif");
}
else{
	document.write("Le produit de nbr1 et nbr2 est négatif");
}*/

/*Exercice 3.3*/

/*nom1=prompt("Entrer un nom");
nom2=prompt("Entrer un nom");
nom3=prompt("Entrer un nom");

if(nom1<nom2 & nom2<nom3){
	document.write("Les noms sont rangé par ordres alphabétique");
}
else{
	document.write("Les noms ne sont pas rangé par ordres alphabétique");
}*/

/*Exercice 3.4*/

/*$nbr1=prompt("Entrer un nombre");
$nbr2=prompt("Entrer un nombre");

if($nbr1==0 | $nbr2==0){
	document.write("Le produit de nbr1 et nbr2 est nul");
}
else if(($nbr1>0 & $nbr2>0) |($nbr1<0 & $nbr2<0)){
	document.write("Le produit de nbr1 et nbr2 est positif");
}
else{
document.write("le produit de nbr1 et nbr2 est négatif");
}*/

/*Exercice 3.5*/

/*$age=prompt("Entrer un âge");

if($age>=12){
	document.write("tu es en Cadet!");
}
else if ($age>=10){
	document.write("tu es en Minime");
}
else if($age>=9){
	document.write("tu es en Pupille");
}
else if($age>=6){
 document.write("tu es en Poussin");
}
else{
	document.write("tu n'as pas l'âge requis");
}*/

/*Exercice 4.2*/

/*$h=prompt("Entrer heure");
$min =prompt("Entrer minute");
$min = (parseInt($min) + 1)

if($min==60){
	$min=0;
  $h= parseInt($h) +1;
}
	if($h==24){
  	$h=0;
  }
  alert("dans une minute il sera "+$h+" h "+(parseInt($min++))+" min");
  */
  
/*Exercice 4.3*/
  
/*$h = prompt("Entrer heure");
$min = prompt("Entrer minute");
$s = prompt("Entrer seconde");

$s = (parseInt($s) + 1);

if(parseInt($s) == 60){
	$s = 0;
  $min = (parseInt($min) + 1);
}
	if(parseInt($min) == 60){
  	$min = 0;
    $h = (parseInt($h) + 1);
  }
  	if(parseInt($h) == 24){
    	$h = 0;
    }
    	alert("Dans une seconde il sera "+$h+" h "+$min+" min "+$s+" seconde ");
      */
      
/*Exercice 4.4*/


/*$n = prompt("Entrer le nombre de photocopie");
$p = 0;
if ($n <= 10){
	$p = (parseInt($n) * 0.10);
}
else if ($n <=30){
	$p = 10 * 0.10 + ((parseInt($n)-10) * 0.09);
}
else{
	$p = 10 * 0.10 + (20 * 0.09) + ((parseInt($n) - 30) * 0.08);
}
document.write("Le prix totale est "+$p+" €");
*/

/*Exercice 4.5*/

/*$sex = prompt("Entrer le sex");
$age = prompt("Entrer l'âge");
$c1= ($sex == "M" & $age >= 20) ;
$c2= ($sex == "F" & ($age > 18 & $age <= 35));
if( $c1 | $c2 ){
	alert("Imposable");
}
else{
	alert("pas imposable");
}
*/

/*Exercice 4.6*/

/*$A= prompt("Entrer le score en %");
$B= prompt("Entrer le score en %");
$C= prompt("Entrer le score en %");
$D= prompt("Entrer le score en %");

$C1 = $A > 50;
$C2 = $B > 50 | $C > 50 | $D > 50;
$C3 = $A >= $B & $A >= $C & $A >= $D;
$C4 = $A >= 12.5;

if ($C1){
	document.write("Elu au premier tour");
}
else if ( $C2 | !$C4){
	document.write("Battu, éliminé,sorti!!!");
}
else if($C3){
	document.write("Ballotage favorable");
}
else{
	documetn.write("Ballotage défavorable");
}*/



/*{
	for (var i = 0; i <= tab.length; i++) {
		if(tab[i]==$e){
			console.log('il y a' +$e);
		}
		else{
			console.log('il y a pas de' +$e);
		}
	}
}*/

	/*$e=10;
	/*var p=0*/
	/*var tab=[1,2,3,8,12,45];
	var i=0;
	/*var i=0;
	while(tab[i]!=$e && i< tab.lenght){
		i++;
	}
	if(i > tab.length){
	console.log('il y a pas de ' +$e);
	}
	console.log( $e+'est dans tab['+i+']');
	*/
	/*for (var i = 0; i <= tab.length; i++) {
		if(tab[i]==$e){
			p++;
		}
	}
	console.log($e+ ' est present ' + p+ ' fois');*/
	/*---------------------------------------------------------------------------------------------*/
	/*----------------------------Tableau trié---------------------------------------------------*/
	/*while(tab[i]!=$e && tab[i] < $e){
		i++
	}
	
	if(tab[i]==$e){
		console.log($e+ ' est là');
	}else{
		console.log('pas de ' +$e);
	}*/


		
