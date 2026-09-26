```javascript
// ==============================
// KOOKO NUTS - JAVASCRIPT
// ==============================


// ---------- MOBILE NAVIGATION ----------

const nav = document.querySelector("nav");

const header = document.querySelector("header");


// ---------- SMOOTH SCROLLING ----------

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


// ---------- GALLERY IMAGE VIEWER ----------

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.classList.add("image-overlay");

        const largeImage = document.createElement("img");

        largeImage.src = this.src;

        largeImage.alt = this.alt;

        overlay.appendChild(largeImage);

        document.body.appendChild(overlay);


        // Close when clicking the image
        largeImage.addEventListener("click", function (event) {

            event.stopPropagation();

            overlay.remove();

        });


        // Close when clicking outside
        overlay.addEventListener("click", function () {

            overlay.remove();

        });


        // Close with ESC key
        document.addEventListener("keydown", function closeImage(event) {

            if (event.key === "Escape") {

                overlay.remove();

                document.removeEventListener(
                    "keydown",
                    closeImage
                );

            }

        });

    });

});


// ---------- PRODUCT CARD MESSAGE ----------

const productCards = document.querySelectorAll(".product-card");

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


// ---------- CURRENT YEAR ----------

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
```
