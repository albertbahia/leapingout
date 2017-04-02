Template.hotspots.onCreated(function() {

});

Template.hotspots.onRendered(function() {

});

Template.hotspots.onDestroyed(function() {

});

Template.hotspots.helpers({

});

Template.hotspots.events({
    'click #about-button': function(event) {
        event.preventDefault();
        Router.go('aboutUs');
    },

    'click #blog-button': function(event) {
        event.preventDefault();
        Router.go('blog');
    },

    'click #feedback-button': function(event) {
        event.preventDefault();
       // Router.go('feedback');


         console.log("feedback click");
        $('#feedbackModal').modal('show');
    },

     'click #send': function(event) {

       // var formVenueData = document.getElementsByClassName("feedbackBody");

         //console.log(formVenueData);

        console.log("feedback call");


        feedbackData = {

            feedbackText: $('#feedbackBody').val()



        };

        console.log(feedbackData);


         Meteor.call("sendFeedback", { 
                 feedbackData: feedbackData
             }, function(err, res) {
                 if (err) {
                    console.log(err);
             } else {
                 console.log("feedback sent succesfully");
             }
         });


         alert("Thank you for your feedback");

         //Router.go('feedbackConfirm');


        // $('#feedbackModal').modal('hide');

           // $('#feedbackConfirmModal').modal('show');
  
          


        //---Clear form input fields
    //   for (var i = 0; i < feedbackData[0].length; i++) {
     //    feedbackData[0][i].value = "";
      // }

     // $('#feedbackBody')[0].reset();

       //---Prevent default form submit
       return false;

     }    





});
