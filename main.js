// get modal element
let modal = document.getElementById('simpleModal');
// get open modal btn
let modalBtn = document.getElementById('modalBtn');
// get close btn
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal)
// Listen for close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', outsideClick);

// function to open modal
function openModal() {
    modal.style.display = 'block';
}

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}
// function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}


