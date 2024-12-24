let $ = jQuery;
import("../../plugins/jsrender/jsrender.js");

import * as mfUtilModule from "./mfUtil.js";

let monthNames = mfUtilModule.getMonthNames();   
let categoriesArray = [];

function getCategoriesArray(callback = false){

	$.ajax({
		url: mfUtilModule.getBlogUrl()+"wp-json/wp/v2/categories?per_page=100",
		method: "GET",
		crossDomain: true,
		contentType: "application/json",

		success: function( data ) {

			categoriesArray = data;

			if (callback) {
				callback();
			}

		},

		error: function() {

			categoriesArray = [];

			if (callback) {
				callback();
			}

		}
	});

} 



function _uniqueCategories(categories){

	var uniqueCats = [];
	$.each(categories, function(i, el){
		if($.inArray(el, uniqueCats) === -1) uniqueCats.push(el);
	});
	return uniqueCats;

} 

function _getCatDetails(catID){

	var link = "#";
	var name = "";

	categoriesArray.forEach(function(element) {

		if(element.id == catID){
			link = element.link;
			name = element.name;
		}

	});

	return {
		link: link,
		name: name
	};

}

function _getCategoriesHTML(catID){

	var catDetails = _getCatDetails(catID);
          
	return $.templates("#category-link-template").render({
		categorylink : catDetails.link,
		categoryname : catDetails.name
	});

}

function setupRelatedBlogpostsHeavyLifting(){

	let aantalRelatedBlogPosts = $(".block-related-blogposts .article-tile-holder").length;
	let aantalRelatedBlogPostsFetched = 0;

	$(".block-related-blogposts .article-tile-holder").each(function(){

		var self = $(this);

		var post_id = $(this).attr("data-post_id");
		var request = $.ajax({
			url : mfUtilModule.getBlogUrl() + "wp-json/wp/v2/posts/?include="+post_id,
			method: "GET",
			dataType: "json"
		});

		request.done(function( data ) {

			if(data.length > 0){

				var element = data[0];

				var categories = "";

				var categorieIDs = _uniqueCategories(element.categories);

				categorieIDs.forEach(function(cat) {
					categories = categories + _getCategoriesHTML(cat);
				});

				var d = new Date(element.date);

				var newTile = $.templates("#tile-template").render({
					permalink : element.link,
					dateYmd : d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(),//dateYmd,
					date : d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear(),
					title : element.title.rendered,
					featured_image : element.fimg_url,
					categories : categories,
					excerpt: mfUtilModule.excerptMaker(element.excerpt.rendered, 25)
				});

				self.append(newTile);

				aantalRelatedBlogPostsFetched++

				if(aantalRelatedBlogPostsFetched == aantalRelatedBlogPosts){
					$(".block-related-blogposts").removeClass("loading");
				}

			}else{

				$(".block-related-blogposts").removeClass("loading");

			}
			
		});

	});

}

function setupRelatedBlogposts(){

	getCategoriesArray(setupRelatedBlogpostsHeavyLifting);

}

// module.exports = { setupRelatedBlogposts }

export { setupRelatedBlogposts }