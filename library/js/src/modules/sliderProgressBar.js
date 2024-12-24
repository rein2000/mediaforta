let $ = jQuery;
import UIkit from "../../plugins/uikit/js/uikit.min.js";

let progressBar;
let shownSlide;
let aantalSlides = 0;

function _setPos(el, shownSlide, aantalSlides){

	// let p = shownSlide / aantalSlides * 100;
	let w = 100 / aantalSlides * (shownSlide + 1);

	el.css({
		// "left" : p.toString() + "%",
		"width" : w.toString() + "%"
	})
}

function setupAllProgressBars(){

	$(".people-block-ontdek").each(function(){
		let id = $(this).attr("id");
		setupProgressBar(id);
	})

}

function setupProgressBar(sliderBlockID){

	aantalSlides = $("#"+sliderBlockID+" .uk-slider-items > li").length;
	progressBar = $("#"+sliderBlockID+" .slider-progress-holder .slider-progress-bar");

	$("#"+sliderBlockID).attr("aantalSlides", aantalSlides);
	$("#"+sliderBlockID).attr("shownSlide", 1);

	_setPos(progressBar, 0, aantalSlides);

	// UIkit.util.on("#"+sliderBlockID+" .uk-slider", "itemshown", function(e, b) {
	
	UIkit.util.on(document, "itemshown", "#"+sliderBlockID+" .uk-slider", function(e, b) {

		shownSlide = b.index;
		progressBar = $("#"+sliderBlockID+" .slider-progress-holder .slider-progress-bar");

		_setPos(progressBar, shownSlide, aantalSlides);

	});

}

export { setupAllProgressBars }