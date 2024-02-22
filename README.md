<html>
<body>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Popup-Fenster</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(128, 128, 128, 0.5); /* Grau, durchsichtig */
            justify-content: center;
            align-items: center;
        }
        .popup {
            background-color: #fff; /* Weiß */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Schwarzer Schatten */
            text-align: center;
        }
        .popup a {
            color: #1E90FF; /* Blau */
            text-decoration: underline;
            cursor: pointer;
        }
        .popup a:hover {
            color: #000; /* Schwarz */
        }
        .popup button {
            margin: 10px;
            padding: 8px 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
        }
        .popup #okButton {
            background-color: #000; /* Schwarz */
            color: #fff; /* Weiß */
        }
        .popup #cancelButton {
            background-color: #000; /* Schwarz */
            color: #fff; /* Weiß */
        }
    </style>
</head>
<body>

<div class="overlay" id="popupOverlay">
    <div class="popup">
        <p>Mit dem Klick auf <a href="Fehler.html" target="_self">Nutzungsbedingungen</a> und <a href="Fehler.html" target="_self">Richtlinien</a> akzeptieren Sie diese.</p>
        <button id="okButton" onclick="closePopup()">OK</button>
        <button id="cancelButton" onclick="redirectAndClose()">Abbrechen</button>
    </div>
</div>

<script>
    function openPopup() {
        document.getElementById("popupOverlay").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popupOverlay").style.display = "none";
    }

    function redirectAndClose() {
        window.location.href = 'DAann Nicht.html'; // Ersetze mit der URL deines GIFs
        setTimeout(function() {
            window.open('', '_self', ''); // Öffne ein leeres Fenster im aktuellen Tab
            window.close(); // Schließe das aktuelle Fenster
        }, 5); // Schließe die Seite nach 5 Sekunden (kann je nach GIF-Länge angepasst werden)
    }
</script>
<script>
    window.onload = openPopup;
</script>
<head>
<head>
	<title>Meine Webseite</title>
	<style>
		#cover {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    background-image:<img src="https://github.com/edgariane/Zeitung/tree/main/Neuer%20Ordner/cover.png">;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
		#button {
			position: absolute;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			width: 100px;
			height: 100px;
			background-color: white;
			border: 5px solid black;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			color: black;
			font-size: 24px;
		}
</head>
</body>
<body>
	<a id="button" href="Zweite seite.html">Zeitungs Beiträge</a>
</body>
</html>
