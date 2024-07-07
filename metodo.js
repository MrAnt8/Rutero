function Ruta(){
  window.location.href='listatienda.html';  
    }
  
    function Atras(){      
      window.location.href='puntoventa.html';      
        }

function validarCredenciales() {
    const usuarioValido = 'admin';
    const contrasenaValida = '1234'; 
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
      alert('Inicio de sesión exitoso');
      location.href="puntoventa.html";
    } else {
      alert('Credenciales incorrectas. Vuelve a intentarlo.');
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
// Obtén el contenedor donde colocar los checkboxes
const checkboxContainer = document.getElementById("checkboxContainer");
// Cargar datos desde el archivo JSON
fetch('tiendas.json') 
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Recorre el JSON y crea checkboxes
    data.forEach(opcion => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `checkbox-${opcion.id}`;

      const label = document.createElement("label");
      label.htmlFor = `checkbox-${opcion.id}`;
      label.appendChild(document.createTextNode(opcion.nombre));
      //label.style.marginRight = '5px';     
      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(label);
     checkboxContainer.appendChild(document.createElement("br")); // Salto de línea
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));

 

  

});


function guardarDatosSeleccionados() {
  
  const checkboxContainer = document.getElementById("checkboxContainer");
  // Asegúrate de que checkboxContainer exista antes de continuar
  if (checkboxContainer) {    
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]:checked');
    const resultadosElement = document.getElementById("resultados");
    // Obtén los valores seleccionados
    const resultados = Array.from(checkboxes).map(checkbox => checkbox.nextElementSibling.textContent);
    //alert(resultados.join(', ')); 

    // Almacenar resultados en localStorage para recuperarlos en puntoventa.html
  
    localStorage.setItem('resultadosSeleccionados', JSON.stringify(resultados)); 
    window.location.href = "puntoventa.html";
    } else { 
       console.error('Elemento con ID "checkboxContainer" no encontrado.');
      }

    // Asegúrate de que resultadosElement exista antes de continuar
   // if (resultadosElement) {
      // Muestra los resultados en el elemento especificado
  //    resultadosElement.textContent = `${resultados.join(', ')}`;
      // Redirige a "puntoventa.html"
  //    window.location.href = "puntoventa.html";
  //  } else {
  //    console.error('Elemento con ID "resultados" no encontrado.');
  //  }
 // } else {
    console.error('Elemento con ID "checkboxContainer" no encontrado.');
 // }
}



