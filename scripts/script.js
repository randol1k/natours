"use strict";

// ELEMENTS SELECTION
const navMenuToggler = document.querySelector(".nav-menu--toggler");
const navMenuBody = document.querySelector(".nav-menu__body");

// BUTTONS
const btnBook = document.querySelectorAll(".btn--book");
const btnDiscover = document.querySelector(".btn--discover");

// SECTIONS
const sectionTours = document.querySelector("#section--tours");
const sectionBooking = document.querySelector("#section--booking");

// MENU LINKS
const navLinksArray = document.querySelectorAll(".nav-menu__link");

// SHOW / HIDE NAV MENU
const toggleNavMenu = function () {
    navMenuToggler.classList.toggle("clicked");
    navMenuBody.classList.toggle("hidden");
};

navMenuToggler.addEventListener("click", function () {
    toggleNavMenu();
});

// PAGE SCROLLING
const scrollWindow = function (sectionToScroll) {
    sectionToScroll.scrollIntoView({ block: "center", behavior: "smooth" });
};

btnDiscover.addEventListener("click", function () {
    scrollWindow(sectionTours);
});

btnBook.forEach((btn) =>
    btn.addEventListener("click", function () {
        scrollWindow(sectionBooking);
    })
);

navLinksArray.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        scrollWindow(document.querySelector(`#section--${event.target.id}`));
        toggleNavMenu();
    });
});
