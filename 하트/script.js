const canvas = document.querySelector("canvas");
const chart = document.querySelector("#chartContainer");
const redDiv = document.querySelector(".red");
const greenDiv = document.querySelector(".green");
let isClicked = false;
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("myChart");
  const ctx = canvas.getContext("2d");

  const maxX = 4;
  const step = 0.02;
  let a = 0; // 초기값을 0으로 설정
  const xValues = [];
  const yValues = [];
  let myChart; // 차트 변수를 밖으로 빼서 클릭 및 드래그 이벤트에서 접근할 수 있도록 함
  let isDragging = false; // 드래그 중인지 여부를 추적

  function updateChart() {
    xValues.length = 0;
    yValues.length = 0;

    for (let x = -maxX; x <= maxX; x += step) {
      const y = Math.pow(Math.abs(x), 2/3) + 0.9 * Math.sqrt(5 - Math.pow(x, 2)) * Math.sin(a * Math.PI * x);
      xValues.push(x);
      yValues.push(y);
    }

    if (myChart) {
      myChart.data.labels = xValues;
      myChart.data.datasets[0].data = yValues;
      myChart.update({ duration: 0 }); // 애니메이션을 비활성화하고 즉시 업데이트
    }
  }

  // 초기 그래프 생성
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: "",
        data: yValues,
        borderColor: "red", // 초기 색상 설정
        borderWidth: 3,
        fill: false,
        pointRadius: 0,
        lineTension: 0.8,
      }]
    },
    options: {
      animation: { // 애니메이션 옵션 추가
        duration: 0 // 애니메이션을 비활성화
      },
      aspectRatio: 1.5,
      scales: {
        x: {
          display: false,
          type: "linear",
          position: "bottom",
          ticks: {
            stepSize: 1,
            display: false,
          }
        },
        y: {
          display: false,
          type: "linear",
          position: "left",
          ticks: {
            stepSize: 1,
            display: false,
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: { // 툴팁 관련 설정 추가
          enabled: false // 툴팁 비활성화
        }
      }
    }
  });

  // 클릭 이벤트 리스너 추가
  redDiv.addEventListener("click", function () {
    myChart.data.datasets[0].borderColor = red();
    myChart.update({ duration: 0 }); // 애니메이션을 비활성화하고 즉시 업데이트
  });
  greenDiv.addEventListener("click", function () {
    myChart.data.datasets[0].borderColor = green();
    myChart.update({ duration: 0 }); // 애니메이션을 비활성화하고 즉시 업데이트
  });

  // 마우스 클릭 이벤트 리스너 추가
document.addEventListener("mousedown", function () {
  isDragging = true;
});

// 마우스 이동 이벤트 리스너 추가
document.addEventListener("mousemove", function (event) {
  if (isDragging) {
    // 클릭한 후 드래그 중일 때만 이벤트 처리
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const canvasWidth = canvas.width;
    a = (mouseX / canvasWidth) * 40 -10; // -20부터 20까지 범위로 매핑

    updateChart(); // 그래프 업데이트
  }
});

// 마우스 릴리스 이벤트 리스너 추가
document.addEventListener("mouseup", function () {
  isDragging = false;
});

  // a 값을 변경하고 그래프 업데이트
  setInterval(() => {
    if (!isClicked) {
      a += 0.01; // 원하는 증가량으로 변경
      updateChart();
    }
  }, 1); // 원하는 간격으로 변경 (밀리초 단위)
});

function green() {
  isClicked = false;
  return `#47ff59`;
}
function red() {
  isClicked = false;
  return `red`;
}
function yellow() {
  isClicked = true;
}

