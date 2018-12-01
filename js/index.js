
window.onload = function(){
	//导航栏操作
	var $oo = $("#nav ul li"),
	    $olist = $(".pao"),
	    $odiv = $(".second");
		 $oo.hover(function(){
					var index = $(this).index()-1;
					$(this).css( "background" ,"#fafafa" ).siblings().css("background","");
				},function(){
					var index = $(this).index();
					$oo.eq(index).css('background',"");
				})
		 $olist.hover(function(){
					var index = $(this).index()-1;
					var flag = true;
					//根据下标操作对应的内容
					$odiv.eq(index).css({"display":"block"})
									.siblings()
									.css({"display":"none"})
				},function(){
					$odiv.css("display","none");
				})
		$odiv.hover(function(){
					$(this).css("display","block");
				},function(){
					$odiv.css("display","none");
				})

		//水果栏导航操作
				var $fulist = $(".oul li"),
				    $cons = $(".ta  .shui");
				    $fulist.mouseenter(function(){
						$(this).css({"background":"#ff3232","color":"#ffebc0"}).siblings().css({"background":"","color":"#667aa3"});
				$cons.eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");						
					})
			}
		
		

