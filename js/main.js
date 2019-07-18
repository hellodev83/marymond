$(function(){
	var w;
	var h;

	$(window).resize(function(){
		w=$(this).width();

		if(w >= 760){
			$(".dim").trigger("click");
		}
		if(w < 920){
			h=200;
		}
		else if(w < 1070){
			h=290;
		}
		else{
			h=376;
		}
	})
	$(window).trigger("resize");

	$(".gnb_wrap > ul > li").mouseenter(function(){
		$(this).find(".sub").css({display:"block", height:0})
								.animate({height:h}, 400);
	});
	$(".gnb_wrap > ul > li").mouseleave(function(){
		$(this).find(".sub").stop()
								.animate({height:0}, 400, function(){
									$(this).hide();
								});
	});
	$(".gnb_wrap > ul > li").focusin(function(){
		$(this).addClass("active");
		$(".gnb_wrap .sub").css({display:"none", height:0});
		$(this).find(".sub").css({display:"block", height:h});
	});
	$(".gnb_wrap > ul > li").focusout(function(){
		$(this).removeClass("active");
	});
	$(".gnb_wrap > ul > li:last-child").find("li:last-child").focusout(function(){
		$(".gnb_wrap .sub").css({display:"none", height:0});
	});
	$(".tab").click(function(){
		$("body, html").addClass("prevent");
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
	});
	$(".dim").click(function(){
		$("body, html").removeClass("prevent");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");

		if($("#mobile .mobile_inner > ul > li").hasClass("active") == true){
			$("#mobile .mobile_inner > ul > li").removeClass("active");
			$(".sub").removeClass("active");
		}
	});
	$("#mobile .mobile_inner > ul > li").click(function(e){
		e.preventDefault();
		if($("#mobile .mobile_inner > ul > li").hasClass("active") == false){
			$("#mobile .mobile_inner > ul > li").removeClass("active");
			$(this).addClass("active");
			$(".sub").removeClass("active");
			$(this).find(".sub").addClass("active");
		}else{
			$("#mobile .mobile_inner > ul > li").removeClass("active");
			$(".sub").removeClass("active");
		}
	});

	$(".mobile_inner").slimscroll({
		height: "100%"
	});

	var $owl1=$("#carousel1");

	$owl1.owlCarousel({
		margin: 1,
		autoplay: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	var $owl2=$("#carousel2");

	$owl2.owlCarousel({
		margin: 1,
		autoplay: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			}
		}
	});

	var video=document.getElementById("my_video");

	$("#toggle").click(function(e){
		e.preventDefault();
		video.play();
		$(this).fadeOut(300);
	});
	$("#my_video").click(function(){
		video.pause();
		$('#toggle').fadeIn(300);
	});
	video.addEventListener("ended", function(){
		$("#toggle").fadeIn(300);
		video.pause();
		video.currentTime=0;
	});
});