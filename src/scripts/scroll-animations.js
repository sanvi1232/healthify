// src/scripts/scroll-animations.js
export default function setupScrollAnimations() {
  const elements = document.querySelectorAll(".fade-up, .fade-down, .fade-left, .fade-right, .scale-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element enters view → add animation
          entry.target.classList.add("in-view");
        } else {
          // Element leaves view → reset animation
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0, // how much of the element must be visible to trigger
    }
  );

  elements.forEach((el) => observer.observe(el));
}
