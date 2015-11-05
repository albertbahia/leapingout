Meteor.subscribe("userData");

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
    }
});

Template.editProfile.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    }
});

Template.editProfile.events ({
'change #file-input' : function(e) {
      FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
            toastr.success('Upload succeeded!');
			console.log(Meteor.settings);
          }
      });
    });
  }	
	
	
	
});