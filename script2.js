function Jeu(maxEssai){
    this.nbAleatoire=Math.ceil(Math.random()*100);
    this.nbEssai=0;
    this.nbMax=maxEssai;
}
const jeu=new Jeu(10);
$(function (){
    function essai(){
        const essaie=parseInt($('#essai').val(),10);
        $('div #precede').append(`${essaie}`);
        jeu.nbEssai++;
        if (essaie===jeu.nbAleatoire){
            $('#message').text('Vous avez gagné').addClass('succes').removeClass('erreur');
        }
        else{
            let message=essaie>jeu.nbAleatoire?"Trop haut":"Trop bas";
            if (jeu.nbEssai>=jeu.nbMax){
                message="Partie terminée";
            }
            else if (essaie<jeu.nbAleatoire){
                $('.nombre').filter((index, element)=>parseInt($(element).attr('id'),10) <= essaie).addClass('cache');
            }
            else{
                $('.nombre').filter((index,element)=>parseInt($(element).attr('id'),10)>=essaie).addClass('cache');
            }
        }
    }
})

