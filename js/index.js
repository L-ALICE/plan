
window.onload = function(){
	var index = 0;
	var aa = new Autoplay();
	aa.init();
	var bb = new Tj();
	bb.init();
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
			 console.log(1);
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
			 function Autoplay(){
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
			 //推荐轮播
			 function Tj(){
			 	//h2所对应的div
			 	this.tui = document.getElementById("tui");
			 	//5000px的div
			 	this.tbi = document.getElementById("tbi");
			 	//图片对应的div
			 	this.bs = document.getElementsByClassName("bs");
			 	//console.log(this.bs);
			 	//左按钮
			 	this.leftBtn = document.getElementById("btn_l");
			 	//右按钮
			 	this.rightBtn = document.getElementById("btn_r");
			 	index = 0,
			 	time = null ;
			 	this.init = function(){
			 		this.row();
			 		this.row1();
			 		this.pic();
			 		this.slide();
			 	
			 	}
			 //自动轮播
																		 this.slide = function(){
																			 var left = 0;													var time = setInterval(function(){
						left --;													this.tbi.style.left = left + "px";								if(left < -1650){
						  left = 0;														 }													 }.bind(this),10) 
			}
			  //鼠标操作图片 移入 高亮 离开 恢复透明度50
				 this.pic = function(){
					 for(let i = 0 ; i < this.bs.length ; i ++){
						 this.bs[i].onmouseenter = function(){
							 startMove(this.bs[i],{opacity:100});
							
						 }.bind(this);
						 this.bs[i].onmouseleave = function(){
							 if(index != i){
								 startMove(this.bs[i],{opacity:50});
							 }
							 
						 }.bind(this);
					 }
				 }
				 //鼠标移入移出箭头显示
				 this.row = function(){
					 this.tbi.onmouseenter = this.leftBtn.onmouseenter = this.rightBtn.onmouseenter = function(){
					 startMove(this.leftBtn,{opacity:100});
					 startMove(this.rightBtn,{opacity:100}); 
					 }.bind(this);
				 }
				 //鼠标移出箭头隐藏
				 this.row1 = function(){
					 this.tbi.onmouseleave = function(){
						startMove(this.leftBtn,{opacity:0});
						startMove(this.rightBtn,{opacity:0});  
					 }.bind(this);
				 }
				 //点击左侧箭头 index--
				 this.left = function(){
					 this.leftBtn.onclick = function(){
						 if(target == 0){
							 target = 0;
						 }else{
							 target += 330;
						 }
						 startMove(this.tbi,{left:target});
					 }.bind(this);
				 }
				 //点击右侧箭头 index ++
				 this.right = function(){
					 this.rightBtn.onclick = function(){
					 	if(target == -330*10){
					 		target = -330*10;
					 	}else{
					 		target -= 330;
					 	}
					 	startMove(this.tbi,{right:target});
					 }.bind(this);
				 }
				 
			 }
			 
			
		}
		

