document.getElementById('loginBtn').addEventListener('click', function () {
    // Get inputs

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (!loginEmail || !loginPassword) {
        alert('Por favor, rellenar ambos campos.');
        return;
    }

    // Get modal id's

    const loginModalElement = document.getElementById('loginModal');
    const alertModalElement = document.getElementById('alertModal');

    // Create Bootstrap modals

    const loginModal = new bootstrap.Modal(loginModalElement, {
        backdrop: 'static',
    });
    const alertModal = new bootstrap.Modal(alertModalElement, {
        backdrop: 'static',
    });

    // Hide login modal and show  alert modal

    loginModal.hide();
    alertModal.show();

    // Nested modals

    alertModalElement.addEventListener('hidden.bs.modal', function () {
        loginModal.show(); // Reopen login modal after closing previous one
    });

    // No clue but doesnt work without this :/

    [alertModalElement, loginModalElement].forEach((modal) => {
        modal.addEventListener('hidden.bs.modal', function () {
            if (!document.querySelector('.modal.show')) {
                document
                    .querySelectorAll('.modal-backdrop')
                    .forEach(function (el) {
                        el.remove();
                    });
            }
        });
    });
});

// ! Doesnt work, I shouldnt have used nested modals since they arent supported on 5.3.3, too bad too late :/

function close_modals() {
    document.querySelectorAll('.modal').forEach(function (modalElem) {
        const myModal = bootstrap.Modal.getOrCreateInstance(modalElem);
        myModal.hide();
    });
}
