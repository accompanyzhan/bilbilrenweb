$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
		freeMode: false,
		observeParents: true,
		observer: true,
		direction: 'horizontal',
		slidesPerView: 1,

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},

	})
})