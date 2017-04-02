import SimpleSchema from 'simpl-schema';

Feedback = new Mongo.Collection('feedback');




// Allows/Denys
Feedback.allow ({
  insert() {return false;},
  update() {return false;},
  remove() {return false;}
});

Feedback.deny ({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}

});


let FeedbackSchema = new SimpleSchema({


feedbackText: {

		type:String 

}





});


Feedback.attachSchema(FeedbackSchema);