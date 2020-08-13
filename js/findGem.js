// 보석 클릭이벤트 클릭하면 메뉴바에 보석이 컬러로 바뀌고 맵상의 보석은 사라짐
let collectCount = 0;



$RgemArr = $('.Realgem > img');
$gemArr = $('.gem');



$RgemArr.on('click', function() {

    $(this).addClass('moveGem');

    setTimeout(() => {
        $(this).remove();
    }, 2000);


    collectCount++
    for (let i = 0; i < $RgemArr.length; i++) {
        if (this == $RgemArr[i]) {
            if (i == 1) {
                $('#bling').remove();
            }
            if (i == 2) {
                document.getElementById('sam').src = "media/gem/sam2.png"
                setTimeout(() => {
                    $('#sam').remove();
                }, 2000);

            }
            $('#' + $gemArr[i].id).css('-webkit-filter', 'grayscale(0%)');
        }
    }


    if (collectCount == 4) {
        setTimeout(() => {
            $("#gem1").addClass('allGemcollect');
        }, 1000);
        setTimeout(() => {
            $("#gem1").remove();
            $("#gem2").addClass('allGemcollect');
        }, 2000);
        setTimeout(() => {
            $("#gem2").remove();
            $("#gem3").addClass('allGemcollect');
        }, 3000);
        setTimeout(() => {
            $("#gem3").remove();
            $("#gem4").addClass('allGemcollect');
        }, 4000);
        setTimeout(() => {

            $("#gem4").remove();



            document.getElementById('teamOne').style.display = 'block';
            document.scrollingElement.style.overflow = 'hidden';
        }, 5000);
    }
})


///////////산이벤트

document.getElementById("bling2").addEventListener("click", function() {
    setTimeout(function() {
        document.getElementById("mountain").src = 'media/gem/Mountain1.png';
    }, 500);
    setTimeout(function() {
        document.getElementById("mountain").src = 'media/gem/Mountain2.png';
    }, 1000);
    setTimeout(function() {
        document.getElementById("mountain").src = 'media/gem/Mountain3.png';
    }, 1500);

    setTimeout(function() {
        document.getElementById("mountain").src = 'media/gem/Mountain.png';
    }, 2000);
    setTimeout(function() {
        document.getElementById('Rgem2').style.display = 'block';
    }, 2500);


}, { once: true })



setInterval(bling, 1200);
//산 힌트 반짝
function bling() {
    setTimeout(function() {
        $('#bling').css('display', 'inline-block');
    }, 700);
    setTimeout(function() {
        $('#bling').css('display', 'none');
    }, 1100);
}



document.getElementById('closeTemaOne').onclick = function() {
    document.getElementById('teamOne').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};











//클릭하면 멤버소개 페이지 넘기는 장면


var $memberPicture = $(".member-details");
var $memberPage = $(".team-overview");
$memberPicture.on('click', chageMemberPage);

var $prevPage = 'AllTeamOne';

function chageMemberPage() {


    for (let i = 0; i < $memberPicture.length; i++) {
        if (this == $memberPicture[i]) {
            $(".pull-left").addClass('pageOver');

            setTimeout(() => {
                $(".pull-left").removeClass('pageOver');
                $("#" + $prevPage).css('display', 'none');
                $prevPage = $memberPage[i + 1].id;
                $("#" + $memberPage[i + 1].id).css('display', 'inline');

            }, 1000);

        }

    }

}