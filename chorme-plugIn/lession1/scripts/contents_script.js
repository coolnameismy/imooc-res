(function(){
	var greeting = "您好啊，";
	var button = document.getElementById("mybutton");
	button.person_name = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	button.addEventListener("click", function() {
	  console.log(greeting + button.person_name + "。");
	}, true);
})()
