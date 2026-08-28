async function loadComponent(containerId, filePath) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.error(containerId + " not found");
        return;
    }

    try {

        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(filePath + " could not be loaded");
        }

        const html = await response.text();

        container.innerHTML = html;

    } catch (error) {

        console.error("Component loading error:", error);

    }
}


async function loadComponents() {

    await loadComponent(
        "navbar-container",
        "components/navbar.html"
    );

    await loadComponent(
        "hero-container",
        "components/hero.html"
    );

    await loadComponent(
        "cards-container",
        "components/cards.html"
    );

    await loadComponent(
        "footer-container",
        "components/footer.html"
    );


    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }


    setupNavbar();

}


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


loadComponents();