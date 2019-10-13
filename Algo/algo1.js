/*{
$e=6;
tab=[1,2,7,9,4,8,5,8,9];
var i=0;
while(tab[i]!=$e || i<tab.lenght){
	 i++;
}

if(i >= tab.length){
	console.log('il y a pas de ' +$e);
}
else{
	console.log( +$e+'est dans t['+i+']');
}

}*/


var e=6;
tab=[1,5,6,9,10,15,25,45,50];
var min =tab[0];
var max =tab[tab.length];
var mid;

while(min<max){
	mid=(min+max)/2;
	if(tab[min]<e){
		min++;
	}
	else{
		max--
	}
}
if(tab[min]==e){
	console.log('on a trouver ' e);
}
else{
	console.log('on a pas trouver  ' e);
}