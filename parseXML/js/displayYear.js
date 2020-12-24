var xmlDoc = loadXMLDoc("xml/numberones.xml");
function disp(theyear) {
	var raw = "<table class='table table-hover'><thead><tr><th>Issue Date</th><th>Album</th><th>Artist(s)</th><th>Weeks</th></tr></thead><tbody>";
	var t = xmlDoc.getElementsByTagName("year");
	for (i = 0; i < t.length; i++) {
		txt = xmlDoc.getElementsByTagName("year")[i].getAttribute("id");
		var en = xmlDoc.getElementsByTagName("year")[i].getElementsByTagName("entry"); /* pairnw mono ta entry toy category??? */
		if (txt == theyear) {
			for (j = 0; j < en.length; j++) {
				raw += "<tr><td>" + en[j].getElementsByTagName("issue_date")[0].childNodes[0].nodeValue + "</td><td>"
					+ en[j].getElementsByTagName("album")[0].childNodes[0].nodeValue + "</td><td>"
					+ en[j].getElementsByTagName("artist")[0].childNodes[0].nodeValue + "</td><td>"
					+ en[j].getElementsByTagName("weeks")[0].childNodes[0].nodeValue + "</td><tr>";
				document.getElementById("main").innerHTML = raw;
			}
		}
	}
}