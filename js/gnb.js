$(function () {
    var gnbBtn = $('.gnb_m_btn');
    var gnb = $('.gnb_m');
    var list = $('.gnb_m ul li')

    gnbBtn.click(function () {
        //gnb btn off
        if (gnbBtn.hasClass('on')) {
            //핸들링 값 초기화
            $(this).removeClass('on');
            //버튼 이미지 변경
            $(this).find('i').removeClass('fas fa-times');
            $(this).find('i').addClass('fas fa-bars');
            //animation 초기화
            list.removeClass('is-visible');
            //mobile gnb display none;
            gnb.hide();

        } else {
            //gnb btn on 
            //핸들링값 on
            $(this).addClass('on');
            //버튼 이미지 변경
            $(this).find('i').removeClass('fas fa-bars');
            $(this).find('i').addClass('fas fa-times');
            //mobile gnb display block;
            gnb.css({ 'display': 'block', 'opacity': 0 }).animate({ 'opacity': 1 }, 'fast',);
            //animation 
            animateList();
        }
    })
    /*list animation*/
    function animateList() {
        list.each(function (i) {
            setTimeout(function () {
                list.eq(i).addClass('is-visible');
            }, 300 * i);
            console.log(list.length);
        });
    }


})


 