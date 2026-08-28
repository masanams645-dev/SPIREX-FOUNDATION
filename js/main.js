// main.js
// Responsible ONLY for page behavior — mobile menu, active link state, icons.
// Knows nothing about how or where the HTML it's controlling came from.

// Navbar icons + navbar behavior — runs as soon as the navbar alone is ready.
document.addEventListener("navbarLoaded", function () {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

    setupNavbar();

});


// Icons inside hero, cards, and footer — runs once THOSE finish loading.
// Calling createIcons() again here is safe: it only converts whatever
// data-lucide tags exist at that moment and leaves already-converted
// navbar icons untouched.
document.addEventListener("componentsLoaded", function () {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});


function setupNavbar() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            if (isOpen) {

                menuToggle.innerHTML =
                    '<i data-lucide="x"></i>';

            } else {

                menuToggle.innerHTML =
                    '<i data-lucide="menu"></i>';

            }


            if (typeof lucide !== "undefined") {
                lucide.createIcons();
            }

        });

    }


    const links =
        document.querySelectorAll(".nav-link");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            links.forEach(function (item) {

                item.classList.remove("active");

            });


            this.classList.add("active");


            if (navLinks) {

                navLinks.classList.remove("active");

            }


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.innerHTML =
                    '<i data-lucide="menu"></i>';


                if (typeof lucide !== "undefined") {
                    lucide.createIcons();
                }

            }

        });

    });

}