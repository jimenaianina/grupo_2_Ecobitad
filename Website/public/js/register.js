window.addEventListener('load', function() {

    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(event){

    let errorsJV = [];
    let name = document.querySelector("#name");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let image = document.querySelector("#file");
    let acceptedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(name.value == "") {
    errorsJV.push("El nombre del usuario no puede estar vacío")
  } else if(name.value.length < 2) {
    errorsJV.push("El nombre del usuario debe tener al menos 2 caracteres")
  }
  else if(lastName.value == "") {
    errorsJV.push("El apellido del usuario no puede estar vacío")
  } else if(lastName.value.length < 2) {
    errorsJV.push("El apellido del usuario debe tener al menos 2 caracteres")
  }
  else if(email.value == "") {
    errorsJV.push("El email del usuario no puede estar vacío")
  } else if(!emailRegex.exec(email.value)) {
    errorsJV.push("El email del usuario debe ser un formato válido")
  }
  else if(password.value == "") {
    errorsJV.push("La contraseña del usuario no puede estar vacía")
  }
  else if(password.value.length < 8) {
    errorsJV.push("La contraseña del usuario debe tener al menos 8 caracteres")
  }
  else if(!acceptedExtensions.exec(image.value)) {
    errorsJV.push("El formato de la imagen debe ser .JPG, .JPEG, .PNG o .GIF")
  }

  if(errorsJV.length > 0) {
    event.preventDefault();
    let ulErrors = document.querySelector('div.errorsJV ul');
    for (let i = 0; i < errorsJV.length; i++) {
      ulErrors.innerHTML += '<li>' + errorsJV[i] + '</li>'
    }}
    })
});