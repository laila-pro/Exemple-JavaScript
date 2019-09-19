document.addEventListener("keydown",keyboard);
var deplace=10;
var carre1=document.getElementById("carre1");
var carre=document.getElementById("carre2");

var deplacementMax = 39;
var deplacementGauche = 0;
var deplacementHaut = 0;
/*gitboundingclientRest()*/
/*addEventListener*/

function keyboard(evt){
  switch(evt.keyCode) {
  // touche gauche
   case 37:
   if(deplacementGauche > 0)
   {
     carre.style.left=(carre.offsetLeft-deplace)+"px";
     deplacementGauche--;
   }
   break;
   // touche haut

   case 38:
   if (deplacementHaut > 0)
   { carre.style.top=(carre.offsetTop-deplace)+"px";
   deplacementHaut++;
 }

   break;
   // touche droite
   case 39:
   if(deplacementGauche < deplacementMax)
   {
     carre.style.left=(carre.offsetLeft+deplace)+"px";
     deplacementGauche++;
   }
   break;
   // touche bas
   case 40:
   if(deplacementHaut < deplacementMax)
   {
     carre.style.top=(carre.offsetTop+deplace)+"px";
     deplacementHaut++;
   }
   break;

}
}
