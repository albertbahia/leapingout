Template.header.events({
	'click #signup': function(e) {
		e.preventDefault();
		// alert('sign up!');
		Modal.show('signUpModal');
	}
});