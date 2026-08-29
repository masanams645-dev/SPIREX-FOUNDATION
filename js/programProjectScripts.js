function toggleMenu() {
    const nav = document.getElementById("navLinks");

    if (nav) {
        nav.classList.toggle("show");
    }
}


function goToInternship() {
    window.location.href = "internship.html";
}

function goToProjects() {
    window.location.href = "projects.html";
}


function showDetails(programName) {

    const modal = document.getElementById("infoModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    if (!modal || !title || !text) {
        return;
    }

    const details = {

        "Internship Programs":
            "Gain real-world experience through industry-oriented internships with mentorship, live projects, skill development and certification.",

        "Training Programs":
            "Develop technical and professional skills through structured training programs, practical learning, expert guidance and career development.",

        "Workshops":
            "Participate in interactive workshops with expert sessions, hands-on learning, networking opportunities and certificates.",

        "Projects":
            "Work on practical projects based on real-world problems. Build your portfolio, learn modern technologies and improve your development skills."

    };

    title.textContent = programName;

    text.textContent =
        details[programName] ||
        "Explore our programs and opportunities at SpireX Foundation.";

    modal.classList.add("show");
}

function closeModal() {

    const modal = document.getElementById("infoModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


function showProject(projectName) {

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("projectModalTitle");
    const text = document.getElementById("projectModalText");

    if (!modal || !title || !text) {
        return;
    }

    const projectDetails = {

        "Personal Portfolio Website":
            "Create a professional personal portfolio website using HTML, CSS and JavaScript. Showcase your skills, education, projects, certifications and achievements.",

        "Weather Card / App":
            "Build a weather application using HTML, CSS and JavaScript. Connect a weather API to display real-time weather information.",

        "Simple Calculator":
            "Create a responsive calculator using HTML, CSS and JavaScript with arithmetic operations and a clean user interface.",

        "Movie Search App":
            "Build a movie search application using JavaScript and an API. Display movie posters, ratings, titles and useful movie information.",

        "E-Commerce Mini-Store":
            "Design a modern e-commerce website with products, pricing, cart interactions and responsive layouts.",

        "To-Do / Task Manager":
            "Create a task management application where users can add, edit, complete and delete their daily tasks.",

        "Expense Tracker":
            "Build an expense tracker to manage income and expenses with categories, totals and an interactive dashboard.",

        "Online Quiz / Examination System":
            "Develop an online examination system with questions, timer, submission and instant results.",

        "Interactive Image Gallery":
            "Create a responsive image gallery with categories, filters and image preview functionality.",

        "Job Application Tracker":
            "Build a dashboard that allows users to manage job applications, companies, interviews and application status."

    };

    title.textContent = projectName;

    text.textContent =
        projectDetails[projectName] ||
        "Project information is currently unavailable.";

    modal.classList.add("show");
}



function startProject(projectName) {

    alert(
        "Great choice! 🚀\n\n" +
        "You selected:\n" +
        projectName +
        "\n\n" +
        "You can start building this project with HTML, CSS and JavaScript."
    );
}




function closeProjectModal() {

    const modal = document.getElementById("projectModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


function searchProjects() {

    const searchInput = document.getElementById("projectSearch");
    const projectCards = document.querySelectorAll(".project-card");

    if (!searchInput || !projectCards.length) {
        return;
    }

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    projectCards.forEach(function(card) {

        const projectName =
            card.getAttribute("data-name") || "";

        if (projectName.toLowerCase().includes(searchValue)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}

document.addEventListener("DOMContentLoaded", function() {

    const searchInput =
        document.getElementById("projectSearch");

    if (searchInput) {

        searchInput.addEventListener("input", searchProjects);

    }

});


function openApplication() {

    const modal =
        document.getElementById("applicationModal");

    if (modal) {
        modal.classList.add("show");
    }
}


function closeApplication() {

    const modal =
        document.getElementById("applicationModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


function submitApplication(event) {

    event.preventDefault();

    const nameElement =
        document.getElementById("appName");

    const emailElement =
        document.getElementById("appEmail");

    const programElement =
        document.getElementById("appProgram");

    if (!nameElement || !emailElement || !programElement) {
        return;
    }

    const name =
        nameElement.value.trim();

    const email =
        emailElement.value.trim();

    const program =
        programElement.value;

    if (!name || !email || !program) {

        alert("Please fill in all the fields.");

        return;
    }

    alert(
        "Thank you, " +
        name +
        "!\n\nYour application for " +
        program +
        " has been submitted successfully.\n\nSpireX Foundation will contact you soon."
    );

    nameElement.value = "";
    emailElement.value = "";
    programElement.value = "";

    closeApplication();
}


/* ==========================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
========================================== */

window.addEventListener("click", function(event) {

    const infoModal =
        document.getElementById("infoModal");

    const projectModal =
        document.getElementById("projectModal");

    const applicationModal =
        document.getElementById("applicationModal");


    if (event.target === infoModal) {

        closeModal();

    }


    if (event.target === projectModal) {

        closeProjectModal();

    }


    if (event.target === applicationModal) {

        closeApplication();

    }

});
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();

        closeProjectModal();

        closeApplication();

    }

});