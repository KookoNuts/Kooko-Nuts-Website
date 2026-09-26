// ==============================
// KOOKO NUTS - JAVASCRIPT
// ==============================


// ==============================
// HOME SLIDESHOW
// ==============================

const slides = document.querySelectorAll(".home-slide");

let currentSlide = 0;


function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    if (slides[index]) {

        slides[index].classList.add("active");

    }

}


if (slides.length > 0) {

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 4000);

}


// ==============================
// SMOOTH SCROLLING
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// ==============================
// PRODUCT CARD MESSAGE
// ==============================

const productCards =
    document.querySelectorAll(".product-card");


productCards.forEach(card => {

    card.addEventListener("click", function () {

        const productName =
            this.querySelector("h3")?.textContent.trim();

        const price =
            this.querySelector(".price")?.textContent.trim();

        if (productName && price) {

            console.log(
                `Kooko Nuts Product: ${productName} - ${price}`
            );

        }

    });

});


// ==============================
// CURRENT YEAR
// ==============================

const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
