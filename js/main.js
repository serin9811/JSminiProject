//////////////////////////////////////////////////////////맵 아이콘/////////////////////////////////////////////////////
//메일 박스에 메일이 들어오는 애니메이션
let mailing = setInterval(receiveMail, 1200);

function receiveMail() {
    var mailbox = document.getElementById('mailbox');
    mailbox.src = 'media/icons/mailbox2.png';
    setTimeout(function() {
        mailbox.src = 'media/icons/mailbox3.png';
    }, 400);
    setTimeout(function() {
        mailbox.src = 'media/icons/mailbox1.png';
    }, 800);
}

//시계탑에 시계가 돌아가는 애니메이션
let ticktok = setInterval(clockTicking, 1200);

function clockTicking() {
    var clock = document.getElementById('clock');
    clock.src = 'media/icons/clock2.png';
    setTimeout(function() {
        clock.src = 'media/icons/clock3.png';
    }, 400);
    setTimeout(function() {
        clock.src = 'media/icons/clock1.png';
    }, 800);
}

//나무에 열매가 열리는 애니메이션
let growing = setInterval(bearingFruits, 1200);

function bearingFruits() {
    var tree = document.getElementById('tree');
    tree.src = 'media/icons/tree2.png';
    setTimeout(function() {
        tree.src = 'media/icons/tree3.png';
    }, 400);
    setTimeout(function() {
        tree.src = 'media/icons/tree1.png';
    }, 800);
}

//건물에 책이 쌓이는 애니메이션
let building = setInterval(pilingBooks, 1200);

function pilingBooks() {
    var school = document.getElementById('school');
    school.src = 'media/icons/school2.png';
    setTimeout(function() {
        school.src = 'media/icons/school3.png';
    }, 400);
    setTimeout(function() {
        school.src = 'media/icons/school1.png';
    }, 800);
}


// 버튼과 팝업의 연결 이벤트 

///////////////////////////////바 클릭시 팝업 생성 시작///////////////////////////////

var popMove = document.getElementsByClassName('label');

var btn1 = document.getElementById('clock');
var btn2 = document.getElementById('school');
var btn3 = document.getElementById('tree');
var btn4 = document.getElementById('mailbox');
var btn5 = document.getElementById('miniGame');

var btnArr = [btn1, btn2, btn3, btn4, popMove[0], popMove[1], popMove[2], popMove[3], popMove[4], btn5];

for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].addEventListener('click', btnPopup);
}

function btnPopup() {
    if (this == btnArr[0] || this == btnArr[5]) {
        document.getElementById('popupBoxT').style.display = 'block';
        document.scrollingElement.style.overflow = 'hidden';
    }
    if (this == btnArr[1] || this == btnArr[6]) {
        document.getElementById('popupBoxG').style.display = 'flex';
        createGraph();
        document.scrollingElement.style.overflow = 'hidden';
    }
    if (this == btnArr[2] || this == btnArr[7]) {
        document.getElementById('popupBoxPf').style.display = 'block';
        pfShowDivs(1);
        document.scrollingElement.style.overflow = 'hidden';
    }
    if (this == btnArr[3] || this == btnArr[8]) {
        document.getElementById('popupBoxf').style.display = 'block';
        document.scrollingElement.style.overflow = 'hidden';
    }
    if (this == btnArr[4]) { $('html').scrollTop(0); }
    if (this == btnArr[9]) {
        document.getElementById('popupBoxMiniGame').style.display = 'block';
        document.scrollingElement.style.overflow = 'hidden';
    }
}



////////////////////////////////////////////////////////////팀의 js 시작///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////팀의 js 시작///////////////////////////////////////////////////////////////

//클로즈버튼 닫는부분.팀
var closeBtn1 = document.getElementById('closeT');

//클로즈버튼 클릭시.팀 //////////////////////200521 오전 1시9분 버전1.3 타임라인 수정

closeBtn1.onclick = function() {
    items2[0].classList.remove('in-view');
    items2[1].classList.remove('in-view');
    items2[2].classList.remove('in-view');
    items2[3].classList.remove('in-view');
    items2[4].classList.remove('in-view');
    items2[5].classList.remove('in-view');
    items2[6].classList.remove('in-view');
    items2[7].classList.remove('in-view');
    count = 0;
    document.getElementById('popupBoxT').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};


//클로즈버튼 닫는부분.팀
var closeBtn2 = document.getElementById('closeG');

closeBtn2.onclick = function() {
    document.getElementById('popupBoxG').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};

//클로즈버튼 닫는부분.팀
var closeBtn3 = document.getElementById('closePf');

closeBtn3.onclick = function() {
    document.getElementById('popupBoxPf').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};


