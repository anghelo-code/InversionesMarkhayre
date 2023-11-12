const openModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.showModal();
}

const closeModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.close();
}


function enviarMensajeCorreo(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;

  // Reemplaza 'tu-correo@example.com' con tu dirección de correo electrónico
  const correoDestino = 'tu-correo@example.com';
  
  // Crea un enlace "mailto" para enviar un correo electrónico
  const enlaceCorreo = `mailto:${correoDestino}?subject=Mensaje%20de%20contacto&body=Nombre:%20${nombre}%0A%0AMensaje:%20${mensaje}`;
  
  // Abre el enlace para componer un correo en el cliente de correo predeterminado
  window.location.href = enlaceCorreo;

  // Desplazamiento suave hacia la parte superior después de enviar el formulario
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Cambiar la opacidad del fondo del header al hacer scroll
window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector("header");
    var opacity = 0 + scrollPosition / 500; // Ajusta este valor según tus preferencias

    // Limita la opacidad a un valor mínimo
    if (opacity > 1) {
        opacity = 1;
    }

    // Aplica la opacidad al fondo del header
    header.style.backgroundColor = "rgba(51, 51, 51, " + opacity + ")";
});

// Primero, seleccionamos todos los enlaces y el checkbox
const links = document.querySelectorAll('.nav a');
const checkbox = document.getElementById('check');

// Luego, agregamos un event listener a cada enlace
links.forEach(link => {
  link.addEventListener('click', function() {
    // Aquí usamos window.matchMedia() para verificar si el ancho de la pantalla es menor de 760px
    if(window.matchMedia('(max-width: 760px)').matches) {
      // Si es así, desmarcamos el checkbox
      checkbox.checked = false;
    }
  });
});