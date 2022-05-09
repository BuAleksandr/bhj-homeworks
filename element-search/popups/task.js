const popup = document.getElementById('modal_main');
popup.className = 'modal modal_active';
const successPopup = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success');
const closePopup = document.querySelectorAll("div.modal__close");

for (let i = 0; i < closePopup.length; i++) {
    let elem = closePopup.item(i);
    elem.onclick = close;

    function close () {
        successPopup.className = 'modal';
        popup.className = 'modal';
    }
}

function successOpen () {
    popup.className = "modal";
    successPopup.className = "modal modal_active";
}

showSuccess.onclick = successOpen;
