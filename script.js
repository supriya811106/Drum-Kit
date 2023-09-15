var numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white";
        drumKit(i);
        ButtonAnimation(this.innerHTML);

    });
}


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    ButtonAnimation(event.key);

});


function makeSound(key) {

    var audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash0.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/crash1.mp3");
            audio.play();
            break;

        case "s":
            audio = new Audio("sounds/crash2.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/crash3.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/crash4.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash5.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/crash6.mp3");
            audio.play();
            break;


    }
}

function drumKit(i) {

    var audio = new Audio("sounds/crash" + i + ".mp3");

    audio.play();
}

function ButtonAnimation(current) {
    var activeBut = document.querySelector("." + current);
    activeBut.classList.add("pressed");

    setTimeout(function () {
        activeBut.classList.remove("pressed");
    }, 200);
}
