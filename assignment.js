function showPassword(passtype) {
  const x = document.getElementById(passtype);

  x.type = 'password' ? 'text' : 'password';
  //   if (x.type === 'password') {
  //     x.type = 'text';
  //   } else {
  //     x.type = 'password';
  //   }
}

function submitForm(event) {
  alert('Η φόρμα υποβλήθηκε επιτυχώς!');
  event.preventDefault();

  document.getElementById('application-form').reset();
}
