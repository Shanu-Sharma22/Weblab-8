/* ===========================
   Navbar Toggle
=========================== */
document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

/* ===========================
   Carousel
=========================== */
let index = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(i) {
  slides.forEach(
    (s, idx) => (s.style.transform = `translateX(${(idx - i) * 100}%)`),
  );
}
document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});
showSlide(index);

/* ===========================
   Modal Newsletter
=========================== */
const modal = document.getElementById("newsletterModal");
const newsletterBtn = document.getElementById("newsletterBtn");
const closeBtn = document.querySelector(".close");

newsletterBtn.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Subscribed successfully!");
  modal.style.display = "none";
});

/* ===========================
   Contact Form Validation
=========================== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();
    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      contactForm.reset();
    } else {
      alert("Please fill all fields correctly.");
    }
  });
}

/* ===========================
   Scroll Animation
=========================== */
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) sec.classList.add("visible");
  });
});

/* ===========================
   Menu Filters
=========================== */
const filterButtons = document.querySelectorAll(".filters .btn");
const menuCards = document.querySelectorAll(".menu .card");
if (filterButtons.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      menuCards.forEach((card) => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
