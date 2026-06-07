document.addEventListener("DOMContentLoaded", () => {
    // Select custom element structures that require scroll animation hooks
    const animatedCards = document.querySelectorAll(".stat-card, .project-card, .leadership-card");

    // Configure the observer setup thresholds
    const observerOptions = {
        root: null, // Uses viewport default layout bounds
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of target card is visible
    };

    // Callback mechanism updating style matrix configuration properties
    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply transition configurations cleanly when element emerges
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Unobserve card since presentation is rendered
                observer.unobserve(entry.target);
            }
        });
    };

    const cardObserver = new IntersectionObserver(revealOnScroll, observerOptions);

    // Set initial preparation styles before loading intersection rules
    animatedCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease";
        cardObserver.observe(card);
    });
});
