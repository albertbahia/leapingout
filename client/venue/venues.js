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
					 venueLatLong: formVenueData[0][4].value,
					 venuePopularityRating: 0,
					 venueCountry: formVenueData[0][5].value,
					 venueEventIds: [],
					 venueCreatorId: currentUserId,
					 venueCreatedAt: Date.now(),
					 venueProfileImageUrl: "/images/default-venue-profile-image.jpg",
					 user: {
						currentUser: currentUser		 	
					 }
				 };

		 Meteor.call("createVenue", venueData, function(err, res) {
			 if (err) {
			 	console.log(err);
			 } else {
				 //console.log(res);
				 console.log("success!");
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
