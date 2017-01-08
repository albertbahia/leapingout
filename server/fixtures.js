// Fixture data

import _ from 'lodash';
import { image, helpers, company, address, lorem, phone } from 'faker';

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

			 const phoneNumber = phone.phoneNumber();

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

				 venuePhone: phoneNumber,

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

	min=moment().valueOf();
	max=moment(min).add(30, 'days').valueOf();

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

				var r = Math.floor(Math.random() * 5000);
				var randomUserId = Meteor.users.find({}, {skip:r, limit:1}).fetch();

				// console.log('r:', r);
				// console.log('randomUser:', randomUserId);
				// console.log('randomUserId:', randomUserId[0]._id);
				// console.log('randomUserName:', randomUserId[0].name);

				var r = Math.floor(Math.random() * 5000);
				var randomVenue = Venues.find({},{skip:r, limit:1}).fetch();
				//var randomVenue = Venues.find({},{skip:10, limit:1});

				startTime = getRandomIntInclusive(min, max);
	      endTime = getRandomIntInclusive(startTime, max);


	 			Events.insert({
					eventName: words,
				  //eventVenueName: randomVenue[0].companyName,
				  eventVenueId: randomVenue[0]._id,
					eventStreetAddress: streetAddress,
					eventStreetName: streetName,
					eventCity: city,
					eventStateAbbr: stateAbbr,
					eventZipCode: zipCode,
					eventLat: latitude,
					eventLon: longitude,

					eventStartDate: moment(startTime),
					eventEndDate: moment(endTime),

				  createdUser: randomUserId[0]._id,
					eventDateCreated: now,
					summary: paragraph,
					eventNumberInAttendance: r
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

function randomDate(start, end, startHour, endHour) {
	var date = new Date(+start + Math.random() * (end - start));
	var hour = startHour + Math.random() * (endHour - startHour) | 0;
	date.setHours(hour);
	return date;
}

function getRandomIntInclusive(min, max) {
	// Returns a random integer between min (included) and max (included)
	// Using Math.round() will give you a non-uniform distribution!
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
