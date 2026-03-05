// Enkel JS for navbar, årstall og FAQ-accordion

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const navToggle = document.querySelector(".navbar-toggle");
    const navMenu = document.querySelector(".navbar-nav");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("is-open");
            navMenu.classList.toggle("is-open");
        });

        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("is-open");
                navMenu.classList.remove("is-open");
            });
        });
    }

    // FAQ accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-question");
        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");
            faqItems.forEach(i => i.classList.remove("is-open"));
            if (!isOpen) {
                item.classList.add("is-open");
            }
        });
    });
});
