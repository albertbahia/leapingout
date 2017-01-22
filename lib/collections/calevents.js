Calevents = new Mongo.Collection('calevents')

Calevents.allow({
  insert: function(){
    false
  },
  update: function(){
    false
  },
  remove: function(){
    false
  }
});

Calevents.deny({
  insert: function(){
    true
  },
  update: function(){
    true
  },
  remove: function(){
    true
  }
});

//Making of Schema
let CaleventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'What is the title of this event?'
  },
  'start': {
    type: String,
    label: 'When this event will start?'
  },
  'end': {
    type: String,
    label: 'When this event will end?'
  },
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: ['Birthday', 'Corporate', 'Wedding', 'Miscellaneous']
  },
  'guests': {
    type: Number,
    label: 'What is the number of guests expected?'
  }
});

//Attaching made Schema to Collection
Calevents.attachSchema(CaleventsSchema);
