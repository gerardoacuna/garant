(function($){

	$(function() {
	  $("form").submit(function(){
	    $('#result').empty();
	    $('#result').append('<img src="img/loader.gif" alt="Sending" id="loading"/>');
			$.post($(this).attr("action"), $(this).serialize(), AjaxFormReturn)
			return false
		});
		
		AjaxFormReturn = function(responseHtml)
		{
			$('#loading').fadeOut(500, function() {
				$('#result').empty();
				$('#result').append(responseHtml).fadeIn(500);
				if(responseHtml == '<p class="success">Mensaje enviado. Gracias por contactarnos.</p>'){
					$('#name').removeAttr("value");
					$('#email').removeAttr("value");
					$('#message').removeAttr("value");
					$('#service').removeAttr("value");
				}
			})
		}
	});
})(window.jQuery);