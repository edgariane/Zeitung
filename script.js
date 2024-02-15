document.getElementById('menu-btn').addEventListener('click', function() {
	var menu = document.getElementById('menu');
	if (menu.style.left === '-250px') {
		menu.style.left = '0';
	} else {
		menu.style.left = '-250px';
	}
});
