const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const backTop = document.querySelector("#backTop");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];

const updateActiveNav = () => {
  const y = window.scrollY + 130;
  let current = "home";
  sections.forEach(section => {
    if (y >= section.offsetTop) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
};

window.addEventListener("scroll", () => {
  updateActiveNav();
  backTop?.classList.toggle("show", window.scrollY > 500);
}, {passive:true});
updateActiveNav();

backTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

const quoteForm = document.querySelector("#quoteForm");
const formStatus = document.querySelector("#formStatus");

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thank you! Your request has been received. We'll contact you shortly.";
  quoteForm.reset();
});

document.querySelector("#newsletterForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  input.value = "";
  input.placeholder = "Subscribed — thank you!";
});
