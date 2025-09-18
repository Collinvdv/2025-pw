var buttonEls = document.querySelectorAll(".js-letter");

for (var i = 0; i < buttonEls.length; i++) {
    buttonEls[i].addEventListener("click", function() {
        var audioFile = this.dataset.audio;
        var audio = new Audio("./assets/audio/" + audioFile);

        audio.play();
    });
}

document.querySelector("body").addEventListener("keydown", function(e) {

    var letterEl = document.querySelector('[data-letter="'+e.key+'"]');
    console.log(letterEl);

    if (letterEl) {
        var audioFile = letterEl.dataset.audio;
        var audio = new Audio("./assets/audio/" + audioFile);

        audio.play();

        letterEl.classList.add("active");

        setTimeout(function() {
            letterEl.classList.remove("active");
        }, 2000)
    }
});