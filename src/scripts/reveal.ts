// Adds .is-visible to [data-reveal] elements when they enter the viewport.
// Content stays visible without JS and with prefers-reduced-motion.
// For clip-path wipes the parent is observed: a fully clipped element never reports an intersection.
const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const map = new Map<Element, HTMLElement[]>();
  items.forEach((el) => {
    const watch = el.dataset.reveal === "wipe" && el.parentElement ? el.parentElement : el;
    map.set(watch, [...(map.get(watch) ?? []), el]);
  });
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        map.get(e.target)?.forEach((el) => el.classList.add("is-visible"));
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  map.forEach((_, watch) => io.observe(watch));
}
