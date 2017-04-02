Meteor.methods ({

	sendFeedback : function(feedback) {


		console.log('sendFeedback' );

	

	Feedback.insert ({


		feedbackText: feedback.feedbackData.feedbackText

		});


	return;

	}


});


