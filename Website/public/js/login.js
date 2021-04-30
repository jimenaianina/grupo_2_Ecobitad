window.addEventListener('load', function() {

    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(evento){

    let errors = [];
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

  if(email.value == "") {
    errors.push("El email del usuario no puede estar vacío")
  } else if(email.type == "email"/* CÓMO VERGA SE PONE QUE SEA TIPO EMAIL*/) {
    errors.push("El email del usuario debe ser un formato válido")
  }
  else if(password.value == "") {
    errors.push("La contraseña del usuario no puede estar vacía")
  }

  if(errors.length > 0) {
    evento.preventDefault();
    let ulErrors = document.querySelectorAll('.errors ul');
    errors.forEach(error => {
        ulErrors.innerHTML += <li>${error}</li>)
    }}
    
    })
});