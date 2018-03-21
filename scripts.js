$(function(){
	
	var carouselList = $('#carousel ul');

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};

	setInterval(changeSlide, 2000); //every 2 seconds, it performs a function to change the slide

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	};


});