/* global wp_site_url */ // eslint config

let $ = jQuery;

function excerptMaker(excerpt, limit) {

	excerpt = excerpt.replace(/(<([^>]+)>)/ig,"");

	excerpt = excerpt.split(" ");

	if (excerpt.length >= limit) {

		excerpt = excerpt.slice(0, limit);

		excerpt.pop(); // Laatste element weg doen
    
		excerpt = excerpt.join(" ") + " ...";

	} else {

		excerpt = excerpt.join(" ");

	}

	excerpt = excerpt.replace("`[[^]]*]`", "");
	//excerpt = excerpt.replace('`\[[^\]]*\]`', ''); // Throws an error in eslint
	
	return "<p>"+excerpt+"</p>";

}

// function fitvids(selector = false){

// 	var players = [
// 		'iframe[src*="youtube.com"]',
// 		'iframe[src*="vimeo.com"]',
// 		'iframe[data-cookieblock-src*="youtube.com"]',
// 		'iframe[data-cookieblock-src*="vimeo.com"]'
// 	];

// 	// Select videos
// 	let fitVids;

// 	if(selector && document.querySelector(selector)){

// 		fitVids = document.querySelector(selector).querySelectorAll(players.join(","));

// 	} else {

// 		fitVids = document.querySelectorAll(players.join(","));

// 	}
  
// 	// If there are videos on the page...
// 	if(fitVids.length) {
  
// 		// Loop through videos
// 		for(var i=0;i<fitVids.length;i++) {
  
// 			// Get Video Information
// 			var fitVid = fitVids[i];
// 			var width = fitVid.getAttribute("width");
// 			var height = fitVid.getAttribute("height");
// 			var aspectRatio = height/width;
// 			var parentDiv = fitVid.parentNode;
  
// 			// Wrap it in a DIV
// 			var div = document.createElement("div");
// 			div.className = "fitVids-wrapper";
// 			div.style.paddingBottom = aspectRatio * 100 + "%";
// 			parentDiv.insertBefore( div, fitVid );
// 			fitVid.remove();
// 			div.appendChild( fitVid );
  
// 			// Clear height/width from fitVid
// 			fitVid.removeAttribute("height")
// 			fitVid.removeAttribute("width");
// 		}
// 	}

// }

function getMonthNames(){

	if($("body").hasClass("lang-fr")){

		return [
			"janvier",
			"février",
			"mars",
			"avril",
			"mai",
			"juin",
			"juillet",
			"août",
			"septembre",
			"octobre",
			"novembre",
			"décembre"
		];

	}else if($("body").hasClass("lang-en")){

		return [
			"january",
			"february",
			"march",
			"april",
			"may",
			"june",
			"july",
			"august",
			"september",
			"october",
			"november",
			"december"
		]

	}else{
  
		return [
			"januari",
			"februari",
			"maart",
			"april",
			"mei",
			"juni",
			"juli",
			"augustus",
			"september",
			"oktober",
			"november",
			"december"
		];        
	}

}

function getHomeUrl(){

	if($("body").hasClass("lang-nl")){
		return wp_site_url + "/";
	} else if($("body").hasClass("lang-en")){
		return wp_site_url + "/en/";
	} else if($("body").hasClass("lang-fr")){
		return wp_site_url + "/fr/";
	}

}

function getBlogUrl(){

	let blogUrl = "https://mediaforta.com/blog/";

	if($("body").hasClass("lang-nl")){
		blogUrl = "https://mediaforta.com/blog/";
	} else if($("body").hasClass("lang-en")){
		blogUrl = "https://mediaforta.com/blog/en/";
	} else if($("body").hasClass("lang-fr")){
		blogUrl = "https://mediaforta.com/blog/fr/";
	}

	return blogUrl;

}

function string_to_slug  (str) {

	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to   = "aaaaeeeeiiiioooouuuunc------";
	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
		.replace(/\s+/g, "-") // collapse whitespace and replace by -
		.replace(/-+/g, "-"); // collapse dashes

	return str;

}

export { getMonthNames, getHomeUrl, getBlogUrl, excerptMaker, string_to_slug }