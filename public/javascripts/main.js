// Variables
var captionTimer;
var data = {};
var cache = {};
// Navigation Bar JS
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
$("#contactIcon").click(function(){
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
				"transform":"translate(0,-"+flyIn+"px)",
				"opacity":"1",
				"visibility":"visible",
			})
		},200)
	},100)
});

$("#yanjiaIcon").click(function(){
	$(window).unbind('scroll');
	$("#content").load("/home",data);
});

var isLike = false;
var liked = false;
function startLoader(){
	if(!isLike){
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