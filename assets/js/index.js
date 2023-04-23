// This code for nav bar menus

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove("is-active");
		});
		link.classList.add("is-active");
	});
});
// nav bar menus Code end

// This function for swiper in home section
var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true
});
// swiper Code end

// Menu List Tabs Jquery
$(document).ready(function(){
	$('.tamil').hide()
// class="nav-link active" data-toggle="tab"
	$('.nav-link[data-food^="veg"]').click(function(){
	
		$('.nav-link[data-food^="veg"]').removeClass('active');
		$(this).addClass('active');
		changeVegTabPane($(this).attr('data-ref'));

	});

	function changeVegTabPane(refEelement){
		$('.tab-pane[data-veg_tab_pane^="veg_tab_pane"]').removeClass('active');
		$('.tab-pane[id^="'+refEelement+'"]').addClass('active');
	}

	$('.nav-link[data-food^="non_veg"]').click(function(){
	
		$('.nav-link[data-food^="non_veg"]').removeClass('active');
		$(this).addClass('active');
		changeNonVegTabPane($(this).attr('data-ref'));

	});

	function changeNonVegTabPane(refEelement){
		
		$('.tab-pane[data-non_veg_tab_pane^="non_veg_tab_pane"]').removeClass('active');
		$('.tab-pane[id^="'+refEelement+'"]').addClass('active');

	}


	$('.nav-link[data-food^="gravy"]').click(function(){
		$('.nav-link[data-food^="gravy"]').removeClass('active');
		$(this).addClass('active');
		changeVegNonVegGravyTabPane($(this).attr('data-ref'));

	});

	function changeVegNonVegGravyTabPane(refEelement){
		
		$('.tab-pane[data-veg_non_veg_gravy_tab_pane^="veg_non_veg_gravy_tab_pane"]').removeClass('active');
		$('.tab-pane[id^="'+refEelement+'"]').addClass('active');

	}

	/*-------------------- Switch Font family ------------------------- */
	$('#switch_lang').click(function(){

		if($(this).val() == 1){
			$('.tamil').hide()
			$('.english').show()
			$('.switch_name').text('Tamil')
			$(this).val("0")
		}else{
			$('.tamil').show()
			$('.english').hide()
			$(this).val("1")
			$('.switch_name').text('English')
		}
	});

	// Menu bar JQuery
	const hamburger = document.querySelector(".hamburger");
	const navLinks = document.querySelector(".nav-links");
	const links = document.querySelectorAll(".nav-links li");

	hamburger.addEventListener('click', ()=>{
		//Animate Links
		navLinks.classList.toggle("open");
		links.forEach(link => {
			link.classList.toggle("fade");
		});

		//Hamburger Animation
		hamburger.classList.toggle("toggle");
	});

	$('.mobile_menu').click(function(){
		if($('.mobile_menu').hasClass('fade')){
			$('.mobile_menu').removeClass('fade');
			$('.nav-links').removeClass('open');
			$('.hamburger').removeClass('toggle');
		}
	});
	
});
