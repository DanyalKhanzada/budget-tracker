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

function hideModal(e) {
    modal.style.display = 'none';
    mask.style.display = 'none';
};

mask.addEventListener('click', hideModal);

// indexed db
let db;

const request = indexedDB.open('budget-tracker', 1);

request.onupgradeneeded = function (event) {
    const db = event.target.result;

    db.createObjectStore('new_funds', { autoIncrement: true });
};