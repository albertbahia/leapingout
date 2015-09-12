Meteor.startup(function() {
	// Let's override the default email sender
	Accounts.emailTemplates.from = 'Leaping Out <no-reply@leapingout.com>';

	// Public name of application
	Accounts.emailTemplates.siteName = 'Leaping Out';

	// A Function that takes a user object and returns a String for the subject line of the email.
	Accounts.emailTemplates.verifyEmail.subject = function(user) {
		return 'Confirm Your Email Address';
	};

	// A Function that takes a user object and a url, and returns the body text for the email.
	// Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
	Accounts.emailTemplates.verifyEmail.text = function(user, url) {
		return 'click on the following link to verify your email address: ' + url;
	};
});

Accounts.onCreateUser(function(options, user) {
	user.profile = {};

	// Wait for Meteor to create the user before sending an email
	Meteor.setTimeout(function() {
		Accounts.sendVerificationEmail(user._id);
	}, 2 * 1000);

	return user;
});