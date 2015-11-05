Template.signUp.events({
	'submit #signup-form' : function(e, t) {
		e.preventDefault();
		var email = t.find('#account-email').value, password = t.find('#account-password').value;

		Accounts.createUser({
				email: email,
				password: password
			}, function(err) {
				if (err) {
					// Inform the user that account creation failed
				} else {
					// Success.  Account has been created and the user has logged in successfully.
				}
			}
		);

		return false;
	}
});