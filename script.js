// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu when navigation link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Show simple confirmation message

        if (formMessage) {

            formMessage.textContent =
                "Thank you! We appreciate your message.";

        }


        // Clear the form

        contactForm.reset();

    });

}