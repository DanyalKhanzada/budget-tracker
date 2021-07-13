// modal
let modal = document.querySelector('#modal');
let modalText = document.querySelector('#modalText');
let mask = document.querySelector('#mask');

function showModal(isOnline) {
    if (isOnline) {
        modalText.textContent = 'All saved transactions have been completed!';
    }
    else {
        modalText.textContent = 'Transaction recorded! All transactions will be saved when an internet connection is reestablished.';
    }
    modal.style.display = 'flex';
    mask.style.display = 'block';
}

