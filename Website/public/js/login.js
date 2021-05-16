window.addEventListener('load', function() {

    let formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(event){
      
      let errorsJV = [];
      let email = document.querySelector("input#email");
      let password = document.querySelector("input#password");
      let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if(email.value == "") {
        errorsJV.push("El email del usuario no puede estar vacío")
      } 
      else if(password.value == "") {
        errorsJV.push("La contraseña del usuario no puede estar vacía")
      }
      else if(!emailRegex.exec(email.value)) {
        errorsJV.push("El email del usuario debe ser un formato válido")
      }

  if(errorsJV.length > 0) {
    event.preventDefault();
    let ulErrors = document.querySelector('div.errorsJV ul');
    for (let i = 0; i < errorsJV.length; i++) {
      ulErrors.innerHTML += '<li>' + errorsJV[i] + '</li>'
    }}
})});