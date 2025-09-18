var letterEls = document.querySelectorAll(".js-letter");

for (var i = 0; i < letterEls.length; i++) {
    letterEls[i].addEventListener("click", function() {
        var audio = new Audio("./assets/audio/" + this.dataset.audiofile);
        audio.play();
    });
}