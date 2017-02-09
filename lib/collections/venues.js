Venues = new Mongo.Collection('venues');

import SimpleSchema from 'simpl-schema';

Venues.allow ({
  insert() {return false;},
  update() {return false;},
  remove() {return false;}
});

Venues.deny ({
  insert() {return true;},
  update() {return true;},
  remove() {return true;}
});

let VenuesSchema = new SimpleSchema({
  		venueName: {
        type: String,
        label: 'Need a venue name'
      }, 
			venueStreetAddress: {
        type: String,
        label: 'Need a venue street address'
      }, 
			venueCity: {
        type: String,
        label: 'Need a venue city'
      }, 
			venueState: {
        type: String,
        label: 'Need a venue state'
      }, 
      venueLatLong: {
        type: String,
        label: 'Need a venue lat/long'
      },
      venuePopularityRating: {
        type: Number,
        label: 'Need a venue popularity rating'
      },
      venueCountry: {
        type: String,
        label: 'Need a venue country'
      }, 
      venueEventIds: {
        type: Array,
        label: 'Need venue event ids'
      },
			venueCreatorId: {
        type: String,
        label: 'Need the venue creator id'
      }, 
			venueCreatedAt: {
        type: Date,
        label: 'Need the timestamp for venue creation'
      },
			venueUpdatedAt: {
        type: Date,
        label: 'Need the timestamp for venue update'
      },
			venueProfileImageUrl: {
        type: String,
        label: 'Need the image url for the default venue profile image'
      }
});

Venues.attachSchema(VenuesSchema);