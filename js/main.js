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
})();