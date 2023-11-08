const container = document.querySelector(".container");
const leftBtn =document.querySelector(".left-btn");
const rightBtn =document.querySelector(".right-btn");
const iframe = document.querySelector("iframe");

let i = 0;
setInterval(() => {
    container.children[i].style.width = "300px"
    container.children[i].style.height = "300px"
}, 1);
leftBtn.addEventListener("click", function() {
    if (i > 0) {
        container.children[i].style.width = "100px"
        container.children[i].style.height = "100px"
        i -= 1;
    }
});
rightBtn.addEventListener("click", function() {
    if (i < container.children.length - 1) {
        container.children[i].style.width = "100px"
        container.children[i].style.height = "100px"
        i += 1;
    }
});
document.addEventListener("keydown", function(event) {
    if (i > 0 && event.keyCode === 37) {
        container.children[i].style.width = "100px"
        container.children[i].style.height = "100px"
        i -= 1;
    }
});
document.addEventListener("keydown", function(event) {
    if (i < container.children.length - 1 && event.keyCode === 39) {
        container.children[i].style.width = "100px"
        container.children[i].style.height = "100px"
        i += 1;
    }
});


