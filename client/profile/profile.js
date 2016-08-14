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
    }
});

Template.editProfile.events({
    'change #file-input': function(e) {
        var user = Meteor.user();
        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);

            newFile.username = user.username;
            newFile.userId = user._id;
            console.log(newFile);
            Images.insert(newFile, function(error, fileObj) {
                if (error) {
                    toastr.error("Upload failed... please try again.");
                } else {
                    toastr.success('Upload succeeded!');
                    console.log(fileObj);
                    console.log(Meteor.settings);
                }
            });
        });
    }
});
// ----------------------------