//클로즈버튼 닫는부분.팀
var closeBtn4 = document.getElementById('closef');

closeBtn4.onclick = function() {
    document.getElementById('popupBoxf').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};



//클로즈버튼 닫는부분.팀
var closeBtn5 = document.getElementById('closeMiniGame');

closeBtn5.onclick = function() {
    gameOverMG();
    document.getElementById('popupBoxMiniGame').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
    if (isClear) {

        document.getElementById('Rgem4').style.display = 'inline';
    }
    clearInterval();
    mailing = setInterval(receiveMail, 1200);
    ticktok = setInterval(clockTicking, 1200);
    growing = setInterval(bearingFruits, 1200);
    building = setInterval(pilingBooks, 1200);
    setInterval(changeImg, 450);
};
//첫 팝업 클로즈버튼
document.getElementById('closeAl').onclick = function() {
    $("#popupBoxAl").fadeOut();
};

////////////////////////////////////////////////////////////팀의 js 끝/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////timeline 시작 by JW////////////////////////////////////////////////////////

var items = document.querySelectorAll('.timeline ul');
var items2 = document.querySelectorAll('.timeline ul li');

var count = 0;

items[0].onwheel = function() {
    //////////////////////200521 오전 1시9분 버전1.3 타임라인 수정

    items2[0].classList.add('in-view');
    count++;
    if (count == 2) {
        items2[1].classList.add('in-view');
    } else if (count == 3) {
        items2[2].classList.add('in-view');
    } else if (count == 4) {
        items2[3].classList.add('in-view');
    } else if (count == 5) {
        items2[4].classList.add('in-view');
    } else if (count == 6) {
        items2[5].classList.add('in-view');
    } else if (count == 7) {
        items2[6].classList.add('in-view');
    } else if (count == 8) {
        items2[7].classList.add('in-view');
    }
};

///////////////////////////////////////////////////////200522 지원 추가 내용

var togo = document.getElementsByClassName('toGoTop');

togo[0].onclick = function() {
    console.log("위로 올라갑니다")
    $('#realSpaceT').scrollTop(0);
}


////////////////////////////////////////////////////////////end of. timeline by JW//////////////////////////////////////////////////

////////////////////////////////////////////////////////////ProgressBar 시작///////////////////////////////////////////////////////

var $tto = $('.top');
var $about = $('.rodeImg');
var $progress = $('.progress-label');
var $ProgressBar = $('.ProgressBar');
var $colorChange = $('.progressGnb>div');
$(window).on('scroll', function() {
    var i = 1;

    var scrollH = $(window).scrollTop(); //현재 스크롤탑 값

    if (scrollH > $('#background-wrap').height()) {
        $tto.addClass('n-fixed');
        $('.gemCollect').css('display', 'inline-block');
        $('.progressGnb .circle:nth-of-type(' + i + ')').addClass('active');

        $progress.css({
            display: 'block',
        });
    } else {
        $tto.removeClass('n-fixed');
        $('.gemCollect').css('display', 'none');
        $progress.css({
            display: 'none',
        });
    }

});

let crushingRockCounter = 1;
$('#rock').on('click', function() {
    window.removeEventListener('scroll', lockScroll);
    //#rock이미지를 4번 클릭하면 이벤트가 해제되고 스크롤잠금 이벤트도 해제됨
    if (crushingRockCounter >= 4) {
        $('#rock').remove();
        for (let i = 0; i < btnArr.length; i++) {
            btnArr[i].addEventListener('click', btnPopup);
        }
        $('#Rgem1').css('display', 'inline');
        document.scrollingElement.style.overflowY = 'auto';
        document.scrollingElement.style.overflowX = 'hidden';
        return;
    }
    $(this).attr('src', 'media/icons/rock' + crushingRockCounter + '.png');
    // $('#rock')..css({'cursor':'url(cursor.png), auto'});
    crushingRockCounter++;
});

// 화면에 스크롤이 잠금되는 이벤트부착
window.addEventListener('scroll', lockScroll);

// 스크롤이 잠금되는 기능
function lockScroll() {

    let scrollPositionE =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
    if (scrollPositionE > 0.76) {
        document.scrollingElement.style.overflow = 'hidden';
        $('#char').css('top', '3800px');
        $('#char').css('left', '700px');

        comment.html(commentArr[0]);
        //멘트설정하기
        comment.html('바위떄문에 지나갈 수 없어<br> 뿌셔야겠다!');
        //보이게만들기 & 스크롤잠깐멈춤
        $(".arrow_box").css("display", 'block');

        //위치잡기
        dialogue.attr('src', 'media/mian/leftB.png');
        // dialogue.src ('media/mian/leftB.png');
        dialogue.css('top', '3800px');
        dialogue.css('left', 400 + 'px');

        //사라지게하기 & 스크롤풀어주기
        setTimeout(() => {
            $(".arrow_box").fadeOut();
        }, 1000);

        for (let i = 0; i < btnArr.length; i++) {
            btnArr[i].removeEventListener('click', btnPopup);
        }
    }
}

