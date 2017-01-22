Meteor.methods({
    addEvent(event) {
        check(event, {
            title: String,
            start: String,
            end: String,
            type: String,
            guests: Number
        });

        try {
            return Calevents.insert(event);
        } catch (exception) {
            throw new Meteor.Error('500', `${exception}`);
        }
    },

    editEvent(event) {
        check(event, {
            _id: String,
            title: Match.Optional(String),
            start: String,
            end: String,
            type: Match.Optional(String),
            guests: Match.Optional(Number)
        });

        try {
            return Calevents.update(event._id, {
                $set: event
            });
        } catch (exception) {
            throw new Meteor.Error('500', `${exception}`);
        }
    },

    removeEvent(event){
      check(event, String);

      try{
        return Calevents.remove(event);
      } catch (exception){
        throw new Meteor.Error('500', `${exception}`);
      }
    }

});
