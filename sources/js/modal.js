// Check if disclaimer has been shown before using "cookies"

if (!localStorage.getItem('disclaimerShown')) {
    // Get the disclaimer modal

    const disclaimerModalElement = document.getElementById('disclaimerModal');

    if (disclaimerModalElement) {
        // Ensure the modal element exists, compatibility

        // Create a the bootstrap modal

        const disclaimerModal = new bootstrap.Modal(disclaimerModalElement);

        // Show the modal

        disclaimerModal.show();

        // Create "cookie"

        localStorage.setItem('disclaimerShown', 'true');
    } else {
        console.warn('Jaja se rompio todo');
    }
}
