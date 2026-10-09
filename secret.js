
/* =========================
   GET ELEMENTS
========================= */
const startButton =
    document.getElementById("startButton");

const startScreen =
    document.getElementById("startScreen");

const mainContent =
    document.getElementById("mainContent");

const song =
    document.getElementById("song");

const letterButton =
    document.getElementById("letterButton");

const letterOverlay =
    document.getElementById("letterOverlay");

const closeButton =
    document.getElementById("closeButton");

/* =========================
   START
========================= */
startButton.addEventListener(
    "click",
    function () {

        startScreen.classList.add("hide");

        mainContent.classList.add("show");

        song.currentTime = 0;

        song.play().catch(function(error) {
            console.log(
                "Audio could not start:",
                error
            );
        });

        createFloatingPetals();
    }
);

/* =========================
   FLOATING PETALS
========================= */
function createFloatingPetals() {

    if (
        document.querySelector(
            ".floating-petal"
        )
    ) {
        return;
    }

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const petal =
            document.createElement("div");

        petal.classList.add(
            "floating-petal"
        );

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        petal.style.animationDelay =
            Math.random() * 7 + "s";

        const size =
            10 + Math.random() * 14;

        petal.style.width =
            size + "px";

        petal.style.height =
            size * 1.6 + "px";

        mainContent.appendChild(petal);
    }
}

/* =========================
   OPEN LETTER
========================= */
letterButton.addEventListener(
    "click",
    function () {

        letterOverlay.classList.add(
            "show"
        );

    }
);

/* =========================
   CLOSE LETTER
========================= */
closeButton.addEventListener(
    "click",
    function () {

        letterOverlay.classList.remove(
            "show"
        );

    }
);

/* =========================
   CLOSE LETTER WHEN CLICKING
   OUTSIDE THE LETTER
========================= */
letterOverlay.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            letterOverlay
        ) {

            letterOverlay.classList.remove(
                "show"
            );

        }
    }
);

/* =========================
   CLOSE LETTER USING ESC
========================= */
document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            letterOverlay.classList.remove(
                "show"
            );

        }
    }
);
