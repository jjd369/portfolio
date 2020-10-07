$(function () {
    let $port_lists = $('.port_list ul li');

    $port_lists.each(function (index) {
        $(this).find('a').click(function (event) {
            //버블링 제거
            event.preventDefault();
            //css 초기화
            $port_lists.removeClass('active');
            //active 추가
            $(this).parent().addClass('active');
            $('.item_txt_wrap , .item_img_wrap').removeClass('is-visible');
            //item fade 초기화
            if (index == 0) {
                $('.grid-item').css('display', 'block');
                window.setTimeout(function () {
                    $('.grid-item').find('.item_txt_wrap , .item_img_wrap').addClass('is-visible');
                }, 700)
            } else if (0 < index < 4) {
                $('.grid-item').css('display', 'none');
                $('.g' + index + '').css('display', 'block');
                window.setTimeout(function () {
                    $('.g' + index + '').find('.item_txt_wrap , .item_img_wrap').addClass('is-visible');
                }, 700)
            }
        })
    })
})