/* global $,document,console */
$(document).ready(function() {

	// Initilizing 
	var parseAPPID = "";
	var parseJSID = "";

	Parse.initialize(parseAPPID, parseJSID);
		
	var CommentObject = Parse.Object.extend("CommentObject")

	$("#commentForm").on("submit", function(event) {
		event.preventDefault();

		console.log("Sending...");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.comments = $("#comments").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				alert("Thanks for reaching out. Someone will get back to you shortly!");
				$("#commentForm").trigger("reset");
			},
			error:function(error) {
				console.dir(error);
			}

		});
	});

	




	
});

