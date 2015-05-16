(function(){

	var buttonElement = document.querySelector("#makeAlert");
	buttonElement.addActionListener("click", clickActionHandler, true);

	function clickActionHandler(event) {
		alert("hello world");
	}
})();