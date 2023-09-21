document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario-contacto');

  formulario.addEventListener('submit', (event) => {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const queja = document.getElementById('queja').value;

      alert(`Nombre: ${nombre}\nCorreo Electrónico: ${email}\nQueja: ${queja}`);
  });
});
  