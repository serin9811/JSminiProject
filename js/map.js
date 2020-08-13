let scrollPosition;
window.addEventListener('scroll', catmove);
//click click 문구가 이미지 옆에 뜨는 것
let icon = document.getElementById('clickClock');
//메인 캐릭터
let char = document.getElementById('char');
//고양이 캐릭터
let kitty = document.getElementById('kitty');
//말풍선
let dialogue = $(".arrow_box");
//코멘트
let comment = $(".arrow_box h1");
//말풍선에 들어갈 comment 배열
let commentArr = ["고양이다!<br>너무 귀여워!!", "성샘의 유튜브는<br> 꼭 보고가야지! 좋아요도!!", "예쁜집이다<br>평당 얼마씩할까?", "hoxy ... <br> 메일이왔나 확인해볼까?"];

// 스크롤 안내문 반짝이게 하기
let notice = document.getElementById('notification');
setInterval(showNotification, 1000);

function showNotification() {
    notice.style.opacity = 0;
    setTimeout(function() {
        notice.style.opacity = 1;
    }, 500);
}

// 문자를 숫자로 변환하는 기능
function toNumber(styleAttribute) {
    const n = styleAttribute.replace('px', '');
    return n;
}

//고양이 걸어다니는 애니메이션 멈추는 기능
function stopAnimation(kitty) {
    $(kitty).css("-webkit-animation", "none");
    $(kitty).css("animation", "none");
    kitty.style.top = toNumber(char.style.top) + 'px';
    var k = kitty.style.left;
    kitty.style.left = toNumber(char.style.left) + 100 + 'px';
    console.log(k);
    kitty.style.transform = 'scaleX(1)';
}

//고양이를 클릭하면 고양이 혼자 걸어다니는 애니 멈추는 이벤트 부착
var isClicked;
$(kitty).on('click', function() {
    isClicked = true;
    stopAnimation(kitty);
});


