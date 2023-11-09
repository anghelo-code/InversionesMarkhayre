

const openModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.showModal();
}

const closeModal = (idBtn) => {
  const dialog = document.getElementById(idBtn);
  dialog.close();
}
