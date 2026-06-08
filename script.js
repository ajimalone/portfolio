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

//MORE-ARTWORKS
function swap3DModel(thumbElement, newModelSource) {
    const viewer = document.getElementById('main-3d-viewer');

    const currentMainModel = viewer.getAttribute('src');
    const currentMainImg = viewer.getAttribute('data-preview');

    const newMainImg = thumbElement.getAttribute('src');

    viewer.setAttribute('src', newModelSource);
    viewer.setAttribute('data-preview', newMainImg);

    thumbElement.setAttribute('src', currentMainImg);

    thumbElement.onclick = function () {
        swap3DModel(this, currentMainModel);
    };
}

function swapImage(thumbElement, mainImageId) {
    const mainImage = document.getElementById(mainImageId);

    const currentMainSrc = mainImage.getAttribute('src');
    const newMainSrc = thumbElement.getAttribute('src');

    mainImage.setAttribute('src', newMainSrc);
    thumbElement.setAttribute('src', currentMainSrc);
}


