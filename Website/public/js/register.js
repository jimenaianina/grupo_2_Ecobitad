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
  
  if(lastName.value == "") {
    errorsJV.push("El apellido del usuario no puede estar vacío")
  } else if(lastName.value.length < 2) {
    errorsJV.push("El apellido del usuario debe tener al menos 2 caracteres")
  }
  
  if(email.value == "") {
    errorsJV.push("El email del usuario no puede estar vacío")
  } else if(!emailRegex.exec(email.value)) {
    errorsJV.push("El email del usuario debe ser un formato válido")
  }
  
  if(password.value == "") {
    errorsJV.push("La contraseña del usuario no puede estar vacía")
  } else if(password.value.length < 8) {
    errorsJV.push("La contraseña del usuario debe tener al menos 8 caracteres")
  }
  
  if(!acceptedExtensions.exec(image.value)) {
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