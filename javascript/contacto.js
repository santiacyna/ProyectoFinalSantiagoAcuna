document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formulario-contacto');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      // Recupera los valores ingresados por el usuario
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var queja = document.getElementById('queja').value;
  
      // Aquí puedes hacer algo con los valores, como enviarlos a un servidor o mostrarlos en la página
  
      // Ejemplo: Mostrar una alerta con los valores ingresados
      alert('Nombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nQueja: ' + queja);
    });
  });
  