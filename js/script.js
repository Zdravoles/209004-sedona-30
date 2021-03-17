const objForm = document.getElementById('popup_form');
const btnSearch = document.querySelector('.search-link');
const dateIn = objForm.querySelector('[name=dateIn]');

function popup_form() {
	dateIn.classList.remove('order-error');
	if (objForm.className=='form-hidden') {
		objForm.className='form-show';
	}
	else {
		objForm.className='form-hidden';
	}
}
btnSearch.onclick = function (event) {
	event.preventDefault();
  	popup_form();
};

window.onload = popup_form;

window.addEventListener('keydown', function (event) {
  	if (event.keyCode === 27) {
	    popup_form();
	}
});

objForm.addEventListener('submit', function (event) {
	if (!dateIn.value) {
		dateIn.classList.add('order-error');
		event.preventDefault();
	}
});