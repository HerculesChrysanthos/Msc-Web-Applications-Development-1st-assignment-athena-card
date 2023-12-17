let matchingPassword = false;

function showPassword(passtype) {
  const x = document.getElementById(passtype);

  x.type = 'password' ? 'text' : 'password';
}

function submitForm(event) {
  if (matchingPassword) {
    alert('Η φόρμα υποβλήθηκε επιτυχώς!');

    document.getElementById('application-form').reset();
  }
  event.preventDefault();
}

function checkPasswords() {
  var password = document.getElementById('pass').value;
  var repeatPassword = document.getElementById('repass').value;

  if (password !== repeatPassword) {
    alert('Οι κωδικοί πρόσβασης δεν ταιριάζουν.');
  } else {
    matchingPassword = true;
  }
}
