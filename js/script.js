$(function(){ 
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas fa-bars');
            icone.addClass('far fa-times-circle');
            listaMenu.slideToggle();
        }else{
         var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('far fa-times-circle');
            icone.addClass('fas fa-bars');
            listaMenu.slideToggle(); 
        }
    }) 
})

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#apresentation").offset().top
    }, 2000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#formacao").offset().top
    }, 2000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#atuacao").offset().top
    }, 2000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#publicacoes").offset().top
    }, 2000);
});

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
});