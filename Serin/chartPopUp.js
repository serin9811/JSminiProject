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

// 바 그래프를 그리는 canvas.세린
var canvas = document.getElementById("myChart");

var yLabels = {
  0: "Biginner",
  2: "Elementary",
  4: "Intermediate",
  6: "Upper-intermediate",
  8: "Advanced"
};

/* eslint-disable no-undef */
Chart.defaults.global.defaultFontFamily = "Black Han Sans";
function createGraph() {
  new Chart(canvas, {
    type: "bar",
    data: {
      //바 그래프 x축
      labels: ["Java", "jQuery", "Javascript", "HTML", "CSS"],
      datasets: [
        {
          //x축에 올라갈 그래프
          data: [6, 8, 6, 4, 4],
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
      layout: {
        padding: {
          left: 50,
          right: 50,
          top: 60,
          bottom: 50
        }
      },
      legend: {
        display: false
      },
      //바가 올라오는 속도
      animation: {
        duration: 2000,
        easing: "easeOutQuart"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(value, index, values) {
                return yLabels[value];
              },
              max: 8,
              min: 0,
              stepSize: 2
            }
          }
        ]
      }
    }
  });
}
/* eslint-enable no-undef */
