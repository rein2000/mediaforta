let $ = jQuery;

import "../../plugins/mmenu-light/dist/mmenu-light.js";

function setupMMenu(){

	const MmenuLight = window.MmenuLight;

	var menu = new MmenuLight(document.querySelector("#mmenu"), "(max-width: 1420px)");

	menu.navigation({
		// selectedClass: 'Selected',
		// slidingSubmenus: true,
		// theme: 'dark',
		// title: 'Menu'
	});

	var drawer = menu.offcanvas({
		// position: 'left'
	});

	$(".hamburger").click(function(e){

		e.preventDefault();

		if($("body").hasClass("mm-ocd-opened")){

			// $(this).removeClass("is-active")

			drawer.close();

		}else{

			// $(this).addClass("is-active")

			drawer.open();
	
		}

	});

}

export { setupMMenu }