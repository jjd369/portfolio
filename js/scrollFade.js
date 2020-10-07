
let last_known_scroll_position = 0;
let ticking = false;
let item = document.querySelectorAll('.grid-item');
let item_height = document.querySelector('.grid-item').offsetHeight;

function doSomething(scroll_pos) {
// scroll 위치에 대한 작업을 하세요
    console.log('스크롤');
    for (let i = 1; i < item.length; i++) {
        if(scroll_pos>=item_height*i){
                item[i].querySelectorAll('.row > div').forEach(function(element, index){
                    window.setTimeout(function(){
                    item[i].querySelectorAll('.row > div')[index].classList.add('is-visible');
                    },220*index)
                })
        }
        
    }
}

window.addEventListener('scroll', function(e) {
last_known_scroll_position = window.scrollY || document.documentElement.scrollTop;//스크롤 y값
if (!ticking) {
    window.requestAnimationFrame(function() {
    doSomething(last_known_scroll_position);
    ticking = false;
    });

    ticking = true;
}
});
//파이어폭스 인덱스에서 포폴 이동 중 스크롤 안먹히는 경우 
window.addEventListener('load', function(e){
    console.log(document.documentElement.scrollTop);
    let scrollTop_pos = document.documentElement.scrollTop;
    for (let i = 1; i < item.length; i++) {
        if(scrollTop_pos>=item_height*i){
                item[i].querySelectorAll('.row > div').forEach(function(element, index){
                    window.setTimeout(function(){
                    item[i].querySelectorAll('.row > div')[index].classList.add('is-visible');
                    },220*index)
                })
        }
        
    }
})