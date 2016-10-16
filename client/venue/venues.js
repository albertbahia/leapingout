Template.createVenue.events({
   "click #create-venue" : function(event) {
       event.preventDefault();

		 var formVenueData = document.getElementsByClassName("new-venue");
		 var currentUserId = Meteor.userId(),
		 		 currentUser = Meteor.user(),
		 		 venueData = {
					 venueName: formVenueData[0][0].value,
					 venueStreetAddress: formVenueData[0][1].value,
					 venueCity: formVenueData[0][2].value,
					 venueState: formVenueData[0][3].value,
					 venueCountry: formVenueData[0][5].value
				 };

		 Meteor.call("createVenue", { 
				 venueData: venueData
			 }, function(err, res) {
				 if (err) {
					console.log(err);
			 } else {
				 console.log("venue sent succesfully");
			 }
		 });

       //---Clear form input fields
       for (var i = 0; i < formVenueData[0].length; i++) {
           formVenueData[0][i].value = "";
       }

       //---Prevent default form submit
       return false;
   }
});
