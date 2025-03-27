document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', () => {
        // Toggle the type of the password field
        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        // Toggle the button text
        togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
    });
});
