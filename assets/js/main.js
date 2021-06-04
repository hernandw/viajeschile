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
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  /* Popover */
  $(function () {
    $('[data-toggle="popover"]').popover()
  })