function agregarAlCarrito(button) {
    // Obtén la información de la tarjeta desde la tarjeta actual
    var cardContainer = button.closest('.card');
    var cardTitle = cardContainer.querySelector('.card-title').textContent;
    var cardPrice = cardContainer.querySelector('.card-text').textContent;
    var cardImageSrc = cardContainer.querySelector('.card-img-top').src; // Nueva línea
  
    // Crea un objeto JavaScript para representar la tarjeta
    var tarjeta = {
      titulo: cardTitle,
      precio: cardPrice,
      imagen: cardImageSrc // Ruta completa de la imagen
    };
  
    // Recupera las tarjetas existentes del almacenamiento local o crea una lista vacía
    var tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];
  
    // Agrega la nueva tarjeta a la lista de tarjetas
    tarjetasEnCarrito.push(tarjeta);
  
    // Convierte la lista de tarjetas a una cadena JSON y almacénala
    localStorage.setItem('tarjetasEnCarrito', JSON.stringify(tarjetasEnCarrito));
  
    // Redirige al usuario a la página del carrito
    window.location.href = '../paginas/carrito.html'; // Reemplaza con la URL correcta
  }