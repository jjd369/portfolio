let last_known_scroll_position = 0;
        let ticking = false;
        let once = true

        function doSomething(scroll_pos) {
        // scroll 위치에 대한 작업을 하세요
        if(scroll_pos >= 200){
            if(once){
                Criclle('.round');
                once = false;
            }
        }
        function Criclle(el){
            $(el).circleProgress({fill: {color:'#ff5c5c'}})
        }
        }

        window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;//스크롤 y값

        if (!ticking) {
            window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
            });

            ticking = true;
        }
        });