const buttons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");

let currentAudio = null;

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const soundName = button.getAttribute("data-sound");

        // Stop currently playing sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Create new audio
        currentAudio = new Audio("./sounds/" + soundName + ".mp3");

        // Play sound
        currentAudio.play();

    });

});


// Stop button
stopButton.addEventListener("click", function () {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});