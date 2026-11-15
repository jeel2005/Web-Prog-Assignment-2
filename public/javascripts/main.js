// Contact form validation using concepts from Chapter 9.
// DOMContentLoaded, addEventListener("submit"), preventDefault and empty field validation.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contactForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      const output = document.querySelector('#formMessage');

      if (name === '' || email === '' || message === '') {
        output.textContent = 'Please fill in every field.';
        output.className = 'fw-bold text-danger';
      } else {
        output.textContent = 'Thanks ' + name + ', your message was sent!';
        output.className = 'fw-bold text-success';
      }
    });
  }
});
