function slideIndex(){
    var parameters = location.search.substring(1).split("&");//검색창에 포함된 매개변수를 substring(1)로 ?를 제거하고 는 split("&") 매개변수가 여러개일때 분활하는 기능
    var temp = parameters[0].split("=");
    itemIndex = unescape(temp[1]);          
    itemIndex =Number(itemIndex);  
    var bulletss = document.getElementsByClassName('swiper-pagination-bullet');
    window.setTimeout(function(){
        bulletss[itemIndex].click();
    },800);
}
window.addEventListener('load',slideIndex());