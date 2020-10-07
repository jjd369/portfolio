$(function(){
    //detail 버튼 
    $('.detailBtn').on('click',function(e){
        e.preventDefault();
        var detail_eq = $(this).attr('detailEq');
        $('#detail'+detail_eq).css('display','flex');        
    })
    //close 버튼   
    $('.detailClose').click(function(e){
        e.preventDefault();
        $('.detail_wrap').css('display','none');
    })
})