// var i = 1;
// $('.progress .circle').removeClass().addClass('circle');
// $('.progress .bar').removeClass().addClass('bar');
// setInterval(function() {
//   $('.progress .circle:nth-of-type(' + i + ')').addClass('active');

//   $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');

//   $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');

//   $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');

//   $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');

//   i++;

//   if (i==0) {
//     $('.progress .bar').removeClass().addClass('bar');
//     $('.progress div.circle').removeClass().addClass('circle');
//     i = 1;
//   }
// }, 1000);

$(document).ready(function() {
    var arrContH = new Array();

    var $top = $('.rodeImg'); //top으로 쳐야하는 요소
    var top_size = $top.size();
    var topH = 68; //탑메뉴 높이값 저장 변수

    var scrollH = $(this).scrollTop(); // 스크롤의 높이값


    for (var i = 0; i < top_size; i++) {
        if (scrollH >= arrContH[i] - topH) {
            console.log('작동');
        }
    } //스크롤 높이값에 따른 메뉴의 롤오버 색상 변화 - 경우의 수


    const win = $(window);
    const doc = $(document);

    var top = 2200;
    scrollTop = top;

    // const winST = 2263;
    const progressBar = $('progress');
    const progressLabel = $('.progress-label');
    const setValue = () => win.scrollTop() - 2200;
    const setMax = () => doc.height() - 2350 - win.height();
    const setPercent = () =>
        Math.round(
            ((win.scrollTop() - 2200) / (doc.height() - win.height())) * 185,
        );

    // progressLabel.text(setPercent() + '%');
    progressBar.attr({ value: setValue(), max: setMax() });

    doc.on('scroll', () => {
        // progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue() });
    });

    win.on('resize', () => {
        // progressLabel.text(setPercent() + '%');
        progressBar.attr({ value: setValue(), max: setMax() });
    });
});

////////////////////////////////////////////////////////////end of. ProgressBar by JW//////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////Portfolio 시작 by SH/////////////////////////////////////////////////////////////

var pfIndex = 1; //프로젝트 순서
pfShowDivs(pfIndex);

function pfPlusDivs(n) {
    //순서를 변경한다
    pfShowDivs((pfIndex += n));
}

function pfCurrentDivs(n) {
    //현재 순서를 알려준다
    pfShowDivs((pfIndex = n));
}

function pfShowDivs(n) {
    //해당 순서의 프로젝를 보여준다
    let slides = document.getElementsByClassName('pfSlides'); //선택된 프로젝트의 이미지와 설명
    let list = document.getElementsByClassName('pfList'); //하단부의 프로젝트 리스트

    //슬라이드 순서 순환
    if (n > slides.length) pfIndex = 1;
    if (n < 1) pfIndex = slides.length;

    //선택된 슬라이드 보여주기
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    for (let i = 0; i < list.length; i++)
        list[i].className = list[i].className.replace(' pf-opacity-off', '');
    slides[pfIndex - 1].style.display = 'block';
    list[pfIndex - 1].className += ' pf-opacity-off';
}

////////////////////////////////////////////////////////////end of. Portflio by SH///////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////Chart 시작 by SR/////////////////////////////////////////////////////////////

// 바 그래프를 그리는 canvas.세린

// function drawIcon(){
//     $('#JavaIcon').css('display','inline');
//     $('#JQueryIcon').css('display','inline');
//     $('#JavaIcon').css('display','inline');
//     $('#JavaIcon').css('display','inline');
//     $('#JavaIcon').css('display','inline');

//     }

/* eslint-disable no-undef */
Chart.defaults.global.defaultFontFamily = 'Black Han Sans';
Chart.defaults.global.defaultFontSize = '25';
let chart;

