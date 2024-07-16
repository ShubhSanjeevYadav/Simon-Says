let gamesequence = [];
let usersequence = [];

let btns = ["a", "b", "c", "d"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener('keypress', function () {
    if (started == false){
        console.log("started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function levelup() {
    usersequence = [];
    level++;
    h2.innerText = (`Level ${level}`);

    let randomidx = Math.floor(Math.random() *3);
    let randcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randcolor}`);
    gamesequence.push(randcolor);
    console.log(gamesequence);
    btnflash(randombtn);
}

function check(idx) {
    if (usersequence[idx] === gamesequence[idx]) {
        if(usersequence.length == gamesequence.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = (`Game Over! Your Score is ${level} <br> Press any key to start`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

function btnpress() {
    let btn = this;
    btnflash(btn);

    usercolor = btn.getAttribute("id");
    usersequence.push(usercolor);

    check(usersequence.length - 1);
} 

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
        btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    level = 0;
    gamesequence = [];
    usersequence = [];
}