// Description: Mini-jeu de devinette
let nombreAleatoire= Math.ceil(Math.random()*100);
let nombreEssais=0;
let nombreSaisi=$("input").val();
let rejouer=true;
let nombreEssaisMax=10;
let nombreEssaisRestants=nombreEssaisMax;
let nombreTrouve=false;
let nombreATrouver=nombreAleatoire;

while (rejouer==true) {
    while (nombreEssais<nombreEssaisMax && nombreTrouve==false) {
        //nombreSaisi=prompt("Saisissez un nombre entre 0 et 100");
        nombreEssais++;
        nombreEssaisRestants--;
        if (nombreSaisi<nombreAleatoire) {
            alert("Le nombre à trouver est plus grand");
        }
        else if (nombreSaisi>nombreAleatoire) {
            alert("Le nombre à trouver est plus petit");
        }
        else {
            alert("Vous avez trouvé le nombre en "+nombreEssais+" essais");
            nombreTrouve=true;
        }
    }
    if (nombreEssais==nombreEssaisMax && nombreTrouve==false) {
        alert("Vous avez perdu");
    }
    rejouer=confirm("Voulez-vous rejouer ?");
    if (rejouer==true) {
        nombreAleatoire= Math.ceil(Math.random()*100);
        nombreEssais=0;
        nombreSaisi=0;
        nombreEssaisRestants=nombreEssaisMax;
        nombreTrouve=false;
        nombreATrouver=nombreAleatoire;
    }
}
//Il s'agit de développer un mini-jeu où l'on devine un nombre choisi de façon aléatoire.
//Le nombre à deviner est compris entre 0 et 100.
//Le joueur a 10 essais pour trouver le nombre.
//A chaque essai, le programme indique si le nombre à trouver est plus grand ou plus petit que le nombre proposé.
//Si le nombre est trouvé, le programme indique le nombre d'essais utilisés.
//Si le nombre n'est pas trouvé au bout de 10 essais, le programme indique que le nombre à trouver était XX.
//Le programme propose de rejouer.
//Si le joueur rejoue, le nombre à trouver est différent.
//Si le joueur ne rejoue pas, le programme s'arrête.
//Le programme doit être codé en Javascript et doit utiliser jQuery.
//Le programme doit être commenté.  // 1. On génère un nombre aléatoire entre 0 et 100
// 2. On demande à l'utilisateur de saisir un nombre
// 3. On compare le nombre saisi avec le nombre aléatoire
// 4. Si le nombre saisi est inférieur au nombre aléatoire, on indique à l'utilisateur que le nombre à trouver est plus grand
// 5. Si le nombre saisi est supérieur au nombre aléatoire, on indique à l'utilisateur que le nombre à trouver est plus petit
// 6. Si le nombre saisi est égal au nombre aléatoire, on indique à l'utilisateur qu'il a trouvé le nombre et on arrête le jeu
// 7. Si le nombre saisi est différent du nombre aléatoire, on recommence à l'étape 2
// 8. Si le nombre d'essais est égal à 10, on indique à l'utilisateur qu'il a perdu et on arrête le jeu
// 9. Si le nombre d'essais est inférieur à 10, on recommence à l'étape 2
// 10. On propose à l'utilisateur de rejouer
// 11. Si l'utilisateur rejoue, on recommence à l'étape 1
// 12. Si l'utilisateur ne rejoue pas, on arrête le jeu
// 13. On affiche le nombre d'essais utilisés
// 14. On affiche le nombre à trouver
// 15. On affiche le nombre saisi
// 16. On affiche le nombre d'essais restants
// 17. On affiche le nombre d'essais maximum
