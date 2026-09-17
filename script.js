```javascript
/* =====================================================
   EVEREST JOURNEYS
   Main JavaScript
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

const mobileMenu = document.getElementById("mobileMenu");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenu && navMenu) {

    mobileMenu.addEventListener("click", function () {

        navMenu.classList.toggle("mobile-open");

        const isOpen =
            navMenu.classList.contains("mobile-open");

        mobileMenu.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu when clicking a navigation link

    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove(
                "mobile-open"
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}



/* =====================================================
   2. CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   3. HEADER SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    });

}



/* =====================================================
   4. ACTIVE NAVIGATION LINK
===================================================== */

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document.querySelectorAll(
    ".nav-menu a"
).forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage === currentPage &&
        !link.classList.contains("nav-button")
    ) {

        link.classList.add("active");

    }

});



/* =====================================================
   5. SMOOTH SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (anchor) {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});



/* =====================================================
   6. SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .industry-card, .system-card, .section-heading, .service-card"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal-element"
            );

            revealObserver.observe(
                element
            );

        }
    );

}



/* =====================================================
   7. BUTTON CLICK TRACKING
===================================================== */

document.querySelectorAll(
    ".btn"
).forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const buttonText =
                this.innerText.trim();

            console.log(
                "CTA clicked:",
                buttonText
            );

        }
    );

});



/* =====================================================
   8. WHATSAPP CTA
===================================================== */

const whatsappButtons =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    "WhatsApp CTA clicked"
                );

            }
        );

    }
);



/* =====================================================
   9. CONTACT / AUDIT FORM
===================================================== */

const auditForm =
    document.getElementById(
        "auditForm"
    );


if (auditForm) {

    auditForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const formData =
                new FormData(
                    auditForm
                );


            const name =
                formData.get("name") || "";


            const business =
                formData.get("business") || "";


            const phone =
                formData.get("phone") || "";


            const industry =
                formData.get("industry") || "";


            const message =
                formData.get("message") || "";


            /*
                Temporary form handling.

                Later this can be connected to:
                - CRM
                - Google Sheets
                - Email
                - WhatsApp API
                - n8n
                - Webhook
            */


            const whatsappMessage =

`Hello Everest Journeys,

I would like to request a Free Business Audit.

Name: ${name}
Business: ${business}
Phone: ${phone}
Industry: ${industry}

What I want to improve:
${message}`;


            const whatsappURL =
                "https://wa.me/919928728548?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            /*
                Open WhatsApp after form submission
            */

            window.open(
                whatsappURL,
                "_blank"
            );


            /*
                Reset form
            */

            auditForm.reset();


        }
    );

}



/* =====================================================
   10. ESC KEY — CLOSE MOBILE MENU
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navMenu
        ) {

            navMenu.classList.remove(
                "mobile-open"
            );

            if (mobileMenu) {

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);



/* =====================================================
   11. PREVENT DOUBLE FORM SUBMISSION
===================================================== */

if (auditForm) {

    auditForm.addEventListener(
        "submit",
        function () {

            const submitButton =
                auditForm.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled =
                    true;


                submitButton.innerHTML =
                    "Opening WhatsApp...";


                setTimeout(
                    function () {

                        submitButton.disabled =
                            false;

                        submitButton.innerHTML =
                            "Request My Free Audit →";

                    },
                    2500
                );

            }

        }
    );

}



/* =====================================================
   12. PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/* =====================================================
   13. CONSOLE BRAND MESSAGE
===================================================== */

console.log(
`
Everest Journeys
Digita
```
