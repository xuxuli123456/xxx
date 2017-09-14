$("#head").load("public1.html #header");
$("#friendship").load("public1.html #friendship");
$("#footer").load("public1.html #footer");

//验证信息的拖拽
$("#zhuai1").mousedown(function(e){
		var e = e||event;
		var l = e.offsetX;
		var t = e.offsetY;
		var ol;
		$(document).mousemove(function(e){
			var e = e||event;
			ol = e.pageX-$("#form").offset().left-31;
			if(ol <= 0){
				ol = 0;
			}
			if(ol >= $("#form-bottom").width()-31){
				ol = $("#form-bottom").width()-31;
				$("#form-bottom i").css({"width":$("#form-bottom").width(),
				    "color":"#ffffff"})
				           .html("验证成功");
				$("#zhuai1").html("ok");
			    }
			$("#zhuai1").css("left",ol);
			$("#form-bottom i").css({"width":ol,
			    "background":"#7ac23c"
		})
			
			$(document).mouseup(function(){
				$(document).off();	
				if(ol < $("#form-bottom").width()-31){
					$("#zhuai1").animate({"left":"0"},300);
					$("#form-bottom i").animate({"width":"0"},300)
				}
			})
			
		})
	})