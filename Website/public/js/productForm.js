window.addEventListener('load', function() {

    window.addEventListener('load', function() {

        let formulario = document.querySelector("form");
        
        formulario.addEventListener("submit", function(evento){

        let errors = [];
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let image = document.querySelector("#file");
      if(name.value == "") {
        errors.push("El nombre del producto no puede estar vacío")
      } else if(name.value.length < 5) {
        errors.push("El nombre del producto debe tener al menos 5 caracteres")
      }
      else if(description.value.length < 20) {
        errors.push("La descripción del producto debe tener al menos 20 caracteres")
      }
      else if(image) {
        errors.push("El formato de la imagen debe ser .JPG, .JPEG, .PNG o .GIF")
      }

      if(errors.length > 0) {
        evento.preventDefault();
        let ulErrors = document.querySelectorAll('.errors ul');
        errors.forEach(error => {
            ulErrors.innerHTML += <li>${error}</li>)
        }}
        
        });
   });