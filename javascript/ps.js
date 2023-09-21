function agregarAlCarrito(button) {
  const cardContainer = button.closest('.card');
  const cardTitle = cardContainer.querySelector('.card-title').textContent;
  const cardPrice = cardContainer.querySelector('.card-text').textContent;
  const cardImageSrc = cardContainer.querySelector('.card-img-top').src;

  const tarjeta = {
      titulo: cardTitle,
      precio: cardPrice,
      imagen: cardImageSrc
  };

  const tarjetasEnCarrito = JSON.parse(localStorage.getItem('tarjetasEnCarrito')) || [];

  tarjetasEnCarrito.push(tarjeta);

  localStorage.setItem('tarjetasEnCarrito', JSON.stringify(tarjetasEnCarrito));

  window.location.href = '../paginas/carrito.html';
}
