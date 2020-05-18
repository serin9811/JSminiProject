window.onload = function () {

    ////////////////////////////////////////////////////////////팀의 js 시작///////////////////////////////////////////////////////////////

    //팝업 업 버튼 .팀
    var btn = document.getElementById('saybtnT');

    //버튼 누르면 팝업 보이기.팀
    btn.onclick = function () {
        document.getElementById('popupBoxT').style.display = 'block'
    }

    //클로즈버튼 닫는부분.팀
    var closeBtn = document.getElementById('closeT');

    //클로즈버튼 클릭시.팀

    closeBtn.onclick = function () {
        document.getElementById('popupBoxT').style.display = 'none';
        for (var i = 0; i < items.length; i++) {         
            items[i].classList.remove("in-view");    //      timeline 초기화  
       }
    }


    ////////////////////////////////////////////////////////////팀의 js 끝/////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////timeline 시작 by JW////////////////////////////////////////////////////////

    var items = document.querySelectorAll(".timeline ul li");


    window.onwheel = function () {
        console.log("마우스이동")
        for (var i = 0; i < items.length; i++) {         
             items[i].classList.add("in-view");            
        }    
    }


    // 제이쿼리로 구현시 필요한 코드 by JW //

    // $(window).bind('mousewheel', function (event) { //마우스휠 감지
    //     if (event.originalEvent.wheelDelta >= 0) { //마우스휠 위로 돌릴때 이벤트  
    //         for (var i = 0; i < items.length; i++) {
    //             if (isElementInViewport(items[i])) {
    //                 items[i].classList.remove("in-view");
    //             }
    //         }
    //     } else { //마우스휠 아래로 돌릴때 이벤트
    //         for (var i = 0; i < items.length; i++) {
    //             if (isElementInViewport(items[i])) {
    //                 items[i].classList.add("in-view");
    //             }
    //         }
    //     }
    // });

    ////////////////////////////////////////////////////////////end of. timeline by JW///////////////////////////////////////////////////////////////

}