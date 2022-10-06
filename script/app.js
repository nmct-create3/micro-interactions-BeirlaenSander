function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const passwordToggle = document.querySelector('.js-password-toggle');
  const passwordInput = document.querySelector('.js-password-input');

  const passwordOptions = ['password', 'text'];

  passwordToggle.addEventListener('change', function () {
    passwordInput.type = passwordOptions[+this.checked];
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
