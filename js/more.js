window.onload = function(){
//     $(".i1").mouseover(function(){
// 		$(".mask").css("display","block");
// 		$(".big").css("display","block");
// 	}).mouseleave(function(){
// 		$(".mask").css("display","none");
// 		$(".big").css("display","none");
// 	})
	$(".i1").on({
		"mouseover":function(){
			$(".big").show();
			$(".mask").show();
		},
		"mouseout":function(){
			$(".big").hide();
			$(".mask").hide();
		},
		"mousemove":function(evt){
			var e = evt || event;
			var x = e.clientX - $(".sm").offset().left - $(".mask").width()/2;
			var y = e.clientY - $(".sm").offset().top - $(".mask").height()/2;
			
			var mx = $(".sm").width()  - $(".mask").width();
			var my = $(".sm").height()  - $(".mask").height();
			
			//边界处理
			x = x<=0 ? 0 : x>=mx ? mx : x;
			y = y<=0 ? 0 : y>=my ? my : y;
			
			//大图宽度/小图宽度 = 大图偏移 / mask的偏移
			var bigImageX = -x * $(".bigimg").width() / $(".i1").width();
			var bigImageY = -y * $(".bigimg").height() / $(".i1").height();
			$(".mask").css({
				"left":x + "px",
				"top":y+"px"
			})
			
			$(".bigimg").css({
				"left" : bigImageX+"px",
				"top" : bigImageY+"px"
			})
		}
	})
}