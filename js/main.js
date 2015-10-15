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
		for (var i = 0, len = projectItems.length; i < len; i++) {
			loadProjects(i);
		}
	}
};

xhr.open("GET", "js/projects_details.json", true);
xhr.send(null);

function loadProjects(num) {
	// Project item
	var li = document.createElement("li");
	li.className = "project-item row";

	// Image part
	(function () {
		var div = document.createElement("div");
		div.className = "small-12 large-6 columns";

		var liveSite = document.createElement("a");
		liveSite.className = "live-site";
		liveSite.href = "http://" + projectItems[num].liveSite;

		var img = document.createElement("img");
		img.src = "img/" + projectItems[num].image;
		img.alt = projectItems[num].title;
		img.title = projectItems[num].title + "Preview";

		liveSite.appendChild(img);
		div.appendChild(liveSite);
		li.appendChild(div);
	})();

	// Description part
	(function () {
		var div = document.createElement("div");
		div.className = "small-12 large-6 columns";
		
		var title = document.createElement("h3");
		title.className = "project-title";
		title.innerHTML = projectItems[num].title;
		
		div.appendChild(title);
		
		var dfn = document.createElement("div");
		dfn.className = "project-definition";

		for (var i = 0, len = projectItems[num].description.length; i < len; i++) {
			var p = document.createElement("p");
			p.innerHTML = projectItems[num].description[i];
			dfn.appendChild(p);
		}
		
		div.appendChild(dfn);
		
		var sourceCode = document.createElement("p");
		sourceCode.className = "source-code";
		
		var a = document.createElement("a");
		a.href = "https://" + projectItems[num].sourceCode;
		a.innerHTML = "view source code &rarr;";
		sourceCode.appendChild(a);
		div.appendChild(sourceCode);
		li.appendChild(div);
	})();
	document.querySelector(".project-list").appendChild(li);
}