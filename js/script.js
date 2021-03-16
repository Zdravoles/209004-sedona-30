const objFormClass = document.getElementById('popup_form');
const btnSearch = document.querySelector('.search-link');
function popup_form() {
	objFormClass.preventDefault;
	if (objFormClass.className=='form-hidden') {
		objFormClass.className='form-show';
	}
	else {
		objFormClass.className='form-hidden';
	}
}
btnSearch.onclick = function (event) {
	event.preventDefault();
  	popup_form();
};
window.onload = popup_form;
window.addEventListener("keydown", function (event) {
  	if (event.keyCode === 27) {
	    popup_form();
	}
});