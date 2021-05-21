window.addEventListener('load', function() {

  document.querySelector('.campo i').addEventListener('click', e => {

    const passwordInput = document.querySelector('#password');

    if (e.target.classList.contains('fa-eye')) {
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('fa-eye');
        e.target.classList.remove('fa-eye-slash')
        passwordInput.type = 'password';
    }

});

    let formulario = document.querySelector("form");
    
      formulario.addEventListener("submit", function(event){
      
      let errorsJV = [];
      let email = document.querySelector("input#email");
      let password = document.querySelector("input#password");
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if(email.value == "") {
        errorsJV.push("El email del usuario no puede estar vacío")
      } else if(!emailRegex.exec(email.value)) {
        errorsJV.push("El email del usuario debe ser un formato válido")
      }
      
      if(password.value == "") {
        errorsJV.push("La contraseña del usuario no puede estar vacía")
      }

  if(errorsJV.length > 0) {
    event.preventDefault();
    let ulErrors = document.querySelector('div.errorsJV ul');
    for (let i = 0; i < errorsJV.length; i++) {
      ulErrors.innerHTML += '<li>' + errorsJV[i] + '</li>'
    }}
})});