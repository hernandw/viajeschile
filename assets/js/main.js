/* Animacion de Smooth Scroll */

$(document).ready(function(){
$("li > a").click(function(event){
    event.preventDefault();

    var gato = this.hash;

    $("html").animate({
        scrollTop: $(gato).offset().top-60,
    
    },
    800
    );
});
});

/* Tool tips */

    $('[data-toggle="tooltip"]').tooltip()
 

  /* Popover */
  
    $('[data-toggle="popover"]').popover()
