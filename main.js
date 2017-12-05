$(document).ready(function() {
	var str = "";
	var arr = [];
	var answer = 0;
		
	
	$("#clear").on("click", function() {
		arr = [];
		$("#input").html(0);
		str = "";
		$("#output").html(0);
	});
	
	$("#back").on("click", function() {
		if (arr.length > 1) {
			arr.pop();
			$("#input").html(arr);
		} else if (arr.length === 1) {
			arr = [];
			$("#input").html(0);
		}
	});
	
	
	
	$("button").on("click", function() {
		var val = $(this).text();
		if (val !== "=") {
		  arr.push(val);
		  $("#input").html(arr);
		} else {
			str = arr.join("");			
			answer = eval(str);     
			if (answer % 1 !== 0) {
				$("#output").html(answer.toFixed(10));
			} else {
				$("#output").html(answer);
			}
		}
	});
	

});