// 포트폴리오 페이지: 프로젝트 이동
var pfIndex = 1; 
pfShowDivs(pfIndex); 

function pfPlusDivs(n) {
pfShowDivs(pfIndex += n);
}
function pfCurrentDivs(n) {
pfShowDivs(pfIndex = n);
}
function pfShowDivs(n) {
let slides = document.getElementsByClassName("pfSlides");
let list = document.getElementsByClassName("pfList");
if (n > slides.length) {pfIndex = 1} 
if (n < 1) {pfIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (let i = 0; i < list.length; i++) {
    list[i].className = list[i].className.replace(" pf-opacity-off", "");
}
slides[pfIndex-1].style.display = "block";
list[pfIndex-1].className += " pf-opacity-off";
}