//캐릭터와 고양이가 map에서 이동하는 기능
function catmove() {
    scrollPosition =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

    let noticeDisplay = 'flex';
    if (scrollPosition > 0.2) noticeDisplay = 'none';
    notice.style.display = noticeDisplay;
    if (0.33 < scrollPosition && scrollPosition < 0.43) {
        char.style.top = 2270 + (scrollPosition - 0.33) * 6000 + 'px';
        char.style.left = '120PX';
        char.style.transform = 'scaleX(-1)';
        kitty.style.top = '2744px';
    }




    if (0.43 < scrollPosition && scrollPosition < 0.56) {

        char.style.top = '2710px';
        char.style.left = 148 + (scrollPosition - 0.43) * 12200 + 'px';
        char.style.transform = 'scaleX(1)';
        icon.style.display = 'block';
        icon.style.top = '2400px';
        icon.style.left = '750px';
        src1 = 'media/main/cha2.png';
        src2 = 'media/main/cha3.png';
        src3 = 'media/main/cha1.png';

        if (isClicked) {
            kitty.style.top = toNumber(char.style.top) + 'px';
            kitty.style.left = toNumber(char.style.left) + 100 + 'px';
            kitty.style.transform = 'scaleX(1)';
        }

        //말풍선 등장 1       
        if (scrollPosition > 0.46 && scrollPosition < 0.48 && comment.html() != commentArr[0] && (!isClicked)) {
            //멘트설정하기


            comment.html(commentArr[0]);
            //보이게만들기 & 스크롤잠깐멈춤
            $(".arrow_box").css("display", 'block');
            document.scrollingElement.style.overflow = 'hidden';

            //위치잡기
            dialogue.css('top', (2710 - 200) + 'px');
            dialogue.css('left', 148 + (scrollPosition - 0.43) * 12200 + 'px');

            //사라지게하기 & 스크롤풀어주기
            setTimeout(() => {
                document.scrollingElement.style.overflowY = 'auto';
                document.scrollingElement.style.overflowX = 'hidden';
                $(".arrow_box").fadeOut();
            }, 1500);
            return;
        }
    }






    if (0.58 < scrollPosition && scrollPosition < 0.72) {
        walkingChar = null;
        char.style.top = '3437px';
        char.style.left = 2000 - (scrollPosition - 0.58) * 9900 + 'px';

        src1 = 'media/main/charBack1.png';
        src2 = 'media/main/charBack2.png';
        src3 = 'media/main/charBack1.png';

        if (isClicked) {
            kitty.style.top = toNumber(char.style.top) + 'px';
            kitty.style.left = toNumber(char.style.left) + 20 + 'px';
            kitty.style.transform = 'scaleX(-1)';

        }



        //말풍선 등장 2     
        if (scrollPosition > 0.62 && scrollPosition < 0.64 && comment.html() != commentArr[1]) {

            //멘트설정하기
            comment.html(commentArr[1]);
            //보이게만들기 & 스크롤잠깐멈춤
            dialogue.css("display", 'block');
            document.scrollingElement.style.overflow = 'hidden';
            //위치잡기
            dialogue.css('top', 3337 + 'px');
            dialogue.css('left', 2000 - (scrollPosition - 0.58) * 9900 + 'px');

            //사라지게하기 & 스크롤풀어주기
            setTimeout(() => {
                document.scrollingElement.style.overflowY = 'auto';
                document.scrollingElement.style.overflowX = 'hidden';
                $(".arrow_box").fadeOut();
            }, 2000);
            return;
        }

    }

    if (0.72 < scrollPosition && scrollPosition < 0.85) {
        char.style.top = 3287 + (scrollPosition - 0.72) * 10000 + 'px';
        char.style.left = '700px';
        char.style.transform = 'scaleX(1)';
        icon.style.top = '3865px';
        icon.style.left = '1000px';

        src1 = 'media/main/cha2.png';
        src2 = 'media/main/cha3.png';
        src3 = 'media/main/cha1.png';

        if (isClicked) {
            kitty.style.top = toNumber(char.style.top) - 20 + 'px';
            kitty.style.left = toNumber(char.style.left) + 'px';
            kitty.style.transform = 'scaleX(1)';
        }

        //말풍선 등장 3      
        if (scrollPosition > 0.82 && scrollPosition < 0.84 && comment.html() != commentArr[2]) {
            //멘트설정하기
            comment.html(commentArr[2]);
            //보이게만들기 & 스크롤잠깐멈춤
            $(".arrow_box").css("display", 'block');
            document.scrollingElement.style.overflow = 'hidden';

            //위치잡기
            dialogue.css('top', 3187 + (scrollPosition - 0.72) * 10000 + 'px');
            dialogue.css('left', 700 + 'px');

            //사라지게하기 & 스크롤풀어주기
            setTimeout(() => {
                document.scrollingElement.style.overflowY = 'auto';
                document.scrollingElement.style.overflowX = 'hidden';
                $(".arrow_box").fadeOut();
            }, 1500);
            return;
        }
    }
    if (0.85 < scrollPosition && scrollPosition < 0.94) {
        char.style.top = '4580.72px';
        char.style.left = 700 - (scrollPosition - 0.85) * 10000 + 'px';
        char.style.transform = 'scaleX(-1)';
        icon.style.top = '4346px';
        icon.style.left = '215px';
        if (isClicked) {
            kitty.style.top = toNumber(char.style.top) + 'px';
            kitty.style.left = toNumber(char.style.left) + 300 + 'px';
            kitty.style.transform = 'scaleX(-1)';

        }
    }

    if (0.94 < scrollPosition) {
        char.style.top = '5090PX';
        char.style.left = 0 + (scrollPosition - 0.94) * 22000 + 'px';
        char.style.transform = 'scaleX(1)';
        icon.style.top = '4990px';
        icon.style.left = '1580px';
        if (isClicked) {
            kitty.style.top = toNumber(char.style.top) + 'px';
            kitty.style.left = toNumber(char.style.left) - 20 + 'px';
            kitty.style.transform = 'scaleX(1)';
        }
    }


    //말풍선 등장 4      
    if (scrollPosition > 0.99 && comment.html() != commentArr[3]) {
        //멘트설정하기
        comment.html(commentArr[3]);
        //보이게만들기 & 스크롤잠깐멈춤
        $(".arrow_box").css("display", 'block');
        document.scrollingElement.style.overflow = 'hidden';

        //위치잡기
        dialogue.css('top', '4890PX');
        dialogue.css('left', 0 + (scrollPosition - 0.94) * 22000 + 'px');

        //사라지게하기 & 스크롤풀어주기
        setTimeout(() => {
            document.scrollingElement.style.overflowY = 'auto';
            document.scrollingElement.style.overflowX = 'hidden';
            $(".arrow_box").fadeOut();
        }, 1500);
        return;
    }
}

//클릭버튼 움직이는거
let degree = 10;
setInterval(cl, 500);

function cl() {
    if (degree == 10) {
        degree = -10;
    } else {
        degree = 10;
    }
    icon.style.transform = 'rotate(' + degree + 'deg)';
}

//사람 움직임 구현
setInterval(changeImg, 450);

let src1 = 'media/main/cha2.png';
let src2 = 'media/main/cha3.png';
let src3 = 'media/main/cha1.png';

function changeImg() {

    char = document.getElementById('char');

    kitty.src = 'media/icons/kitty3.png';

    char.src = src1;
    setTimeout(function() {
        char.src = src2;
        kitty.src = 'media/icons/kitty1.png';

    }, 150);
    setTimeout(function() {
        kitty.src = 'media/icons/kitty2.png';
        char.src = src3;
    }, 300);
}