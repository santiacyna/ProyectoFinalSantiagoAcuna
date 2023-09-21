function mostrarTarjetasEnCarrito() {
  const carritoContenido = document.getElementById('carrito-contenido');

  carritoContenido.innerHTML = '';

  const tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];

  tarjetasEnCarrito.forEach((tarjeta) => {
      const tarjetaDiv = document.createElement('div');
      tarjetaDiv.classList.add('cart-card');
      tarjetaDiv.innerHTML = `
      <img src="${tarjeta.imagen}" alt="Imagen de la tarjeta">
      <h3>${tarjeta.titulo}</h3>
      <p>Precio: ${tarjeta.precio}</p>
      <button class="cart-remove-button" onclick="eliminarDelCarrito(this)">Eliminar</button>
      `;
      carritoContenido.appendChild(tarjetaDiv);
  });
}

mostrarTarjetasEnCarrito();

function eliminarDelCarrito(button) {
  const tarjetaDiv = button.closest('.cart-card');

  const tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];

  const tarjetaTitulo = tarjetaDiv.querySelector('h3').textContent;
  const tarjetaIndex = tarjetasEnCarrito.findIndex((tarjeta) => {
      return tarjeta.titulo === tarjetaTitulo;
  });

  if (tarjetaIndex !== -1) {
      tarjetasEnCarrito.splice(tarjetaIndex, 1);

      localStorage.setItem('tarjetasEnCarrito', JSON.stringify(tarjetasEnCarrito));
  }

  tarjetaDiv.remove();
}

mostrarTarjetasEnCarrito();
  
  
  
  
