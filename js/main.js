/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2015, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,n,i){"use strict";function a(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}function s(t){this.selector=t,this.query=""}var r=function(e){var n=t("head");n.prepend(t.map(e,function(t){return 0===n.has("."+t).length?'<meta class="'+t+'" />':void 0}))};r(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var o=function(e,i){if("string"==typeof e){if(i){var a;if(i.jquery){if(a=i[0],!a)return i}else a=i;return t(a.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},u=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},l=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},m=function(e,n){var i=this,a=function(){var a=o(this),s=!a.data(i.attr_name(!0)+"-init");a.data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(a))),s&&i.events(this)};return o(this.scope).is("["+this.attr_name()+"]")?a.call(this.scope):o("["+this.attr_name()+"]",this.scope).each(a),"string"==typeof e?this[e].call(this,n):void 0},h=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?n():i.call(t)):void n()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
e.matchMedia||(e.matchMedia=function(){var t=e.styleMedia||e.media;if(!t){var i=n.createElement("style"),a=n.getElementsByTagName("script")[0],s=null;i.type="text/css",i.id="matchmediajs-test",a.parentNode.insertBefore(i,a),s="getComputedStyle"in e&&e.getComputedStyle(i,null)||i.currentStyle,t={matchMedium:function(t){var e="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=e:i.textContent=e,"1px"===s.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(t){function n(){i&&(r(n),u&&t.fx.tick())}for(var i,a=0,s=["webkit","moz"],r=e.requestAnimationFrame,o=e.cancelAnimationFrame,u="undefined"!=typeof t.fx;a<s.length&&!r;a++)r=e[s[a]+"RequestAnimationFrame"],o=o||e[s[a]+"CancelAnimationFrame"]||e[s[a]+"CancelRequestAnimationFrame"];r?(e.requestAnimationFrame=r,e.cancelAnimationFrame=o,u&&(t.fx.timer=function(e){e()&&t.timers.push(e)&&!i&&(i=!0,n())},t.fx.stop=function(){i=!1})):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-a)),s=e.setTimeout(function(){t(n+i)},i);return a=n+i,s},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(t),s.prototype.toString=function(){return this.query||(this.query=o(this.selector).css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""))},e.Foundation={name:"Foundation",version:"5.5.3",media_queries:{small:new s(".foundation-mq-small"),"small-only":new s(".foundation-mq-small-only"),medium:new s(".foundation-mq-medium"),"medium-only":new s(".foundation-mq-medium-only"),large:new s(".foundation-mq-large"),"large-only":new s(".foundation-mq-large-only"),xlarge:new s(".foundation-mq-xlarge"),"xlarge-only":new s(".foundation-mq-xlarge-only"),xxlarge:new s(".foundation-mq-xxlarge")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(t,n,i,a,s){var r=[t,i,a,s],u=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&u.push(this.init_lib(n,r));else for(var l in this.libs)u.push(this.init_lib(l,n));return o(e).load(function(){o(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,n){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),n&&n.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,n[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,n[e]),this.libs[e].init.apply(this.libs[e],[this.scope,n[e]])):(n=n instanceof Array?n:new Array(n),this.libs[e].init.apply(this.libs[e],n))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=u,t.add_namespace=l,t.bindings=m,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=this.global.namespace===i?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===i||/false/i.test(e)?"":e},libs:{},utils:{S:o,throttle:function(t,e){var n=null;return function(){var i=this,a=arguments;null==n&&(n=setTimeout(function(){t.apply(i,a),n=null},e))}},debounce:function(t,e,n){var i,a;return function(){var s=this,r=arguments,o=function(){i=null,n||(a=t.apply(s,r))},u=n&&!i;return clearTimeout(i),i=setTimeout(o,e),u&&(a=t.apply(s,r)),a}},data_options:function(e,n){function i(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function a(e){return"string"==typeof e?t.trim(e):e}n=n||"options";var s,r,o,u={},l=function(t){var e=Foundation.global.namespace;return t.data(e.length>0?e+"-"+n:n)},m=l(e);if("object"==typeof m)return m;for(o=(m||":").split(";"),s=o.length;s--;)r=o[s].split(":"),r=[r[0],r.slice(1).join(":")],/true/i.test(r[1])&&(r[1]=!0),/false/i.test(r[1])&&(r[1]=!1),i(r[1])&&(r[1]=-1===r[1].indexOf(".")?parseInt(r[1],10):parseFloat(r[1])),2===r.length&&r[0].length>0&&(u[a(r[0])]=a(r[1]));return u},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[e]=a(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(t,e){function n(t){for(var e=t.length,n=e-1;n>=0;n--)if(t.attr("height")===i)return!1;return!0}var a=this,s=t.length;(0===s||n(t))&&e(t),t.each(function(){h(a.S(this),function(){s-=1,0===s&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(t){return e.matchMedia(t).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document);

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

(function () {
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
})();
