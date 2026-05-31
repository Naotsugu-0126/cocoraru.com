const header = document.querySelector("[data-header]");
const stickyCta = document.querySelector("[data-sticky-cta]");
const couponButtons = document.querySelectorAll("[data-filter]");
const couponCards = document.querySelectorAll("[data-category]");
const gallery = document.querySelector("[data-gallery]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");

function updateChrome() {
  const isScrolled = window.scrollY > 24;
  header?.classList.toggle("is-scrolled", isScrolled);
  stickyCta?.classList.toggle("is-visible", window.scrollY > 520);
}

function setCouponFilter(category) {
  couponButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === category);
  });

  couponCards.forEach((card) => {
    card.classList.toggle("is-hidden", card.dataset.category !== category);
  });
}

couponButtons.forEach((button) => {
  button.addEventListener("click", () => setCouponFilter(button.dataset.filter));
});

function scrollGallery(direction) {
  if (!gallery) return;
  const distance = Math.max(260, gallery.clientWidth * 0.72);
  gallery.scrollBy({ left: distance * direction, behavior: "smooth" });
}

galleryPrev?.addEventListener("click", () => scrollGallery(-1));
galleryNext?.addEventListener("click", () => scrollGallery(1));

window.addEventListener("scroll", updateChrome, { passive: true });
window.addEventListener("resize", updateChrome);

setCouponFilter("organic");
updateChrome();
