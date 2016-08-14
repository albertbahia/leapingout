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
    },
    "files": function() {
      return S3.collection.find();
    }
});

Template.editProfile.events({
    // 'change #file-input': function(e) {
    //     var user = Meteor.user();
    //     FS.Utility.eachFile(e, function(file) {
    //         var newFile = new FS.File(file);
    //
    //         newFile.username = user.username;
    //         newFile.userId = user._id;
    //         console.log(newFile);
    //         Images.insert(newFile, function(error, fileObj) {
    //             if (error) {
    //                 toastr.error("Upload failed... please try again.");
    //             } else {
    //                 toastr.success('Upload succeeded!');
    //                 console.log(fileObj);
    //                 console.log(Meteor.settings);
    //             }
    //         });
    //     });
    // }
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

// Template.s3_tester.events({
//
// });
//
// Template.s3_tester.helpers({
//
// });
// ----------------------------