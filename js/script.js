const objFormClass = document.getElementById('popup_form');
function popup_form() {
	if (objFormClass.className=='form-hidden') {
		objFormClass.className='form-show';
	}
	else {
		objFormClass.className='form-hidden';
	}
}
window.onload = popup_form;
window.addEventListener("keydown", function (event) {
  	if (event.keyCode === 27) {
	    popup_form();
	}
});