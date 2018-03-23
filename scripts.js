$(function(){
	
	var carouselList = $('#carousel ul'),
		interval;

	var LEFT_DIRECTION = "left",
		RIGHT_DIRECTION = "right";

	function changeSlide(direction) {
		var currentIndex = $('#pagination li').index($('#pagination li.active')),
			nextIndex = currentIndex;

		switch (direction) {
			case LEFT_DIRECTION:
				if (currentIndex === 0) {
					nextIndex = $('#pagination li').length - 1;
				} else {
					nextIndex--;
				}
				moveLastSlide();
				carouselList.animate({'marginLeft': 0}, 500);
				break;
			case RIGHT_DIRECTION:
				if (currentIndex === $('#pagination li').length - 1) {
					nextIndex = 0;
				} else {
					nextIndex++;
				}
				carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
				break;
		}		

		$('#pagination li').removeClass('active').eq(nextIndex).addClass('active');
	}

	interval = setInterval(function() {
		changeSlide(RIGHT_DIRECTION);
	}, 2000); //every 2 seconds, it performs a function to change the slide

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({marginLeft:0});
	}

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		
		firstItem.before(lastItem);

		carouselList.css({marginLeft:-400});
	}

	function createDots() {
		var liElementsQty = carouselList.find('li').length,
			dots = [];

		for (var i = 0; i < liElementsQty; i++) {
			dots.push($('<li>'));
		}

		dots[0].addClass('active');

		$('#pagination').append(dots);
	}

	createDots();

	$('#next').click(function() {
		changeSlide(RIGHT_DIRECTION);
	});

	$('#prev').click(function() {
		changeSlide(LEFT_DIRECTION);
	});

	$('#carousel').hover(
		function() {
			clearInterval(interval);
		},
		function() {
			interval = setInterval(function() {
				changeSlide(RIGHT_DIRECTION);
			}, 2000); 
		}
	);
});