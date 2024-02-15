document.querySelector('.hamburger-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.left = '0';
});

document.querySelector('.sidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').style.left = '-100%';
});
