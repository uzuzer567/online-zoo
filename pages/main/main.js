document.querySelector('.header__burger').onclick = function () {
  	document.querySelector('.header__burger').classList.toggle('active');
  	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
}

const sliderBlock = document.querySelector('.meet-block__info');
const sliderItems = document.querySelector('.meet-block__slider-cards');

(function() {
	sliderBlock.addEventListener('click', addCloneFirstLast);
	
	function addCloneFirstLast(e) {
	  let first = sliderItems.querySelector('.meet-block__card');
	  let last = sliderItems.querySelector('.meet-block__card:last-child');

	  if (e.target.classList.contains('button-left')) sliderItems.insertBefore(last, first);
	  if (e.target.classList.contains('button-right')) sliderItems.appendChild(first);
	};
}).call(this);
