//code pour fermer la popup//

//  regrouper le code dans une fonction jQuery ready//

jQuery(document).ready(function($) { // le code javascript ne s'exécutera que lorsque la page sera entièrement chargée dans le navigateur//
    
    $('.popup-close').click(function() { // clique pour fermer la popup//
        
        $('.popup-salon').hide();// Cacher la popup//
        
        $('.popup-overlay').css('z-index', 'initial');// le z-index de l'overlay revient à son état d'origine après la fermeture de la popup//
    });
});
