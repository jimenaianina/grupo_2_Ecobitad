window.addEventListener('load', function() {

    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(event){

      let errors = [];

      let email = document.querySelector("input#email");
      let password = document.querySelector("input#password");
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if(email.value == "") {
        errors.push("El email del usuario no puede estar vacío")
      } 
      else if(!emailRegex.exec(email.value)) {
        errors.push("El email del usuario debe ser un formato válido")
      }
      else if(password.value == "") {
        errors.push("La contraseña del usuario no puede estar vacía")
      }

  if(errors.length > 0) {
    event.preventDefault();
    let ulErrors = document.querySelectorAll('div.errors ul');
    errors.forEach(error => {
      ulErrors.innerHTML += <li>${error}</li>})
  }
    })
});