var itemIndex
$('.item_txt_wrap').each(function () {
    $(this).find('a').eq(3).click(function (e) {
        e.preventDefault();
        itemIndex = $(this).attr('itemEq');

        location.href = 'index.html?itemindex=' + itemIndex;
    })
})  