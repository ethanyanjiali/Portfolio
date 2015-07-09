/*
*	Main Js for Yanjia Li's portfolio
*	Created on July 2015
*	Author Yanjia Li
*/

// Variables
var captionTimer;
var data = {};
var cache = {};
// Popup Menu JS
$("#aboutPop").click(function(){
	$(window).unbind('scroll');
	$(".popup").css("display","none");
	menuOn = false;
	$("#content").load("/about",data);
});

$("#projectsPop").click(function(){
	$(window).unbind('scroll');
	$(".popup").css("display","none");
	menuOn = false;
	$("#content").load("/projects",data);
});

$("#skillsPop").click(function(){
	$(window).unbind('scroll');
	$(".popup").css("display","none");
	menuOn = false;
	$("#content").load("/skills",data);
});

$("#smalllogo").click(function(){
	$(window).unbind('scroll');
	$(".popup").css("display","none");
	menuOn = false;
	$("#content").load("/home",data);
});

$("#contactPop").click(function(){
	$(".popup").css("display","none");
	menuOn = false;
	showContact();
});

//Nav Bar
$("#aboutIcon").click(function(){
	$(window).unbind('scroll');
	$("#content").load("/about",data);
});

$("#projectsIcon").click(function(){
	$(window).unbind('scroll');
	$("#content").load("/projects",data);
});

$("#skillsIcon").click(function(){
	$(window).unbind('scroll');
	$("#content").load("/skills",data);
});

$("#close").click(function(){
	var flyOut = $(window).height()*0.7;
	$("#mail").css({
		"-webkit-transform":"translate(0,"+flyOut+"px)",
		"transform":"translate(0,"+flyOut+"px)",
		"opacity":"0",
		"visibility":"hidden",
	})
	setTimeout(function(){
		$("#main").css({
			"-webkit-transform":"scale(1,1)",
			"transform":"scale(1,1)",
			"-webkit-filter": "blur(0px)",
		    "-moz-filter": "blur(0px)",
		    "-o-filter": "blur(0px)",
		    "-ms-filter": "blur(0px)",
		    "filter": "blur(0px)"
		});
		$("body").css({
			"overflow":"visible"
		});
		$("#contact").css({
			"opacity":"0",
			"visibility":"hidden"
		});
		$("#mail").css({
			"display":"none"
		})
	},300)
})
function showContact(){
	var flyIn = $(window).height()*0.7;
	$("#contact").css({
			"opacity":"0.8",
			"visibility":"visible"
		})
	$("#main").css({
		"-webkit-transform":"scale(0.9,0.9)",
		"transform":"scale(0.9,0.9)"
	});
	$("#mail").css({
		"display":"block"
	})
	setTimeout(function(){
		$("#main").css({
		"-webkit-filter": "blur(15px)",
	    "-moz-filter": "blur(15px)",
	    "-o-filter": "blur(15px)",
	    "-ms-filter": "blur(15px)",
	    "filter": "blur(15px)"
		})
		$("body").css({
			"overflow":"hidden"
		});
		setTimeout(function(){
			$("#mail").css({
				"-webkit-transform":"translate(0,-"+flyIn+"px)",
				"transform":"translate(0,-"+flyIn+"px)",
				"opacity":"1",
				"visibility":"visible",
			})
		},200)
	},100)
}
$("#contactIcon").click(function(){
	showContact();
});

$("#yanjiaIcon").click(function(){
	$(window).unbind('scroll');
	$("#content").load("/home",data);
});

var isLike = false;
var liked = false;
function startLoader(){
	if(!isLike){
		$(".footer").css({
			"display":"none"
		});
		$(".loaderContainer").css({
		"visibility":"visible"
		})
		// $body.css({
		// 	"overflow":"hidden"
		// })
		$(".loader").css({
			// "transform":"translate(0px,-200px)",
			"visibility":"visible",
			"opacity":1
		})
		$(".contentContainer").css({
		    "opacity":0
		 });
	}
}
$body = $("body");
$(document).on({
	ajaxStart: startLoader,
    ajaxStop: function() {
    	if(!isLike){
    		setTimeout(function(){
		    	$(".loader").css({
		    		// "transform":"translate(0px,200px)",
		    		"visibility":"hidden",
		    		"opacity":0
		    	})
		    	setTimeout(function(){
		    		// $body.css({
		    		// 	"overflow":"visible"
		    		// });
		    		$(".loaderContainer").css({
	    				"visibility":"hidden"
		    		});
		    		$(".footer").css({
		    			"display":"block"
		    		});
		    		$(".contentContainer").css({
		    			"opacity":1
		    		});
		    	},300);
    		},800);
    	} else {
    		isLike = false;
    	}
    }    
});

$("#like").click(function(){
	if(liked){
		alert("Thanks. You liked it.");
	} else {
		isLike = true;
		liked = true;
		$.get("/like", function(data){
			var likes = data.likes - 1;
			$("#like").html("<span class='likes'>&nbsp;"+likes+"&nbsp;</span>&nbsp;&nbsp;People Liked It!");
		});
	}
})

var menuOn = false;
$(".menu").click(function(){
	if(!menuOn){
		$(".popup").css({
			"display":"block"
		})
		menuOn = true;
	} else {
		$(".popup").css("display","none");
		menuOn = false;
	}
	
})