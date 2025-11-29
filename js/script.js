const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    if (navLinks.classList.contains('open')) {
        menuButton.textContent = '✖';
    } else {
        menuButton.textContent = '☰';
    }
});

const contactForm = document.querySelector('.contact-form');
const messageDiv = document.createElement('div');
messageDiv.style.marginTop = '10px';
contactForm.appendChild(messageDiv);

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    messageDiv.textContent = '';
    const inputs = contactForm.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-msg')) {
            error.remove();
        }

        input.style.borderColor = '#444';

        if (!input.value.trim()) {
            valid = false;

            const errorMsg = document.createElement('span');
            errorMsg.textContent = 'This field is required';
            errorMsg.style.color = 'red';
            errorMsg.style.fontSize = '0.85rem';
            errorMsg.classList.add('error-msg');

            input.insertAdjacentElement('afterend', errorMsg);
            input.style.borderColor = 'red';
        }
    });

    if (valid) {
        messageDiv.textContent = 'Thank you for contacting me! I will get back to you soon.';
        messageDiv.style.color = '#ff6ec7';
        messageDiv.style.fontWeight = '600';
        contactForm.reset();
    }
});
