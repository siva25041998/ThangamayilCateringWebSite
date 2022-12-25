
// JQuery Function begins here
// $(document).ready(function(){

//     $('.menu-link').on('click', function(){
//         $('.menu-link').removeClass('is-active');
//         $(this).addClass('is-active');
//     });
  
// });
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove("is-active");
		});
		link.classList.add("is-active");
	});
});
