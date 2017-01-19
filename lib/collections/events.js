Events = new Mongo.Collection('events');

// Allows/Denys

Events.allow ({

  insert() {return false;},
  update() {return false;},
  remove() {return false;}

});

Events.deny ({

  insert() {return true;},
  update() {return true;},
  remove() {return true;}

});

let EventsSchema = new SimpleSchema({
  'eventName': {
    type: String,
    label: 'Need the event name.'
  },
  'eventVenueId': {
    type: String,
    label: 'Need the event venue id.'
  },
  'eventStreetAddress': {
    type: String,
    label: 'Need the event street address.'
  },
  'eventStreetName': {
    type: String,
    label: 'Need the event street name.'
  },
  'eventCity': {
    type: String,
    label: 'Need the event city.'
  },
  'eventStateAbbr': {
    type: String,
    label: 'Need the event state abbreviation.'
  },
  'eventZipCode': {
    type: String,
    label: 'Need the event zip code.'
  },
  'eventLat': {
    type: String,
    label: 'Need the event latitude.'
  },
  'eventLon': {
    type: String,
    label: 'Need the event longitude.'
  },
  'eventStartDate': {
    type: Object,
    label: 'Need the event start date object.'
  },
  'eventEndDate': {
    type: Object,
    label: 'Need the event start end object.'
  },
  'createdUser': {
    type: String,
    label: 'Need the id of the user who created the event.'
  },
  'eventDateCreated': {
    type: Number,
    label: 'Need the timestamp in milliseconds of when this event is created.'
  },
  'summary': {
    type: String,
    label: 'Need the summary of this event.'
  },
  'eventNumberInAttendance': {
    type: Number,
    label: 'Need the number of people in attendance.'
  }
});

Events.attachSchema(EventsSchema);
