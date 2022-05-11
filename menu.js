const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const icon = document.querySelector('#hamburger i');

hamburger.addEventListener('click', () => {
  icon.classList.toggle('fa-xmark');
  icon.classList.toggle('big-icon');
  menu.classList.toggle('show');
});
