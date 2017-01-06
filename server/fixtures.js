// Fixture data

import _ from 'lodash';
import { image, helpers, company, address, lorem } from 'faker';

Meteor.startup(function(){
if (Meteor.users.find({}).count() === 0){

		_.times(5000,function(){
			const {name, email, phone} = helpers.createCard();

			Meteor.users.insert({
				name, email, phone,
				avatar: image.avatar()
			})
		});

		Meteor.users.insert({
			name: "Kenny Kwok",
			email: "pigeonplan@gmail.com",
			phone: helpers.createCard.phone(),
			avatar: image.avatar()
		})
}


// =====================================================================

if (Venues.find({}).count() === 0) {

	var now = Date.now();

	_.times(5000,function(){
			 const companyName = company.companyName();

			 const streetAddress = address.streetAddress();
			 const streetName = address.streetName();
			 const city = address.city();
			 const stateAbbr = address.stateAbbr();
			 const zipCode = address.zipCode();
			 const latitude = address.latitude();
			 const longitude = address.longitude();

			 const words = lorem.words();
			 const paragraph = lorem.paragraph();

			 Venues.insert({
				 venueName: companyName,

				 venueStreetAddress: streetAddress,
				 venueStreetName: streetName,
				 venueCity: city,
				 venueStateAbbr: stateAbbr,
				 venueZipCode: zipCode,

				 venueLat: latitude,
				 venueLon: longitude,

				 venuePopularityRating: 7,
		 		 venueCountry: "testVenueCountry1",
				 venueEventId: "testVenueEventId1",
				 venueCreatorId: "testCreatorId1",
				 venueCreatedAt: now
			 })
	});
}
// 	Venues.insert({
// 		venueName: "testVenueName1",
// 		venueStreetAddress: "testVenueStreetAddress1",
// 		venueCity: "testVenueCity1",
// 		venueState: "testVenueState1",
// 		venueLatLong: "testVenueLatLong1",
//
// 		venuePopularityRating: 7,
// 		venueCountry: "testVenueCountry1",
// 		venueEventId: "testVenueEventId1",
// 		venueCreatorId: "testCreatorId1",
// 		venueCreatedAt: now
// 	})
//
// 	Venues.insert({
// 		venueName: "testVenueName1",
// 		venueStreetAddress: "testVenueStreetAddress1",
// 		venueCity: "testVenueCity1",
// 		venueState: "testVenueState1",
// 		venueLatLong: "testVenueLatLong1",
// 		venuePopularityRating: 7,
// 		venueCountry: "testVenueCountry1",
// 		venueEventId: "testVenueEventId1",
// 		venueCreatorId: "testCreatorId1",
// 		venueCreatedAt: now
// 	})
// }


if (Events.find({}).count() === 0) {

	var now = Date.now();

	 _.times(5000,function(){
	 			//const companyName = company.companyName();

				const streetAddress = address.streetAddress();
				const streetName = address.streetName();
				const city = address.city();
				const stateAbbr = address.stateAbbr();
				const zipCode = address.zipCode();
				const latitude = address.latitude();
				const longitude = address.longitude();

				const words = lorem.words();
				const paragraph = lorem.paragraph();

			//	var r = Math.floor(Math.random() * 5000);
			//	var randomUser = Meteor.users.find().limit(1).skip(r);

				// var r = Math.floor(Math.random() * 5000);
				// var randomVenue = Venues.find({},{ limit(1) , skip(r) });

	 			Events.insert({
					eventName: words,
					eventVenueName: randomeVenue.companyName,
					eventVenueId: randomeVenue._id,
					eventStreetAddress: streetAddress,
					eventStreetName: streetName,
					eventCity: city,
					eventStateAbbr: stateAbbr,
					eventZipCode: zipCode,
					eventLat: latitude,
					eventLon: longitude,
					eventStartDate: "May 05",
					eventEndDate: "May 05",
					eventStartTime: "1:00pm",
					eventEndTime: "4:00pm",
					createdUser: randomUser,
					eventDateCreated: now,
					summary: paragraph,
					eventNumberInAttendance: 5
	 			})
	 });

	// Events.insert({
	// 	eventName: "Happy Hour",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreeteventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	eventDateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 5
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 2",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 10
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 3",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 15
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 4",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 20
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 5",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 25
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 6",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 30
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 7",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 35
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 8",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 40
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 9",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 45
	// })
	//
	// 	Events.insert({
	// 	eventName: "Happy Hour 10",
	// 	eventVenueName: "Grasshopper",
	// 	eventStreetAddress: "123 Main Street, Morristown NJ 12345",
	// 	eventStartDate: "May 05",
	// 	eventEndDate: "May 05",
	// 	eventStartTime: "1:00pm",
	// 	eventEndTime: "4:00pm",
	// 	createdUser: "Joey",
	// 	dateCreated: now,
	// 	summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
	// 	eventNumberInAttendance: 50
	// })
}

});
