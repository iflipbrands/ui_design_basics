document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emailForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      alert('Thank you for signing up! We\'ll be in touch soon.');
      this.reset();
    });
  });