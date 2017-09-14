	$("#xiang-top").load("public1.html #top");
	$("#xiang-head").load("public1.html #heade");
	$("#xiang-ban").load("public1.html #ban");
	$("#xiang-friendship").load("public1.html #friendship");
	$("#xiang-footer").load("public1.html #footer");
	$("#xiang-cebian").load("public1.html .publish-ce-ul",function(){
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