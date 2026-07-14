function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById('projectTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

window.addEventListener('resize', () => {
    const track = document.getElementById('projectTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const modalModel = document.getElementById("modal-model");
    const captionText = document.getElementById("modal-caption");
    const closeBtn = document.querySelector(".close-modal");
    const prevBtn = document.getElementById("modal-prev");
    const nextBtn = document.getElementById("modal-next");

    const gridItems = Array.from(document.querySelectorAll(".grid-img"));
    let currentIndex = 0;

    function showItem(index) {
        if (index < 0) index = gridItems.length - 1;
        if (index >= gridItems.length) index = 0;
        currentIndex = index;

        const item = gridItems[currentIndex];
        const tagName = item.tagName.toLowerCase();

        modalImg.style.display = "none";
        modalModel.style.display = "none";

        if (tagName === 'img') {
            modalImg.src = item.src;
            modalImg.style.display = "block";
        } else if (tagName === 'model-viewer') {
            modalModel.src = item.getAttribute('src');
            modalModel.style.display = "block";
        }

        captionText.innerHTML = item.getAttribute("data-desc") || item.alt || "";
        modal.classList.add("show");
    }

    // Make everything clickable
    gridItems.forEach((item, index) => {
        item.style.cursor = "pointer";
        item.addEventListener("click", () => showItem(index));
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showItem(currentIndex - 1);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showItem(currentIndex + 1);
    });

    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("show");
    });

    document.addEventListener("keydown", (e) => {
        if (modal.classList.contains("show")) {
            if (e.key === "ArrowLeft") showItem(currentIndex - 1);
            if (e.key === "ArrowRight") showItem(currentIndex + 1);
            if (e.key === "Escape") modal.classList.remove("show");
        }
    });
});