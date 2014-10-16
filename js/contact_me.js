$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            }
			
			
			$.ajax({
			    url: "//forms.brace.io/you@email.com", 
			    method: "POST",
			    data: {
					name: name,
                    email: email,
                    message: message
				},
			    dataType: "json"
			});
			
});