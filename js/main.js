$("#rateSubmit").click(function() {

	var movieName = $("#movieInput")[0].value;
	var movieRate = $("#ratingInput")[0].options[ratingInput.options.selectedIndex].value;


	if(movieName) {
		$("#list").append("<h3>" + movieName + "</h3>");
		$("#list").append("<h3>" + movieRate + " stars</h3>");
	}
})