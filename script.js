/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Front-End Web Developer",
    "WordPress Specialist",
    "Creative Web Designer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingAnimation() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex--
            );

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex++
            );

    }


    if (
        !deleting &&
        characterIndex > currentWord.length
    ) {

        deleting = true;

        setTimeout(
            typingAnimation,
            1200
        );

        return;
    }


    if (
        deleting &&
        characterIndex < 0
    ) {

        deleting = false;

        characterIndex = 0;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

    }


    setTimeout(
        typingAnimation,
        deleting ? 50 : 80
    );
}

typingAnimation();



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.getElementById("menu-btn");

const navMenu =
    document.querySelector(".nav-menu");


menuButton.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("show");

        if (
            navMenu.classList.contains("show")
        ) {

            navMenu.style.display = "flex";

            navMenu.style.position = "absolute";

            navMenu.style.top = "78px";

            navMenu.style.left = "0";

            navMenu.style.right = "0";

            navMenu.style.flexDirection = "column";

            navMenu.style.padding = "20px 6%";

            navMenu.style.background =
                "#080d1b";

            navMenu.style.borderBottom =
                "1px solid rgba(148,163,184,.15)";

        } else {

            navMenu.style.display = "";

        }

    }
);



/* =========================
   CLOSE MOBILE MENU
========================= */

document
    .querySelectorAll(".nav-menu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("show");

                if (
                    window.innerWidth <= 1000
                ) {
                    navMenu.style.display = "";
                }

            }
        );

    });



/* =========================
   ACTIVE NAVBAR
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "home";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >= sectionTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);



/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress =
    document.querySelector(
        ".scroll-progress"
    );


window.addEventListener(
    "scroll",
    function () {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            progress + "%";

    }
);



/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.getElementById(
        "theme-btn"
    );

const savedTheme =
    localStorage.getItem(
        "ridwon-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "#8c6f43"
        );

        const isLight =
            document.body.classList.contains(
                ""
            );


        if (isLight) {

            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

            localStorage.setItem(
                "ridwon-theme",
                "light"
            );

        } else {

            themeButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

            localStorage.setItem(
                "ridwon-theme",
                "dark"
            );

        }

    }
);



/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

const sendButton =
    document.querySelector(
        ".send-btn"
    );


contactForm.addEventListener(
    "submit",
    function () {

        sendButton.innerHTML =
            'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

    }
);