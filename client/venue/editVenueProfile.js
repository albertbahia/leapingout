Template.editVenueProfile.events({
  "click button#venue-update-button": function(event) {
    event.preventDefault();

    let formVenueData = document.getElementsByClassName("venue-form");
    // console.log(formVenueData[0][0].value);

    let venueData = {
      venueId: formVenueData[0][0].value,
      venueName: formVenueData[0][1].value
    }
    console.log(venueData);

    Meteor.call("updateVenue", {
        venueData: venueData
      }, function(err,res) {
        if(err) {
          console.log(err);
        } else {
          console.log("venue data sent succesfully");
        }
      }
    );


    return false;
  }
})
