//---Subscribes to the user collection publication---
Meteor.subscribe("userData");
// --------------------------------------------------

// ---Handles main profile page---
// ---Add anything here related to the main profile page---
Template.profile.helpers({
    userEmail: function() {
        //console.log(Meteor.user().emails[0]);
        return Meteor.user().emails[0].address;
    },
    userFirstName: function() {
        // console.log(Meteor.user());
        return Meteor.user().profile.userFirstName;
    },
    userLastName: function() {
        return Meteor.user().profile.userLastName;
    }
});
// -------------------------------

// ---Handles edit profile page---
// ---Add anything here related to the edit profile page---
Template.editProfile.helpers({
    userEmail: function() {
      console.log(Meteor.user());
        return Meteor.user().emails[0].address;
    }
});

Template.editProfile.events({
  "click #edit-profile-button": function(event) {
    event.preventDefault();

    var userProfileObject = {};
    // ----Corresponds with Profile Page and ERD for User---
    var userProfileDataFields = ['userEmail', 'userFirstNAme', 'userLastName', 'userGender', 'userAge', 'userState', 'userZipCode'];
    // -----------------------------------------------------
    var userProfileDataArray = $(".profile-content-edit").children().find('input');
    console.log(userProfileDataArray);
    console.log(userProfileDataArray.length);

    var currentUserId = Meteor.userId();

    // Meteor.users.update(currentUserId,  )
  }
});
// -------------------------------
