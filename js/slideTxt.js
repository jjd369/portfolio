$(function(){

    var list =$('.swiper-slide .swiper-slide-wrapper ul li')
    $('.swiper-slide').on('mousewheel',function(){  
        if($('.swiper-slide').hasClass('swiper-slide-active')){
            animateList();
        }else{
            list.removeClass('is-visible');
        }
    })
    
    function animateList() {
        list.each(function (i) {
            setTimeout(function () {
                list.eq(i).addClass('is-visible');
            }, 300 * (i + 1));
            console.log(list.length);
        });
    }
})