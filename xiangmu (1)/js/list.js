	$("#list-top").load("public1.html #top");
	$("#list-head").load("public1.html #heade");
	$("#list-ban").load("public1.html #ban");
	$("#list-friendship").load("public1.html #friendship");
	$("#list-footer").load("public1.html #footer");
	$("#list-cebian").load("public1.html .publish-ce-ul",function(){
		$(".shopp-d1").hover(function(){
		$(".publish-ce-shopping").show();
		},function(){
			$(".publish-ce-shopping").hide();
		})
		
		$(".publish-ce-ul li").eq(1).hover(function(){
			$(".publish-ce-shopping2").show();
		},function(){
			$(".publish-ce-shopping2").hide();
		})
		
		$(".publish-ce-ul li").eq(2).hover(function(){		
			$(".publish-ce-shopping3").show();
	
		},function(){
			$(".publish-ce-shopping3").hide();
		})
		
		$(".publish-ce-ul li").eq(3).hover(function(){		
			$(".publish-ce-shopping4").show();
	        $(".publish-ce-shopping4").click(function(){
				$("body").animate({"scrollTop":"0"},1000) 
			})
		},function(){
			$(".publish-ce-shopping4").hide();
		})
	});
	
//  倒计时jquery
	function gettime( t ){
				if(t<10){
				    return	t="0"+t;
				}else{
					return t;
				}
			}	
				
			function daotime(){
				var end = new Date("2017-9-18 00:00:00");
				var now = new Date();
				var t = parseInt( end.getTime()-now.getTime() )/1000;
				var d = parseInt(t/60/60/24);
				var h = parseInt(t/60/60%24);
				var m = parseInt(t/60%60);
				var s = parseInt(t%60);
				return `距结束仅剩<span>${gettime(d)}</span>天<span>${gettime(h)}</span>时<span>${gettime(m)}</span>分<span>${gettime(s)}</span>秒`
			}
			var timego =setInterval(function(){
				$("#timego").html( daotime() )
			},1000)