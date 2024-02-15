document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById('menu-toggle');
  var slideoutMenu = document.getElementById('slideout-menu');

  menuToggle.addEventListener('click', function() {
    if (slideoutMenu.style.left === '-250px') {
      slideoutMenu.style.left = '0px';
    } else {
      slideoutMenu.style.left = '-250px';
    }
  });
});
