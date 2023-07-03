document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show-menu');
    document.querySelector('.footer-list').classList.toggle('show-menu');
    document.querySelector('.sidenav').classList.toggle('show-sidenav');
  });