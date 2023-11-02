/**
 * =============== SHOW MENU ===============
 *
 * @format
 */

const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close"),
	productsLink = document.getElementById("product_link");

// MENU SHOW
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

// MENU HIDDEN
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));


/*=============== SWIPER POPULAR ===============*/
const swiperHero = new Swiper(".swiper-hero", {
	loop: true,
	spaceBetween: 32,
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Swiper More About US

const swiperMAU = new Swiper(".swiper-mau", {
	loop: true,
	spaceBetween: 32,
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

 var swiper_classes = new Swiper(".swiper-classes", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 40,
		freeMode: true,

		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
 });

 var swiper_staffs = new Swiper(".swiper-staffs", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 40,
		freeMode: true,

		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
 });

 var artilce_swiper = new Swiper(".artilce_swiper", {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 40,
		freeMode: true,

		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
 });

 var swiper_testi = new Swiper(".swiper-testi", {
		loop: true,
		slidesPerView: 2,
		spaceBetween: 40,
		freeMode: true,

		grabCursor: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
 });
/*=============== CHOOSE FAQ ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
