
// JQuery Function begins here
// $(document).ready(function(){

//     $('.menu-link').on('click', function(){
//         $('.menu-link').removeClass('is-active');
//         $(this).addClass('is-active');
//     });
  
// });

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