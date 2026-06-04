// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

// Contact Form Validation
const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;
                input.style.border = "2px solid red";

            } else {

                input.style.border = "none";

            }

        });

        if (!valid) {

            alert("Please complete all fields.");

            return;

        }

        alert("Thank you for your message!");

        form.reset();

    });

}

// Project Card Animation
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});



// Back To Top Button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";


document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";
backToTop.style.width = "50px";
backToTop.style.height = "50px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";
backToTop.style.background = "#7c3aed";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "20px";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Fade-in Animation for Cards
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});
// Image Modal

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const projectImages = document.querySelectorAll(".project-card img");
const closeBtn = document.querySelector(".close-modal");

if (modal && modalImg && closeBtn) {

    projectImages.forEach(img => {

        img.addEventListener("click", () => {

            modal.style.display = "block";
            modalImg.src = img.src;

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}
document.querySelectorAll(".project-card img")
.forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});