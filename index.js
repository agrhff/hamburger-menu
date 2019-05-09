let hamburger = document.querySelector('#js-hamburger');

function animateHamburger(event) {
	hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', animateHamburger, false);
hamburger.addEventListener('touch', animateHamburger, false);