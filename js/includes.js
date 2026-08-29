// includes.js
// Responsible ONLY for fetching and injecting HTML component files.
// Knows nothing about navbar behavior, menus, or click events.
//
// Paths below are ROOT-RELATIVE (start with "/"), so this works the
// same whether it's called from index.html at the root, or from a
// page nested inside /pages/, /pages/internships/, etc.

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

    // Navbar loads first and announces itself separately,
    // so it becomes interactive without waiting on the rest.
    await loadComponent(
        "navbar-container",
        "/components/navbar.html"
    );

    document.dispatchEvent(new Event("navbarLoaded"));


    // Everything else loads after, then announces itself once
    // ALL of them are done — this is what covers icons inside
    // the hero, cards, and footer sections.
    //
    // Note: not every page has all of these containers, so we
    // only try to load a piece if that container actually exists
    // on the current page (loadComponent already checks this,
    // but we guard here too to avoid unnecessary fetch attempts).

    if (document.getElementById("hero-container")) {
        await loadComponent("hero-container", "/components/hero.html");
    }

    if (document.getElementById("cards-container")) {
        await loadComponent("cards-container", "/components/cards.html");
    }

    await loadComponent(
        "footer-container",
        "/components/footer.html"
    );

    document.dispatchEvent(new Event("componentsLoaded"));

}


loadComponents();