const openModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.showModal();
}

const closeModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.close();
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