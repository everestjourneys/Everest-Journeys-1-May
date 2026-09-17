/* =========================================================
   EVEREST JOURNEYS
   Interactive Website JavaScript
   Digital Marketing • Sales Automation • Business Growth
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;
    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobileMenu");
    const navMenu = document.getElementById("navMenu");
    const hero = document.getElementById("hero");
    const heroVisual = document.getElementById("heroVisual");
    const dashboard = document.getElementById("dashboard");
    const pageLoader = document.getElementById("pageLoader");



    /* =====================================================
       1. PAGE LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {
                pageLoader.classList.add("loaded");
            }

            body.classList.add("page-ready");

        }, 500);

    });



    /* =====================================================
       2. CURRENT YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }



    /* =====================================================
       3. NAVBAR SCROLL
    ===================================================== */

    const updateNavbar = () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    };

    updateNavbar();

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );



    /* =====================================================
       4. MOBILE NAVIGATION
    ===================================================== */

    if (mobileMenu && navMenu) {

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                navMenu.classList.toggle("mobile-open");

            mobileMenu.classList.toggle(
                "open",
                isOpen
            );

            mobileMenu.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove(
                    "mobile-open"
                );

                mobileMenu.classList.remove(
                    "open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                body.classList.remove(
                    "menu-open"
                );

            });

        });

    }



    /* =====================================================
       5. ACTIVE NAVIGATION
    ===================================================== */

    const currentFile =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                href &&
                href === currentFile
            ) {

                link.classList.add("active");

            }

        });



    /* =====================================================
       6. SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if (
        "IntersectionObserver" in window &&
        revealElements.length
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            element =>
                revealObserver.observe(element)
        );

    } else {

        revealElements.forEach(
            element =>
                element.classList.add("visible")
        );

    }



    /* =====================================================
       7. STAGGERED CARD REVEAL
    ===================================================== */

    document
        .querySelectorAll(
            ".feature-grid .feature-card, .industry-grid .industry-card"
        )
        .forEach((card, index) => {

            card.style.setProperty(
                "--reveal-delay",
                `${index * 90}ms`
            );

        });



    /* =====================================================
       8. HERO MOUSE PARALLAX
    ===================================================== */

    if (
        hero &&
        heroVisual &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;


        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();

                mouseX =
                    (event.clientX -
                        rect.left -
                        rect.width / 2)
                    / rect.width;

                mouseY =
                    (event.clientY -
                        rect.top -
                        rect.height / 2)
                    / rect.height;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                mouseX = 0;
                mouseY = 0;

            }
        );


        const animateHero =
            () => {

                currentX +=
                    (mouseX - currentX)
                    * 0.06;

                currentY +=
                    (mouseY - currentY)
                    * 0.06;


                heroVisual.style.setProperty(
                    "--mouse-x",
                    `${currentX * 22}px`
                );

                heroVisual.style.setProperty(
                    "--mouse-y",
                    `${currentY * 22}px`
                );


                requestAnimationFrame(
                    animateHero
                );

            };


        animateHero();

    }



    /* =====================================================
       9. DASHBOARD 3D TILT
    ===================================================== */

    if (
        dashboard &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        dashboard.addEventListener(
            "mousemove",
            event => {

                const rect =
                    dashboard.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 5;

                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -5;


                dashboard.style.setProperty(
                    "--tilt-x",
                    `${rotateX}deg`
                );

                dashboard.style.setProperty(
                    "--tilt-y",
                    `${rotateY}deg`
                );

                dashboard.classList.add(
                    "is-tilting"
                );

            }
        );


        dashboard.addEventListener(
            "mouseleave",
            () => {

                dashboard.style.setProperty(
                    "--tilt-x",
                    "0deg"
                );

                dashboard.style.setProperty(
                    "--tilt-y",
                    "0deg"
                );

                dashboard.classList.remove(
                    "is-tilting"
                );

            }
        );

    }



    /* =====================================================
       10. INTERACTIVE CARD POINTER EFFECT
    ===================================================== */

    document
        .querySelectorAll(".interactive-card")
        .forEach(card => {

            card.addEventListener(
                "pointermove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;


                    const percentX =
                        (x / rect.width) * 100;

                    const percentY =
                        (y / rect.height) * 100;


                    card.style.setProperty(
                        "--pointer-x",
                        `${percentX}%`
                    );

                    card.style.setProperty(
                        "--pointer-y",
                        `${percentY}%`
                    );

                }
            );

        });



    /* =====================================================
       11. MAGNETIC BUTTONS
    ===================================================== */

    const magneticButtons =
        document.querySelectorAll(".magnetic");


    if (
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        magneticButtons.forEach(button => {

            button.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        button.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;

                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(${x * 0.12}px, ${y * 0.12}px)`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        });

    }



    /* =====================================================
       12. CUSTOM CURSOR
    ===================================================== */

    const cursorDot =
        document.getElementById(
            "cursorDot"
        );

    const cursorRing =
        document.getElementById(
            "cursorRing"
        );


    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        let mouseX = -100;
        let mouseY = -100;

        let ringX = -100;
        let ringY = -100;


        window.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            },
            { passive: true }
        );


        const animateCursor =
            () => {

                ringX +=
                    (mouseX - ringX)
                    * 0.16;

                ringY +=
                    (mouseY - ringY)
                    * 0.16;


                cursorDot.style.transform =
                    `translate3d(${mouseX}px, ${mouseY}px, 0)`;


                cursorRing.style.transform =
                    `translate3d(${ringX}px, ${ringY}px, 0)`;


                requestAnimationFrame(
                    animateCursor
                );

            };


        animateCursor();


        const cursorTargets =
            document.querySelectorAll(
                "a, button, .interactive-card, .hover-step, .interactive-row"
            );


        cursorTargets.forEach(target => {

            target.addEventListener(
                "mouseenter",
                () => {

                    cursorRing.classList.add(
                        "cursor-hover"
                    );

                }
            );


            target.addEventListener(
                "mouseleave",
                () => {

                    cursorRing.classList.remove(
                        "cursor-hover"
                    );

                }
            );

        });

    }



    /* =====================================================
       13. FLOATING CARDS
    ===================================================== */

    const floatingCards =
        document.querySelectorAll(
            ".automation-floating, .crm-floating, .growth-floating"
        );


    floatingCards.forEach(
        (card, index) => {

            card.style.setProperty(
                "--float-delay",
                `${index * 1.2}s`
            );

        }
    );



    /* =====================================================
       14. PIPELINE LIVE ANIMATION
    ===================================================== */

    const leadCards =
        document.querySelectorAll(
            ".lead-card"
        );


    if (leadCards.length) {

        let currentLead = 0;


        setInterval(() => {

            leadCards.forEach(card => {

                card.classList.remove(
                    "live-highlight"
                );

            });


            leadCards[
                currentLead %
                leadCards.length
            ].classList.add(
                "live-highlight"
            );


            currentLead++;

        }, 1800);

    }



    /* =====================================================
       15. SYSTEM FLOW ACTIVE STEP
    ===================================================== */

    const systemSteps =
        document.querySelectorAll(
            ".system-step"
        );


    if (systemSteps.length) {

        let activeStep = 0;


        setInterval(() => {

            systemSteps.forEach(step => {

                step.classList.remove(
                    "auto-active"
                );

            });


            systemSteps[
                activeStep %
                systemSteps.length
            ].classList.add(
                "auto-active"
            );


            activeStep++;

        }, 2300);

    }



    /* =====================================================
       16. FLOW NODE ANIMATION
    ===================================================== */

    const flowNodes =
        document.querySelectorAll(
            ".flow-node"
        );


    if (flowNodes.length) {

        flowNodes.forEach(
            (node, index) => {

                node.style.setProperty(
                    "--flow-delay",
                    `${index * 0.35}s`
                );

            }
        );

    }



    /* =====================================================
       17. INDUSTRY CARD MOUSE GLOW
    ===================================================== */

    document
        .querySelectorAll(".industry-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX -
                        rect.left;

                    const y =
                        event.clientY -
                        rect.top;


                    card.style.setProperty(
                        "--glow-x",
                        `${x}px`
                    );

                    card.style.setProperty(
                        "--glow-y",
                        `${y}px`
                    );

                }
            );

        });



    /* =====================================================
       18. SMOOTH ANCHOR SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const targetId =
                        anchor.getAttribute(
                            "href"
                        );

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

                        const navHeight =
                            navbar
                                ? navbar.offsetHeight
                                : 0;


                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            navHeight -
                            15;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });

                    }

                }
            );

        });



    /* =====================================================
       19. RIPPLE EFFECT ON BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".btn, .nav-cta"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    const rect =
                        button.getBoundingClientRect();

                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "click-ripple";


                    ripple.style.left =
                        `${event.clientX - rect.left}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top}px`;


                    button.appendChild(
                        ripple
                    );


                    setTimeout(() => {

                        ripple.remove();

                    }, 650);

                }
            );

        });



    /* =====================================================
       20. ESCAPE CLOSES MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navMenu &&
                mobileMenu
            ) {

                navMenu.classList.remove(
                    "mobile-open"
                );

                mobileMenu.classList.remove(
                    "open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                body.classList.remove(
                    "menu-open"
                );

            }

        }
    );



    /* =====================================================
       21. RESIZE CLEANUP
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 780 &&
                navMenu &&
                mobileMenu
            ) {

                navMenu.classList.remove(
                    "mobile-open"
                );

                mobileMenu.classList.remove(
                    "open"
                );

                mobileMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                body.classList.remove(
                    "menu-open"
                );

            }

        },
        { passive: true }
    );



    /* =====================================================
       22. PAGE VISIBILITY
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                body.classList.add(
                    "page-hidden"
                );

            } else {

                body.classList.remove(
                    "page-hidden"
                );

            }

        }
    );



    /* =====================================================
       23. REDUCED MOTION SUPPORT
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        document
            .querySelectorAll(".reveal")
            .forEach(element => {

                element.classList.add(
                    "visible"
                );

            });

    }



    /* =====================================================
       24. CONSOLE BRAND MESSAGE
    ===================================================== */

    console.log(
        "%cEVEREST JOURNEYS",
        "font-size:20px;font-weight:800;color:#0B1F3A;"
    );

    console.log(
        "%cDigital Marketing • Sales Automation • Business Growth",
        "font-size:12px;color:#1687E8;"
    );

});
