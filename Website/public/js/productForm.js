window.addEventListener('load', function() {

        let formulario = document.querySelector("form");
        
        formulario.addEventListener("submit", function(event){

        let errorsJV = [];
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let category = document.querySelector("#category");
        let image = document.querySelector("#file");
        let acceptedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

      if(name.value == "") {
        errorsJV.push("El nombre del producto no puede estar vacío")
      } else if(name.value.length < 5) {
        errorsJV.push("El nombre del producto debe tener al menos 5 caracteres")
      }
      
      if(description.value.length < 20) {
        errorsJV.push("La descripción del producto debe tener al menos 20 caracteres")
      }

      if(!category.value) {
        errorsJV.push("Debes seleccionar una categoría para el producto")
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