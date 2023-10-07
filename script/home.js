document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const itemsContainer = document.getElementsByClassName("carousel")[0];

    const item = document.getElementsByClassName("theDoctor")[0];
    const styleItem = window.getComputedStyle(item);
    const widthItem = parseInt(styleItem.getPropertyValue("width"));

    const styleItems = window.getComputedStyle(itemsContainer);
    const gap = parseInt(styleItems.getPropertyValue("gap"));

    let autoplayInterval;
    let isAutoplayPaused = false;

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (!isAutoplayPaused) {
                const maxScrollLeft = itemsContainer.scrollWidth - itemsContainer.clientWidth;
                itemsContainer.scrollLeft += widthItem + gap;

                if (itemsContainer.scrollLeft >= maxScrollLeft) {
                    itemsContainer.scrollLeft = 0;
                }
            }
        }, 2000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    nextButton.addEventListener("click", () => {
        itemsContainer.scrollLeft += widthItem + gap;
        stopAutoplay();
        isAutoplayPaused = true;
    });
    prevButton.addEventListener("click", () => {
        itemsContainer.scrollLeft -= widthItem + gap;
        stopAutoplay();
        isAutoplayPaused = true;
    });

    itemsContainer.addEventListener("mouseenter", stopAutoplay);
    itemsContainer.addEventListener("mouseleave", () => {
        isAutoplayPaused = false;
        startAutoplay();
    });

    startAutoplay();
});