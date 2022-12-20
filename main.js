// //selecting the buttons ---> !! ans is somewhere here not able to find it .. -->
const green = document.querySelector('#green');
const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');

// //defining the array for checking.. -->
const colors = ["green", "red", "blue", "yellow"];
const gamePattern = [];
const userPattern = [];

//
const heading = document.getElementById('level-title');

//defining the level..
let level = 0;

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}


function changeStyle(element) {
    if (element === "green") {
        setTimeout(() => {
            green.setAttribute("background-color", "white");
        }, 2000);
        green.setAttribute("background-color", "green");
    } else if (element === "red") {
        setTimeout(() => {
            red.setAttribute("background-color", "white");
        }, 2000);
        red.setAttribute("background-color", "red");
    } else if (element === "blue") {
        setTimeout(() => {
            blue.setAttribute("background-color", "white");
        }, 2000);
        blue.setAttribute("background-color", "blue");
    } else {
        setTimeout(() => {
            yellow.setAttribute("background-color", "white");
        }, 2000);
        yellow.setAttribute("background-color", "yellow");
    }
}

function generatorColor() {

    let val = Math.random() * 4 | 0;
    gamePattern.push(colors[val]);
    changeStyle(val);
    console.log(gamePattern);

}

function checker(val) {

    let check = true;
    userPattern.push(val);

    for (let i = 0; i < userPattern.length; i++) {
        if (userPattern[i] === gamePattern[i]) {

            continue;
        } else {
            check = false;
            break;
        }

    }

    if (check === true) {


        var audio = new Audio(`sounds/${val}.mp3`);
        audio.play();


        if (userPattern.length === gamePattern.length) {
            userPattern.splice(0, userPattern.length);
            generatorColor();
            level++;
            heading.textContent = `level:${level}`
        } else {
            console.log("game onGoing ");
        }

    } else {
        console.log("game over");
        restart();
        heading.textContent = "Game over ....";
        var wrongAudio = new Audio('sounds/wrong.mp3');
        wrongAudio.play();
    }
}


function restart() {
    gamePattern.splice(0, gamePattern.length);
    userPattern.splice(0, userPattern.length);
    level = 0;
    console.log(userPattern);
    console.log(gamePattern);
}


generatorColor();
green.addEventListener('click', () => {
    checker("green");
});
red.addEventListener('click', () => {
    checker("red");
});
yellow.addEventListener('click', () => {
    checker("yellow");
});
blue.addEventListener('click', () => {
    checker("blue");
});

