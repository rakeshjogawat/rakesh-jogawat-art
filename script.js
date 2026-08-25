	/* =========================================================
   RAKESH JOGAWAT ART
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   HOME PAGE — FEATURED WORKS
========================================================= */

const featuredGallery =
    document.getElementById("featured-gallery");


if (
    featuredGallery &&
    typeof artworks !== "undefined"
) {

    const featuredArtworks =
        artworks.filter(
            artwork => artwork.featured === true
        );


    featuredArtworks.forEach(artwork => {

        const artworkItem =
            document.createElement("div");

        artworkItem.className =
            "artwork";


        artworkItem.innerHTML = `

            <a href="artwork.html?id=${artwork.id}">

                <div class="home-image">

                    <img
                        src="${artwork.image}"
                        alt="${artwork.title} by Rakesh Jogawat"
                    >

                    <span class="available-badge">
                        ${artwork.status.toUpperCase()}
                    </span>

                </div>

            </a>


            <h3>
                ${artwork.title}
            </h3>


            <p>
                ${artwork.medium} · ${artwork.year}
            </p>


            <p class="price">
                ₹${artwork.price.toLocaleString("en-IN")}
            </p>

        `;


        featuredGallery.appendChild(
            artworkItem
        );

    });

}


/* =========================================================
   DYNAMIC GALLERY
========================================================= */

const galleryGrid =
    document.getElementById("gallery-grid");


if (
    galleryGrid &&
    typeof artworks !== "undefined"
) {

    artworks.forEach(artwork => {

        const galleryItem =
            document.createElement("div");


        /* Create medium class */

        let mediumClass =
            artwork.medium.toLowerCase();


        if (mediumClass === "acrylics") {

            mediumClass = "acrylic";

        }


        galleryItem.className =
            "gallery-item " + mediumClass;


        /* Add sold class */

        if (
            artwork.status.toLowerCase() === "sold"
        ) {

            galleryItem.classList.add("sold");

        }


        /* Create artwork card */

        galleryItem.innerHTML = `

            <a
                href="artwork.html?id=${artwork.id}"
            >

                <div class="gallery-image">

                    <img
                        src="${artwork.image}"
                        alt="${artwork.title} by Rakesh Jogawat"
                    >

                    <span class="available-badge">
                        ${artwork.status.toUpperCase()}
                    </span>

                </div>

            </a>


            <h3>
                ${artwork.title}
            </h3>


            <p>
                ${artwork.medium} · ${artwork.year}
            </p>


            <p class="gallery-price">
                ₹${artwork.price.toLocaleString("en-IN")}
            </p>

        `;


        galleryGrid.appendChild(
            galleryItem
        );

    });

}


/* =========================================================
   GALLERY FILTERS
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


function filterGallery(filter) {

    const galleryItems =
        document.querySelectorAll(".gallery-item");


    galleryItems.forEach(item => {

        if (
            filter === "all" ||
            item.classList.contains(filter)
        ) {

            item.style.display = "";
            item.style.pointerEvents = "auto";

        } else {

            item.style.display = "none";
            item.style.pointerEvents = "none";

        }

    });

}


/* Filter button clicks */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        filterGallery(filter);

    });

});


/* =========================================================
   REUSABLE ARTWORK PAGE
========================================================= */

const artworkPage =
    document.querySelector(".artwork-page");


