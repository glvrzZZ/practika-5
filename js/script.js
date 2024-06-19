document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const dob = document.getElementById('dob');
    const submitButton = document.getElementById('submitButton');

    const passwordHelp = document.getElementById('passwordHelp');

    const validateInput = (input, condition) => {
        if (condition) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
        toggleSubmitButton();
    };

    const toggleSubmitButton = () => {
        const allValid = [...form.elements].every(input => {
            return input.type !== 'submit' ? input.classList.contains('valid') : true;
        });
        submitButton.disabled = !allValid;
    };

    firstName.addEventListener('input', () => {
        validateInput(firstName, firstName.value.trim() !== '');
    });

    lastName.addEventListener('input', () => {
        validateInput(lastName, lastName.value.trim() !== '');
    });

    email.addEventListener('input', () => {
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        validateInput(email, emailPattern.test(email.value));
    });

    password.addEventListener('input', () => {
        const passwordPattern = /^(?=.*\d).{8,}$/;
        validateInput(password, passwordPattern.test(password.value));
        passwordHelp.style.display = passwordPattern.test(password.value) ? 'none' : 'block';
    });

    confirmPassword.addEventListener('input', () => {
        validateInput(confirmPassword, confirmPassword.value === password.value && confirmPassword.value.trim() !== '');
    });

    dob.addEventListener('input', () => {
        validateInput(dob, dob.value.trim() !== '');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
    });
});

