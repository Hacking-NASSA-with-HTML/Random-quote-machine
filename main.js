$(document).ready(function() {
	getQuote();
					$("#newQuote").on("click", function() {
						getQuote();
					});
});

function getQuote() {

	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
					$.getJSON(url, function(data){
								    $(".quote").html('"'+data.quoteText+'"'); 
								    $(".quote-author").html("-"+data.quoteAuthor);


					$("#twit").on("click", function(){
				      			$(this).attr("href", "https:twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor);
					});
	});

}
















