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
		 var user = Meteor.user();	
      FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
		
		newFile.username = user.username;
        newFile.userId = user._id;
        
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

/* Template.editprofile.created = function() {
  var self = this;

  self.limit = new ReactiveVar;
  self.limit.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  Tracker.autorun(function() {
    Meteor.subscribe('images', self.limit.get());
  });
}

Template.editprofile.rendered = function() {
  var self = this;
  // is triggered every time we scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit(self);
    }
  });
}

Template.editprofile.helpers({
  'images': function() {
    return Images.find();
  }
}); 

var incrementLimit = function(templateInstance) {
  var newLimit = templateInstance.limit.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limit.set(newLimit);
} */