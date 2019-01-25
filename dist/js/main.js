//Manipulate Nav Animation.
const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav-list');
const brand = document.querySelector('.menu-branding');
const navLinks = document.querySelectorAll('.nav-link');

let showMenu = false;

btn.addEventListener('click', toggleBtn);

function toggleBtn() {
	if (!showMenu) {
		btn.classList.add('close');
		nav.classList.add('show');
		navList.classList.add('show');
		brand.classList.add('show');
		navLinks.forEach((link) => link.classList.add('show'));
		showMenu = true;
	} else {
		btn.classList.remove('close');
		nav.classList.remove('show');
		navList.classList.remove('show');
		brand.classList.remove('show');
		navLinks.forEach((link) => link.classList.remove('show'));
		showMenu = false;
	}
}

//Inputs to copy
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const address = document.querySelector('#address');

document.querySelector('.box1').addEventListener('click', () => {
	email.select();
	document.execCommand('copy');
	alert('Copied');
});

document.querySelector('.box2').addEventListener('click', () => {
	number.select();
	document.execCommand('copy');
	alert('Copied');
});

document.querySelector('.box3').addEventListener('click', () => {
	address.select();
	document.execCommand('copy');
	alert('Copied');
});
