function mostrarTarjetasEnCarrito() {
    var carritoContenido = document.getElementById('carrito-contenido');
  
    // Limpia el contenido del carrito antes de agregar las tarjetas
    carritoContenido.innerHTML = '';
  
    // Recupera las tarjetas del carrito desde el almacenamiento local
    var tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];
  
    // Itera sobre las tarjetas y las agrega al carrito
    tarjetasEnCarrito.forEach(function(tarjeta) {
      var tarjetaDiv = document.createElement('div');
      tarjetaDiv.classList.add('cart-card'); // Aplica la clase .cart-card
      tarjetaDiv.innerHTML = `
      <img src="${tarjeta.imagen}" alt="Imagen de la tarjeta">
      <h3>${tarjeta.titulo}</h3>
      <p>Precio: ${tarjeta.precio}</p>
      <button class="cart-remove-button" onclick="eliminarDelCarrito(this)">Eliminar</button>
    `;
      ;
      carritoContenido.appendChild(tarjetaDiv);
    });
  }

mostrarTarjetasEnCarrito();

// Función para eliminar una tarjeta del carrito
function eliminarDelCarrito(button) {
    // Obtén el contenedor de la tarjeta que contiene el botón
    var tarjetaDiv = button.closest('.cart-card');
  
    // Recupera las tarjetas del carrito desde el almacenamiento local
    var tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];
  
    // Encuentra el índice de la tarjeta en el arreglo basado en el contenido de la tarjeta (puedes usar una propiedad única, como el título)
    var tarjetaTitulo = tarjetaDiv.querySelector('h3').textContent;
    var tarjetaIndex = tarjetasEnCarrito.findIndex(function(tarjeta) {
      return tarjeta.titulo === tarjetaTitulo;
    });
  
    // Si se encuentra la tarjeta, elimínala del arreglo
    if (tarjetaIndex !== -1) {
      tarjetasEnCarrito.splice(tarjetaIndex, 1);
  
      // Actualiza el almacenamiento local con el nuevo arreglo de tarjetas
      localStorage.setItem('tarjetasEnCarrito', JSON.stringify(tarjetasEnCarrito));
    }
  
    // Elimina la tarjeta del DOM
    tarjetaDiv.remove();
  }
  
  // Llama a la función para mostrar las tarjetas en el carrito
  mostrarTarjetasEnCarrito();
  
  
  
  
