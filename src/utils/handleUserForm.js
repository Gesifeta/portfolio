//handle user form

const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you for your message');
        name.value = '';
        email.value = '';
        message.value = '';
    }
}
);