window.addEventListener('load', function() {

    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(evento){

    let errors = [];
    let name = document.querySelector("#name");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let image = document.querySelector("#file");

  if(name.value == "") {
    errors.push("El nombre del usuario no puede estar vacío")
  } else if(name.value.length < 2) {
    errors.push("El nombre del usuario debe tener al menos 2 caracteres")
  }
  else if(lastName.value == "") {
    errors.push("El apellido del usuario no puede estar vacío")
  } else if(lastName.value.length < 2) {
    errors.push("El apellido del usuario debe tener al menos 2 caracteres")
  }
  else if(email.value == "") {
    errors.push("El email del usuario no puede estar vacío")
  } else if(email.type == "email"/* CÓMO VERGA SE PONE QUE SEA TIPO EMAIL*/) {
    errors.push("El email del usuario debe ser un formato válido")
  }
  else if(password.value == "") {
    errors.push("La contraseña del usuario no puede estar vacía")
  }
  else if(password.value.length < 8) {
    errors.push("La contraseña del usuario no puede estar vacía")
  }
  else if(image /* BIS EMAIL, CÓMO PONER QUE SEA FORMATO VÁLIDO */) {
    errors.push("El formato de la imagen debe ser .JPG, .JPEG, .PNG o .GIF")
  }

  if(errors.length > 0) {
    evento.preventDefault();
    let ulErrors = document.querySelectorAll('.errors ul');
    errors.forEach(error => {
        ulErrors.innerHTML += <li>${error}</li>)
    }}
    
    })
});