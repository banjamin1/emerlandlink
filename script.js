const menuButton = document.getElementById('menuButton');
const popupMenu = document.getElementById('popupMenu');

menuButton.addEventListener('click', () => {
  popupMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!menuButton.contains(e.target) && !popupMenu.contains(e.target)) {
    popupMenu.classList.remove('show');
  }
});
