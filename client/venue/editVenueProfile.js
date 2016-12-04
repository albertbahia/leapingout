Template.editVenueProfile.events({
  "click button#venue-update-button": function(event) {
    event.preventDefault();

    let formVenueData = document.getElementsByClassName("venue-form");
    // console.log(formVenueData[0][0].value);

    let venueData = {
      venueId: formVenueData[0][0].value,
      venueName: formVenueData[0][1].value,
      venueProfileImageUrl: $(".venue-profile-img").attr("src")
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
  },
  "click button.upload": function() {
    let files = $("input.file_bag")[0].files;
    let formVenueData = document.getElementsByClassName("venue-form");

    S3.upload({
      files: files,
      path: "venue_images" //subfolder for the leaping out s3 bucket
    }, function(err, res) {
      if (err) {
        throw error;
      } else {
        console.log(res.secure_url);
        let venueData = {
          venueId: formVenueData[0][0].value,
          venueName: formVenueData[0][1].value,
          venueProfileImageUrl: res.secure_url
        }

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
      }
    });
  }
});