if (
    artworkPage &&
    typeof artworks !== "undefined"
) {


    const parameters =
        new URLSearchParams(
            window.location.search
        );


    const artworkId =
        parameters.get("id");


    const artwork =
        artworks.find(
            item => item.id === artworkId
        );


    if (artwork) {


        /* IMAGE */

        const mainImage =
            document.getElementById(
                "artwork-main-image"
            );


        if (mainImage) {

            mainImage.src =
                artwork.image;

            mainImage.alt =
                artwork.title +
                " by Rakesh Jogawat";

        }


        /* PAGE TITLE */

        document.title =
            artwork.title +
            " | Rakesh Jogawat";

/* SOCIAL MEDIA PREVIEW */

const ogTitle =
    document.getElementById("og-title");

const ogDescription =
    document.getElementById("og-description");

const ogImage =
    document.getElementById("og-image");


if (ogTitle) {

    ogTitle.setAttribute(
        "content",
        artwork.title + " | Rakesh Jogawat"
    );

}


if (ogDescription) {

    ogDescription.setAttribute(
        "content",
        artwork.description
    );

}


if (ogImage) {

    ogImage.setAttribute(
        "content",
        artwork.image
    );

}


        /* TITLE */

        const title =
            document.getElementById(
                "artwork-title"
            );


        if (title) {

            title.textContent =
                artwork.title;

        }


        /* MEDIUM */

        const medium =
            document.getElementById(
                "artwork-medium"
            );


        if (medium) {

            medium.textContent =
                artwork.medium +
                " on " +
                artwork.surface;

        }


        /* DESCRIPTION */

        const description =
            document.getElementById(
                "artwork-description"
            );


        if (description) {

            description.textContent =
                artwork.description;

        }


        /* SIZE */

        const size =
            document.getElementById(
                "artwork-size"
            );


        if (size) {

            size.textContent =
                artwork.size;

        }


        /* YEAR */

        const year =
            document.getElementById(
                "artwork-year"
            );


        if (year) {

            year.textContent =
                artwork.year;

        }


        /* STATUS */

        const status =
            document.getElementById(
                "artwork-status"
            );


        if (status) {

            status.textContent =
                artwork.status;

        }


        /* PRICE */

        const price =
            document.getElementById(
                "artwork-price"
            );


        if (price) {

            price.textContent =
                "₹" +
                artwork.price.toLocaleString(
                    "en-IN"
                );

        }


        /* WHATSAPP ENQUIRY */

        const whatsapp =
            document.getElementById(
                "whatsapp-enquiry"
            );


        if (whatsapp) {

            const message =
                `Hello Rakesh, I am interested in purchasing "${artwork.title}" priced at ₹${artwork.price.toLocaleString("en-IN")}. Please share the details.`;


            whatsapp.href =
                "https://wa.me/918005647209?text=" +
                encodeURIComponent(message);

        }


        /* =================================================
           PREVIOUS / NEXT
        ================================================= */

        const currentIndex =
            artworks.findIndex(
                item =>
                    item.id === artwork.id
            );


        const previousButton =
            document.getElementById(
                "previous-artwork"
            );


        const nextButton =
            document.getElementById(
                "next-artwork"
            );


        /* Previous */

        if (previousButton) {

            if (currentIndex > 0) {

                previousButton.href =
                    "artwork.html?id=" +
                    artworks[
                        currentIndex - 1
                    ].id;

            } else {

                previousButton.style.visibility =
                    "hidden";

            }

        }


        /* Next */

        if (nextButton) {

            if (
                currentIndex <
                artworks.length - 1
            ) {

                nextButton.href =
                    "artwork.html?id=" +
                    artworks[
                        currentIndex + 1
                    ].id;

            } else {

                nextButton.style.visibility =
                    "hidden";

            }

        }


        /* =================================================
           LIGHTBOX
        ================================================= */

        const lightbox =
            document.getElementById(
                "lightbox"
            );


        const lightboxImage =
            document.getElementById(
                "lightbox-image"
            );


        const lightboxClose =
            document.getElementById(
                "lightbox-close"
            );


        /* Open lightbox */

        if (
            mainImage &&
            lightbox &&
            lightboxImage
        ) {

            mainImage.addEventListener(
                "click",
                function () {

                    lightboxImage.src =
                        mainImage.src;

                    lightboxImage.alt =
                        mainImage.alt;

                    lightbox.classList.add(
                        "active"
                    );

                }
            );

        }


        /* Close lightbox */

        if (
            lightboxClose &&
            lightbox
        ) {

            lightboxClose.addEventListener(
                "click",
                function () {

                    lightbox.classList.remove(
                        "active"
                    );

                }
            );

        }


        /* Close by clicking outside image */

        if (lightbox) {

            lightbox.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        lightbox
                    ) {

                        lightbox.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }

    }

}


/* =========================================================
   RESET GALLERY FILTER
========================================================= */

window.addEventListener(
    "pageshow",
    function () {

        const allButton =
            document.querySelector(
                '[data-filter="all"]'
            );


        if (
            allButton &&
            filterButtons.length > 0
        ) {

            filterButtons.forEach(button => {

                button.classList.remove(
                    "active"
                );

            });


            allButton.classList.add(
                "active"
            );


            filterGallery("all");

        }

    }
);