console.log("Rasanja Gunasekara Cybersecurity Portfolio Loaded");


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Ignore empty "#" links
        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   EXPERIENCE ACCORDION
   ========================================================= */

function toggleExperience(header) {

    // Get the experience card that was clicked
    const card = header.closest(".experience-card");

    // Get all experience cards
    const allCards = document.querySelectorAll(".experience-card");


    // Close all other cards
    allCards.forEach(function (item) {

        if (item !== card) {

            item.classList.remove("active");

            const toggle = item.querySelector(".experience-toggle");

            if (toggle) {
                toggle.textContent = "+";
            }

        }

    });


    // Toggle the clicked card
    card.classList.toggle("active");


    // Find the + / − button
    const toggle = card.querySelector(".experience-toggle");


    // Change + to − when open
    if (card.classList.contains("active")) {

        toggle.textContent = "−";

    } else {

        toggle.textContent = "+";

    }

}


/* =========================================================
   PROJECT ACCORDION
   ========================================================= */

function toggleProject(header) {

    // Get the project card that was clicked
    const card = header.closest(".project-card");

    // Get all project cards
    const allProjects = document.querySelectorAll(".project-card");


    // Close all other projects
    allProjects.forEach(function (item) {

        if (item !== card) {

            item.classList.remove("active");

            const toggle = item.querySelector(".project-toggle");

            if (toggle) {
                toggle.textContent = "+";
            }

        }

    });


    // Toggle clicked project
    card.classList.toggle("active");


    // Get the + / − button
    const toggle = card.querySelector(".project-toggle");


    // Change the icon
    if (card.classList.contains("active")) {

        toggle.textContent = "−";

    } else {

        toggle.textContent = "+";

    }

}
