Meteor.subscribe("userData");

// ---------View Profile---------
Template.profile.helpers({
    userEmail: function() {
        //console.log(Meteor.user().emails[0]);
        return Meteor.user().emails[0].address;
    },
    userFirstName: function() {
        console.log(Meteor.user());
        return Meteor.user().profile.userFirstName;
    },
    userLastName: function() {
        return Meteor.user().profile.userLastName;
    },
    userProfileImage: function() {
        return Meteor.user().profile.image_url
    },
		userGender: function() {
			return Meteor.user().profile.userGender
		}
});
// ------------------------------

// ---------Edit Profile---------
Template.editProfile.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    },
    userProfileImage: function() {
      return Meteor.user().profile.image_url;
    },
    "files": function() {
      return S3.collection.find();
    }
});

Template.editProfile.events({
    "click button.upload": function() {
      var files = $("input.file_bag")[0].files

      S3.upload({
        files: files,
        path: "Images" //subfolder for the leaping S3 bucket
      }, function(error,response) {
        if (error) {
          throw error;
        } else {
          console.log(response.secure_url);
          console.log(Meteor.user().profile.image_url);
          Meteor.users.update(Meteor.userId(), {$set: {"profile.image_url": response.secure_url}})
        }

      })
    }
});
