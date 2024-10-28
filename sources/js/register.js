document.getElementById('registerBtn').addEventListener('click', function () {
    // Get all inputs

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Regex code to make sure its a valid type of email

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Conditions

    if (!email || !emailPattern.test(email)) {
        alert('Por favor, introducir un mail valido.');
        return;
    }
    if (!password) {
        alert('Por favor, introducir una contraseña.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Get modals

    const registerModalElement = document.getElementById('registerModal');
    const successModalElement = document.getElementById('successModal');

    // Create Bootstrap modals

    const registerModal = new bootstrap.Modal(registerModalElement, {
        backdrop: 'static',
    });
    const successModal = new bootstrap.Modal(successModalElement, {
        backdrop: 'static',
    });

    // Nested modals

    registerModal.hide();
    successModal.show();

    // Make sure nested modals work correctly

    successModalElement.addEventListener('hidden.bs.modal', function () {
        registerModal.show(); // Reopen the register modal after success modal is closed
    });

    // ! Again, I have no goddamn clue what the fuck this does
    // ! But aint working without it I hate JS
    // ! personal note, kill me

    [registerModalElement, successModalElement].forEach((modal) => {
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
