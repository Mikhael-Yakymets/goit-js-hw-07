const forma = document.querySelector('.login-form');

forma.addEventListener('submit', event => {
  event.preventDefault();

  const email = forma.elements.email.value.trim();
  const password = forma.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  forma.reset();
});
