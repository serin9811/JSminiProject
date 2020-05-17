//팝업 업 버튼 .팀
var btn = document.getElementById("saybtnT");

//버튼 누르면 팝업 보이기.팀
btn.onclick = function() {
  document.getElementById("popupBoxT").style.display = "flex";
  createGraph();
};

//클로즈버튼 닫는부분.팀
var closeBtn = document.getElementById("closeT");

closeBtn.onclick = function() {
  document.getElementById("popupBoxT").style.display = "none";
};

// 바 그래프를 그리는 canvas
var canvas = document.getElementById("myChart");

/* eslint-disable no-undef */
Chart.defaults.global.defaultFontFamily = "Jua";
function createGraph() {
  new Chart(canvas, {
    type: "bar",
    data: {
      //바 그래프 x축
      labels: ["Java", "jQuery", "Javascript", "HTML", "CSS"],
      datasets: [
        {
          //x축에 올라갈 그래프
          data: [10, 8, 10, 10, 10],
          backgroundColor: [
            "#0f4c81",
            "#5781a7",
            "#cfdbe6",
            "#5781a7",
            "#87a5c0"
          ],
          borderColor: ["#0f4c81", "#5781a7", "#cfdbe6", "#5781a7", "#87a5c0"],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      //바가 올라오는 속도
      animation: {
        duration: 1500,
        easing: "easeOutQuart"
      },
      scales: {
        yAxes: [
          {
            //y축 안보이게
            display: false,
            //y축 scale
            ticks: {
              max: 11,
              min: 0,
              stepSize: 1
            }
          }
        ]
      }
    }
  });
}
/* eslint-enable no-undef */
