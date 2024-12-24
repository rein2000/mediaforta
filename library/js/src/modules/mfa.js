import UIkit from "../../plugins/uikit/js/uikit.min.js";
import fitvids from "../../plugins/fitvids/dist/fitvids.js";

import * as contactFormModule from "./contactform.js";
import * as pricePageModule from "./pricePage.js";
import * as relatedBlogModule from "./relatedBlogposts.js";
import * as mMenuModule from "./mMenu.js";

// import("../../plugins/jsrender/jsrender.js");

let $ = jQuery;
import("../../plugins/jsrender/jsrender.js");

function makeDropdownListLanguages(){

	let menu = $("#inner-header .small-menu .languages");
	let li = menu.find("ul li");

	if(li.length > 1){

		li.each(function(){
        
			if($(this).hasClass("active")){
				$(this).addClass("menu-item-has-children");
				$(this).append("<ul class='sub-menu'></ul>");
			}

		});

		li.each(function(){
        
			if(!$(this).hasClass("active")){
				menu.find(".sub-menu").append($(this));
			}
		});       

	}

	menu.show();

}

// function setupHamburger(){

// 	$(".hamburger").click(function(){

// 		$(this).toggleClass("is-active");
// 		$("body").toggleClass("mobile-menu-active");

// 	});

// }

function setupModalVideos(){

	var videoModals = $(".modal-video");

	fitvids(".modal-video .iframe-holder");

	videoModals.each(function(i){

		var modal_id = videoModals.eq(i).data("modal_id");

		videoModals.eq(i).on("show", function(){

			playVideoWithId(modal_id+"-iframe");

			fitvids(".modal-video .iframe-holder");

		});

		videoModals.eq(i).on("hide", function(){

			stopAllVideos();

		});

	});

}

function setupCaseSliders(){

	if( $( ".block-case-slider .case-slider" ).length ){

		UIkit.slider(".block-case-slider .case-slider");

		// Variable with element that fire event
		var caseSliderItem = $(".block-case-slider .case-slider ul > li");

		caseSliderItem.on("beforeitemhide", function(){
			stopAllVideos();
		});

	}

}

function stopAllVideos(){

	$( ".video-holder-vimeo iframe" ).each(function(){

		var player = new Vimeo.Player(this);
		player.pause();   

	});

}

function playVideoWithId(id){

	stopAllVideos();

	var iframe = document.querySelector("#"+id);
	var player = new Vimeo.Player(iframe);

	var playPromise = player.play();

	if (playPromise !== undefined) {
		playPromise.then()
			.catch();
	}

}

function setupVideoHolders(){

	fitvids(".video-holder");

	$(".video-holder .playbutton-image").click(function(e){
		e.preventDefault();

		$(this).fadeOut();

		playVideoWithId($(this).data("target-id"));

		return false;
	});

	// Cookiebot tags executed, so we can run fitvids 
	window.addEventListener("CookiebotOnTagsExecuted", function () {
		fitvids(".video-holder");
	})

}

function setupStickyScroll(){

	UIkit.util.on(document, "beforescroll", "#sticky-holder-holder a", function() {

		// Put this div above the menu to avoid unwanted menu interactions because the menu scrolled back into view
		$("#menu-hider").css({"z-index": 4000});

		setTimeout(function(){ 
			$("#menu-hider").css({"z-index": 0});
		}, 2000);

	});

}

function setupPeopleLinks(){

	$(".go-to-scroll-details").each(function(i){

		$(this).click(function(){

			showPeopleDetail(i);

		});

	});

	$("#people-switcher-el li a").each(function(i){

		$(this).click(function(e){

			$(".go-to-scroll-details").removeClass("active");
			$(".go-to-scroll-details").eq(i).addClass("active");
			e.preventDefault();
			$(".people-details-switcher > li").hide();
			$(".people-details-switcher > li").eq(i).show();
			$("#people-switcher-el li a").removeClass("active");
			$(this).addClass("active");
			return false;
		});

	});

	showPeopleDetail(0);

}

function showPeopleDetail(j){

	$("#people-switcher-el li a").eq(j).click();

}

function setupFilterOnArchives(){

	if(!$("body").hasClass("archive")){
		return false;
	}

	$("#filter-holder").on("afterFilter", function(){
		//stopAllVideos();

		// var activeFilter = $("#filter-holder .case-tag-selector .selector.uk-active").data("show-tag");

		
		$(".case-overview-grid > a:hidden").attr("data-order", 0)

		let i = 1

		$(".case-overview-grid > a:visible").each(function(){
			
			$(this).attr("data-order", i)
			i++
			
		});
	});

}

function setupArticles(){

	if(!$("body").hasClass("single")){
		return false;
	}

	setupHeaderOnCases();      

}

function setupHeaderOnCases(){

	UIkit.scrollspy(".single-case .page-header-holder", { repeat: true });

	UIkit.util.on(document, "inview", ".single-case .page-header-holder", function() {
		$("body").removeClass("menu-white-bg");
	});

	UIkit.util.on(document, "outview", ".single-case .page-header-holder", function() {
		$("body").addClass("menu-white-bg");
	});

}

// function reOrderTarievenLink(){

// 	$("#inner-header .nav.wp-nav li.tarieven-special").detach().appendTo("#inner-header ul.nav.dropdown-nav");
// 	$("#inner-header .nav.wp-nav li.klanten-special").detach().appendTo("#inner-header ul.nav.dropdown-nav");

// }

// function setupDesktopMenu(){

// 	// MAKE RESOURCES UNCLICKABLE
// 	$( "body .nav.dropdown-nav" ).on("click", "li:nth-child(4) a.foldout_link", {  }, function(event){
// 		event.preventDefault();
// 		return false;
// 	});

// 	// // MAKE OVER ONS UNCLICKABLE
// 	$( "body .nav.dropdown-nav" ).on("click", "li:nth-child(5) a.foldout_link", {  }, function(event){
// 		event.preventDefault();
// 		return false;
// 	});

// 	// re-order the Tarieven link
// 	reOrderTarievenLink();

// }

function init(){

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("body").addClass("mobile");
	}else{
		$("body").addClass("not_mobile");
	}

	makeDropdownListLanguages();

	setupCaseSliders();

	setupModalVideos();

	setupVideoHolders();

	setupStickyScroll();

	setupPeopleLinks();

	// setupHamburger();

	setupArticles();

	setupFilterOnArchives();

	// setupDesktopMenu();

	fitvids(".single article.post");

	if($(".block-related-blogposts").length > 0){
		relatedBlogModule.setupRelatedBlogposts();
	}

	if($("body").hasClass("page-template-page-prices")){
		pricePageModule.setupPriceCalculator();
	}

	contactFormModule.init();

	mMenuModule.setupMMenu();

}

// module.exports = { init }

export { init }
