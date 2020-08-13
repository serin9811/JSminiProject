
//스크롤 됐을 때 발생하는 이벤트 연결
window.onscroll = function() { scrollFunction() };

//맵 구름 초기화@
var tmp = document.getElementsByClassName('mapCld');
for(var i=0;i<tmp.length; i++){
    tmp[i].style.display = "none";
}

//로딩 됐을 때 발생하는 이벤트 연결
window.onload = function() {
    //스크롤 위치 파악
    let scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //스크롤 위치에 맞춰서 요소 위치 초기화: 인트로 구름
    document.getElementById("cld1").style.top = scrollPosition;
    document.getElementById("cld1").style.left = scrollPosition;
    document.getElementById("cld2").style.bottom = scrollPosition;
    document.getElementById("cld2").style.left = scrollPosition;
    document.getElementById("cld3").style.top = scrollPosition;
    document.getElementById("cld3").style.left = scrollPosition;
    document.getElementById("cld6").style.top = scrollPosition;
    document.getElementById("cld6").style.left = scrollPosition;
    
}

//스크롤 이벤트: 인트로의 구름 효과
function scrollFunction() {
    //스크롤 위치 파악
    let scrollPosition = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //스크롤이 20% 내려간 시점부터 이벤트 발생: 걷히는 효과(대각선 이동)
    if (scrollPosition < 0.2) {
        document.getElementById("cld1").style.top = -(scrollPosition * 300) + '%';
        document.getElementById("cld1").style.left = -(scrollPosition * 300) + '%';
        document.getElementById("cld2").style.bottom = -(scrollPosition * 300) + '%';
        document.getElementById("cld2").style.left = -(scrollPosition * 300) + '%';
        document.getElementById("cld3").style.top = -(scrollPosition * 100) + '%';
        document.getElementById("cld3").style.left = (scrollPosition * 100) + '%';
        document.getElementById("cld6").style.top = (scrollPosition * 500) + '%';
        document.getElementById("cld6").style.left = (scrollPosition * 500) + '%';
    }
    //스크롤이 2% 내려간 시점부터 이벤트 발생: 구름이 이동하는 효과(수직 이동)
    if (scrollPosition > 0.02) {
        document.getElementById("cld4").style.top = -(scrollPosition * 50) + '%';
        document.getElementById("cld5").style.top = -(scrollPosition * 50) + '%';
        document.getElementById("cld7").style.top = -(scrollPosition * 50) + '%';
    }


    //스크롤이 2000 내려간 시점부터 이벤트 발생: 흘러가는 효과(수평 이동)
    if (document.documentElement.scrollTop > 2000) 
        for(var i=0;i<tmp.length; i++) tmp[i].style.display = "";
    else
        for(var i=0;i<tmp.length; i++) tmp[i].style.display = "none";
}

//스크롤이 10% 내려간 시점부터 이벤트 발생: 해가 손을 흔드는 효과(각도 변경)
setInterval(moveHand, 8);
let hRotation = 0;
let hVal = 0;
function moveHand(){
    if(hRotation > 89) hRotation = 0;
    else hRotation += 1;
    if(hRotation <= 45) hVal = hRotation;
    else hVal = 90-hRotation;
    document.getElementById("sunArm").style.transform = 'rotate(' + hVal + 'deg)';
}