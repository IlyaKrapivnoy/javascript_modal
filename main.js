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


// function to open modal
function openModal() {
    modal.style.display = 'block';
}

// function to close modal
function closeModal() {
    modal.style.display = 'none';
}


