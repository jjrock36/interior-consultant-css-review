const navToggle = document.querySelectorAll('.nav-toggle');
const sidebar = document.querySelector('.sidebar-wrapper');

navToggle.forEach((item) => {
  item.addEventListener('click', function() {
  sidebar.classList.toggle('sidebar-wrapper-show')
  })
})