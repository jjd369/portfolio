window.addEventListener("load", function() {
    let item1 = document.querySelectorAll('#site1 .item_img_wrap, #site1 .item_txt_wrap');
    let head_fade = document.querySelectorAll('.logo , .gnb , .gnb_m_btn, .con_head , .con_body');
    //grid item1 
    for (let i = 0; i < item1.length; i++) {
        window.setTimeout(function(){
            item1[i].classList.add('is-visible');
        },200*i)
    }
    //header 영역 
    head_fade.forEach(function(element,index){
        head_fade[index].classList.add('is-visible');
    })
});