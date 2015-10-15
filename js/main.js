$(document).foundation();

// Off-canvas menu toggle function
(function () {
	function toggleNav() {
		var nav = document.querySelector("nav");
		if (nav.className === "") {
			nav.className = "menu-visible";
		} else {
			nav.className = "";
		}
	}

	var menuIcon = document.getElementById("hamburger");
	menuIcon.addEventListener("click", toggleNav);
	
	var contact = document.querySelector(".nav-item [href='info.html#contact']");
	contact.onclick = toggleNav;
})();

// AJAX (project_details.json)
var xhr = new XMLHttpRequest(),
	projectItems; // Will store the contents of JSON file

xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 200) {
		projectItems = JSON.parse(xhr.responseText);
	}
}

xhr.open("GET", "js/projects_details.json", true);
xhr.send(null);