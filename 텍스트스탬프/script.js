const stampContainer = document.querySelector('.stamp-container');

let text = ["Baddest", "Slayyyy!!!", "GOATED", 
            "BOOM!", "Drip Hard", "A$AP",
            "OMG!!!", "Just Do It", "POP!", "Bang!", "The Notorious",
            "DAMN ."]

let hold = false;
const throttle = (callback, delay) => {
    let timer;

    return (event) => {
      // 타이머가 호출되면, 함수를 실행하고 타이머 제거
      if (timer) return;
      timer = setTimeout(() => {
        callback(event);
        timer = null;
      }, delay);
    };
  };
document.addEventListener("mousedown", function () {
    hold = true;
});
document.addEventListener("mouseup", function () {
    hold = false;
});
document.addEventListener('mousemove',
    throttle((e) => {
        if (hold === true) {
            const x = e.clientX;
            const y = e.clientY;
            let stamp = document.createElement("div");
            stamp.classList.add("stamp");
            stampContainer.appendChild(stamp);
            var random_index = Math.floor(Math.random() * text.length);
            let rand = Math.floor(Math.random() * 150) + 30;
            stamp.innerText = text[random_index];
            stamp.style.left = x + 'px';
            stamp.style.top = y + 'px';
            stamp.style.fontSize = rand + 'px';
            stamp.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        }
    }, 100));



stampContainer.addEventListener('mousemove', (e) => {
    e.stopPropagation();
});
