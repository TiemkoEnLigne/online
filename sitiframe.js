linkURL = "index.htm"
	if (parent.document.URL) {
		callingURL = parent.document.URL
		if (callingURL.indexOf('?') != -1) {
			linkURL = callingURL.substring(callingURL.indexOf('?')+1,callingURL.length)
		}
	}


Tiemkoframe = new Array ("", "accueil.htm","avant.htm","1986-1995.htm","après1995.htm", "ed.htm","jjt.htm","rc.htm","Deboco.htm")
		
function newIframe(ach) {
	content.document.location.href = Tiemkoframe[ach]
}

if (document.images) {
		Accl = new Image
		Avnt = new Image
		Mil = new Image
		Apr = new Image

		Accl.src = "Accueil FA.png"
		Avnt.src = "Avant FA.png"
		Mil.src = "1986-1995 FA.png"
		Apr.src = "Après1995 FA.png"
	
		Acclx = new Image
		Avntx = new Image
		Milx = new Image
		Aprx = new Image

		Acclx.src = "Accueilx FA.png"
		Avntx.src = "Avantx FA.png"
		Milx.src = "1986-1995x FA.png"
		Aprx.src = "Après1995x FA.png"

	}