function createGraph() {
    if (chart) chart.destroy();
    const canvas = document.getElementById('myChart').getContext('2d');
    chart = new Chart(canvas, {
        type: 'bar',
        data: {
            //바 그래프 x축
            labels: ['Java', 'jQuery', 'Javascript', 'HTML', 'CSS'],
            datasets: [{
                //x축에 올라갈 그래프
                data: [6, 4, 6, 4, 4],
                backgroundColor: [
                    '#5781a7',
                    '#cfdbe6',
                    '#cfdbe6',
                    '#5781a7',
                    '#87a5c0',
                ],
                borderColor: [
                    '#cfdbe6',
                    '#5781a7',
                    '#cfdbe6',
                    '#5781a7',
                    '#87a5c0',
                ],
                borderWidth: 1,
            }, ],
        },
        options: {
            reponsive: true,
            maintainAspectRatio: false,
            tooltips: { enabled: false },
            layout: {
                padding: {
                    left: 35,
                    right: 20,
                    top: 20,
                    bottom: 20,
                },
            },
            legend: {
                display: false,
            },
            //바가 올라오는 속도
            animation: {
                duration: 2500,
                easing: 'easeOutQuart',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 8,
                        stepSize: 2,
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            let label;
                            switch (value) {
                                case 2:
                                    label = "Beginner";
                                    break;
                                case 4:
                                    label = "Junior Developer";
                                    break;
                                case 6:
                                    label = "Intermediate";
                                    break;
                                case 8:
                                    label = "Advanced";
                                    break;
                            }
                            return label;
                        }
                    }
                }],

            },
        },
    });
    // drawIcon();
}
////////////////////////////////////////////////////////////end of. Chart by SR///////////////////////////////////////////////////////////////



/* <!-- 섹션파트5 광고 배너 .form by JW --> */


$(function() {
    // console.log("광고 배너의 제이쿼리 연결확인")

    //변수 선언부
    var $spa = $(".slides-container>li>a"); //썸네일
    var $sc = $(".slides-pagination");
    var nowIdx = Math.floor(Math.random() * 3); //0~7 사이의 정수값
    var intervalID = null;


    //함수선언부
    var move = function() {

        $spa.eq(nowIdx).parent().addClass("on").siblings().removeClass("on"); //썸네일 활성화

        $sc.stop().animate({
            "left": -$sc.children("li").width() * nowIdx
        }); //컨테이너 이동


    }; //컨테이너 이동



    var autoStop = function() {
        clearInterval(intervalID); //자동재생 정지
    }; //자동재생 정지함수

    var nextIdx = function() {

        if (nowIdx > $spa.size() - 2) {
            nowIdx = 0;
        } else {
            nowIdx++;
        }

    }; //다음 슬라이드의 인덱스번호 추출
    var autoPlay = function() {
        //   setInterval(명령문함수,인터벌시간);
        intervalID = setInterval(function() {
            nextIdx(); //다음 인덱스번호 추출함수 호출
            move(); //컨테이너 이동함수 호출     
            if (nowIdx == 1) {
                $('.rollingPop').css('display', 'inline-block');
            } else {
                $('.rollingPop').css('display', 'none');
            }
        }, 3000);
    }; //자동재생 함수




    ////////////////////////////////////////성쌤 강좌 플레이
    var AdPlay = function() {
        //   setInterval(명령문함수,인터벌시간);
        intervalID = setInterval(function() {
            document.getElementById('AD_POP_box').style.display = 'block'
        }, 2500);
    }; //자동재생 함수



    $spa.on("click", function(evt) {


        autoStop(); //자동재생 정지함수 호출
        // if($spa[1]){
        //     console.log("눌렀다 두번째")
        //     AdPlay();
        // }
        nowIdx = $spa.index($(this));
        move(); //애니메이션 함수를 호출
        evt.preventDefault();


    }); //$spa.on





    /////시작 버튼 클릭시 다시 시작

    $(".pause").on("click", function() {
        autoPlay();
    });


    $(window).on("load", function() {
        nowIdx = 0;
        move(); //컨테이너 이동함수 호출   
        autoPlay(); //자동재생 함수호출
    });




    $('.youtube').mouseenter(function() {
        autoStop();
        $('#countDown').css('display', 'inline-block');
        AdPlay();
    });

    $('.youtube').mouseleave(function() {
        $('#countDown').css('display', 'none');
        autoStop();
        autoPlay();

    });



    //클로즈버튼 닫는부분.팀
    var closeBtnPop = document.getElementsByClassName('AD_POP_clo');

    closeBtnPop[0].onclick = function() {
        document.getElementById('AD_POP_box').style.display = 'none';
        autoStop();
        autoPlay();


        if (confirm("좋아요 누르셨나요?")) {

            $("#Rgem3").css('display', 'inline');
            $("#sam").css('display', 'inline');

        }


    }


})




///////////////////////
var closeTeamOne = document.getElementById('closeTemaOne');

closeTeamOne.onclick = function() {
    document.getElementById('teamOne').style.display = 'none';
    document.scrollingElement.style.overflowY = 'auto';
    document.scrollingElement.style.overflowX = 'hidden';
};