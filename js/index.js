
window.onload = function(){
	var index = 0;
	var aa = new autoplay();
	aa.init();
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
					
		//新闻栏样式操作
				$(".box2 p").hover(function(){
					$(this).css({"height":"70px","fontWeight":"900"}).siblings().css({"height":"45px","fontWeight":"500"});
					var index = $(this).index()
					$(this).parents(".box2").find("img").css("display","none")
					$(this).parents(".box2").find("img").eq(index).css("display","block");
				},function(){
					$(this).parents(".box2").find("img").css("display","none")
					$(this).parents(".box2").find("img").eq(0).css("display","block");
					$(this).parent().find("p").eq(0).css({"height":"70px","fontWeight":"900"}).siblings().css({"height":"45px","fontWeight":"500"});
				})

             //食谱轮播
// 			var timer = null,
// 			    index = 0,
// 				$dc = $(".dc"),
// 				$dc1 = $dc.children(".dc1"),
// 				$dw = $dc1.width();
// 			
// 			timer = setInterval(autoplay,3000);
// 			function autoplay(){
// 				index ++;
// 				if(index == 5){
// 					index = 1;
// 					$dc.css("left","0");
// 					
// 				}
// 				$dc.css("left","-$dw*index");
// 			}
			//console.log($dc.css())
			 function autoplay(){
				 this.dc = document.getElementsByClassName("dc");
				 this.dc1 = document.getElementsByClassName("dc1");
				 this.dWidth = this.dc1[0].offsetWidth;
				
				 timer = null;
				 this.init = function(){
					timer = setInterval(this.play.bind(this),3000);
				    for(let i = 0 ; i < this.dc1.length;i ++){
					 this.dc1[i].onmouseenter = function(){
						 clearInterval(timer);
					 }.bind(this);
					 this.dc1[i].onmouseleave = function(){
						timer = setInterval(this.play.bind(this),3000); 
					 }.bind(this);
				 }
				 }
				 this.play = function(){
					 index++;
					 if(index == 5){
						 this.dc[0].style.left = 0;
						 index = 1;
					 }
					 startMove(this.dc[0],{left:-this.dWidth*index});
				 console.log(this.dWidth,index)
				 }   		 	 
			}	
			 
			 
			}
		
		

