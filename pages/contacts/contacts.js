document.querySelector('.header__burger').onclick = function () {
  	document.querySelector('.header__burger').classList.toggle('active');
  	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}


const formButton = document.querySelector('.contacts__form-button');
const formInputs = document.querySelectorAll('.contacts__form-input');
const formTextArea = document.querySelector('.contacts__form-textarea');

formButton.addEventListener('click', () => {
	formInputs.forEach(input => {
		if (input.validity.valid) {
			input.classList.remove('contacts__form-invalid');
		} else {
			input.classList.add('contacts__form-invalid');
		}
	})

	if (formTextArea.value === '') {
		formTextArea.classList.add('contacts__form-invalid');
	} else {
		formTextArea.classList.remove('contacts__form-invalid');
	}
});
