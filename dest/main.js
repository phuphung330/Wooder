let header = document.querySelector("header");
let slider = document.querySelector(".slider");
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;
document.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;

    if (scrollY > heightSlider - heightHeader) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// back to top
let backToTop = document.querySelector(".backtotop");

document.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;

    if (scrollY > heightSlider - heightHeader) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// progress bar
let progressBar = document.querySelector(".probar");
let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
document.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset;

    let progressBarPercent =
        (scrollTop /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight)) *
            100 +
        "%";

    progressBar.style.width = `${progressBarPercent}`;
});

// Menumobile + Nav
function menuMobileNav() {
    const nav = document.querySelector(".nav");
    const btnMenu = document.querySelector(".btnmenu");

    btnMenu.addEventListener("click", function () {
        this.classList.toggle("active");
        nav.classList.toggle("active");
    });

    function removeNav() {
        btnMenu.classList.remove("active");
        nav.classList.remove("active");
    }

    window.addEventListener("resize", function () {
        let widthSize = window.innerWidth;
        if (widthSize > 990) {
            removeNav();
        }
    });
}
menuMobileNav();

// LangOption
function LangOption() {
    const eng = document.querySelector(".lang .eng");
    const langOther = document.querySelector(".lang .lang__other ");
    const langCurrent = document.querySelector(".eng span");
    const langOTherItems = document.querySelectorAll(".lang .lang__other a");
    eng.addEventListener("click", function (e) {
        e.stopPropagation();
        langOther.classList.toggle("active");
        eng.classList.toggle("active");
    });

    langOTherItems.forEach(function (item) {
        item.addEventListener("click", function (element) {
            element.preventDefault();
            let itemText = this.textContent;
            let langCurrentText = langCurrent.textContent;
            langCurrent.innerHTML = itemText;
            item.innerHTML = langCurrentText;
        });
        document.addEventListener("click", function () {
            langOther.classList.remove("active");
        });
    });
}

LangOption();

// POP-UP VIDEO
let clickBtnVideo = document.querySelectorAll(
    ".quality__lower .item .item__img"
);
let popupVideo = document.querySelector(".popup__video");
let closeBtn = document.querySelector(".close");
let iframe = document.querySelector(".popup__video iframe");

clickBtnVideo.forEach(function (button) {
    button.addEventListener("click", function () {
        popupVideo.style.display = "flex";
        let videoID = button.getAttribute("data-video-id");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoID);
    });
});
closeBtn.addEventListener("click", function () {
    iframe.setAttribute("src", "");
    popupVideo.style.display = "none";
});
popupVideo.addEventListener("click", function () {
    iframe.setAttribute("src", "");
    popupVideo.style.display = "none";
});

// VIDEO POPUP OPTION
let btnWatch = document.querySelector(".video .video__btnwatch");
btnWatch.addEventListener("click", function () {
    popupVideo.style.display = "flex";
    iframe.setAttribute("src", "https://www.youtube.com/embed/IwSvgmopDnY");
});

// FANCYBOX GALLERY
Fancybox.bind('[data-fancybox="image"]', {
    infinite: true,
});

// SLIDER SHOW
let sliderFooter = document.querySelector(".list-item");
let flktyshow = new Flickity(sliderFooter, {
    cellAlign: "left",
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,

    groupCells: "80%",
    on: {
        ready: function () {},
    },
});

// progress bar show
let line = document.querySelector(".scrollS__line .line");
flktyshow.on("scroll", function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    line.style.width = progress * 100 + "%";
});

// SLIDER FLICKITY
let flkty = new Flickity(".slider__run", {
    cellAlign: "left",
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: 3000,
    on: {
        ready: function () {
            let pagingDot = document.querySelector(".dotted");
            let dotted = document.querySelector(".flickity-page-dots");
            pagingDot.appendChild(dotted);
        },
        change: function (index) {
            let indexNumber = index + 1;
            let NumberCount = document.querySelector(".pagination span");

            NumberCount.innerHTML = indexNumber.toString().padStart(2, "0");
        },
    },
});

// NEXT BUTTON
document
    .querySelector(".slider__btn.--next")
    .addEventListener("click", function (e) {
        e.preventDefault();
        flkty.next();
    });

// REVERSE BUTTON
document
    .querySelector(".slider__btn.--reverse")
    .addEventListener("click", function (e) {
        e.preventDefault();
        flkty.previous();
    });

// SCROLL TO SECTION

let headerMenu = document.querySelectorAll("header .header__menu li a");
let heightHead = document.querySelector("header").offsetHeight;
let sections = [];
function removeActiveMenu() {
    headerMenu.forEach(function (menu__element) {
        menu__element.classList.remove("active");
    });
}

headerMenu.forEach(function (element, index) {
    let className = element.getAttribute("href").replace("#", "");
    let section = document.querySelector("." + className);
    sections.push(section);

    element.addEventListener("click", function (e) {
        e.preventDefault();
        removeActiveMenu();
        element.classList.add("active");
        window.scrollTo({
            top: section.offsetTop - heightHead + 1,
            behavior: "smooth",
        });
    });
});

window.addEventListener("scroll", function () {
    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
        let sectionPosition = section.offsetTop;
        let heightSection = section.offsetHeight;
        console.log(heightSection);

        if (
            positionScroll > sectionPosition - heightHead &&
            positionScroll < heightSection + sectionPosition
        ) {
            removeActiveMenu();
            headerMenu[index].classList.add("active");
        } else {
            headerMenu[index].classList.remove("active");
        }
    });
});
