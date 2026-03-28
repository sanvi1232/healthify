export function initParallax() {
    const items = document.querySelectorAll("[data-parallax]");

    if (!items.length) return;

    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        items.forEach((el) => {
            const speed = parseFloat(el.dataset.speed) || 0.2;
            el.style.transform = `translateY(${y * speed}px)`;
        });
    });
}
