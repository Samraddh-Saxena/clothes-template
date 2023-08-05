document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show-menu');
    document.querySelector('.footer-list').classList.toggle('show-menu');
    document.querySelector('.sidenav').classList.toggle('show-sidenav');
  });

  function change() {
    var x = document.getElementById("subL");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }