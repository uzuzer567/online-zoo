document.querySelector('.header__burger').onclick = function () {
  	document.querySelector('.header__burger').classList.toggle('active');
  	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}
