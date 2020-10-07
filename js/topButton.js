$(function(){
    
    /* contents head height */
    var chHeight = $('.con_head').outerHeight();

    /*top button css,position*/
    $(window).scroll(function(){
        /*top button position bottom */
        if($(this).scrollTop() > chHeight){
            $('.top').fadeIn(500);
            $('.top').addClass('on');
        }else{
            $('.top').fadeOut();
            $('.top').removeClass('on');
        }
    })

})