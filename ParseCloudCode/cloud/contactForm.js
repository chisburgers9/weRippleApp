
/* global Parse,console,require */

var Mailgun = require('mailgun');

var mgDomain = "";
var mgAPIkey = "";

Mailgun.initialize(mgDomain, mgAPIkey);

Parse.Cloud.beforeSave("CommentObject", function(request, response) {

	var text = "Comment Email\n" + 
		"From: "+request.object.get("name") + "\n"+
		"Email: "+request.object.get("email") + "\n"+
		"Comments:\n" + request.object.get("comments");
	
	Mailgun.sendEmail({
			to: "chisburgers9@gmail.com",
			from: request.object.get("email"),
			subject: "WeRipple Comment",
			text: text
		}, {
		success: function(httpResponse) {
			response.success();
		},
		error: function(httpResponse) {
			console.error(httpResponse);
			response.error("Uh oh, something went wrong");
		}
	});

});
