class CarouselCard extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute("src") || "";
    const scale = this.getAttribute("scale") || "1";
    const type = this.getAttribute("type") || "line";

    this.innerHTML = `
      <div class="card" style="transform: scale(${scale});">
        <img src="${src}" alt="carousel image">
      </div>
    `;
  }
}
const texts = [
  "Full-Stack Developer | MERN Stack",
  "Node.js • Express • MongoDB • React",
  "Creating Beautiful Web Experiences 🚀"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeText() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 80);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 40);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);


class CarouselExpand extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<button>Expand</button>`;
  }
}

customElements.define("carousel-card", CarouselCard);
customElements.define("carousel-expand", CarouselExpand);


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_kpuw9m7",     // 🔴 YOUR SERVICE ID
    "template_x8ekj5f",    // 🔴 YOUR TEMPLATE ID
    this
  )
  .then(() => {
    alert("Message sent successfully!");
    contactForm.reset();
  })
  .catch((error) => {
    alert("Failed to send message");
    console.error("EmailJS Error:", error);
  });
});
